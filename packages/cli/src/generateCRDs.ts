import { log } from 'node:console';
import * as crypto from 'node:crypto';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { compile } from 'json-schema-to-typescript';
import pc from 'picocolors';
import { type ClassDeclarationStructure, Project, StructureKind } from 'ts-morph';
import * as yaml from 'yaml';
import { formatCode } from './utils.ts';

interface CRD {
    apiVersion: string;
    kind: string;
    metadata: {
        name: string;
    };
    spec: {
        group: string;
        versions: {
            name: string;
            schema?: {
                openAPIV3Schema?: any;
            };
        }[];
        names: {
            categories?: string[];
            kind: string;
            listKind?: string;
            plural: string;
            shortNames?: string[];
            singular?: string;
        };
        scope: 'Namespaced' | 'Cluster';
    };
}

interface K8sList {
    apiVersion: string;
    kind: 'List';
    items: CRD[];
    metadata: {
        resourceVersion: string;
    };
}

function isK8sList(o: any | K8sList): o is K8sList {
    return o && typeof o === 'object' && o.kind === 'List';
}

interface K8sKonfig {
    /**
     * @default "./crds"
     */
    outDir?: string;
    crds?: {
        [pkg: string]: string[];
    };
}

const cacheHome = path.join(os.homedir(), '.cache', 'k8skonf');

export function readConfig(configPath: string) {
    const config: K8sKonfig = yaml.parse(fs.readFileSync(configPath, 'utf8'));
    return config;
}

function parseCRDs(crds: CRD[], data: string) {
    yaml.parseAllDocuments(data).forEach((c) => {
        const json = c.toJS();
        if (isK8sList(json)) {
            json.items.forEach((subC) => crds.push(subC));
        } else crds.push(json);
    });
}

async function fetchAndParseCRDs(crds: CRD[], url: string, cacheDir: string) {
    const cacheId = crypto.createHash('sha1').update(url).digest('hex');
    const yamlSavePath = path.join(cacheDir, `${cacheId}-${path.basename(url)}`);
    if (!fs.existsSync(yamlSavePath)) {
        log(`Fetching CRDs from ${pc.yellowBright(url.toString())}`);
        const req = await fetch(url);
        const data = await req.text();
        fs.writeFileSync(yamlSavePath, data);
    } else {
        log(`Reading CRDs from ${pc.yellowBright(url)} (cached)`);
    }
    parseCRDs(crds, fs.readFileSync(yamlSavePath, 'utf-8'));
}

interface Output {
    [dir: string]: CRD[];
}

export async function generateCRDs(crdPathOrUrl?: string, config?: K8sKonfig) {
    const project = new Project();
    const outDir = path.resolve(config?.outDir || './crds');
    fs.rmSync(outDir, { recursive: true, force: true });
    fs.mkdirSync(cacheHome, { recursive: true });
    const output: Output = {};

    if (crdPathOrUrl) {
        output[''] = [];
        try {
            const url = new URL(crdPathOrUrl);
            await fetchAndParseCRDs(output[''], url.toString(), cacheHome);
        } catch (e) {
            log(`Reading CRDs from ${pc.yellowBright(crdPathOrUrl)}`);
            parseCRDs(output[''], fs.readFileSync(crdPathOrUrl, 'utf-8'));
        }
    } else if (config) {
        for (const [pkg, urls] of Object.entries(config.crds || {})) {
            output[pkg] = [];
            const cacheDir = path.join(cacheHome, pkg);
            fs.mkdirSync(cacheDir, { recursive: true });
            for (const url of urls) {
                try {
                    new URL(url);
                    await fetchAndParseCRDs(output[pkg], url, cacheDir);
                } catch (e) {
                    log(`Reading CRDs from ${pc.yellowBright(url)} (local)`);
                    parseCRDs(output[pkg], fs.readFileSync(url, 'utf-8'));
                }
            }
        }
    }

    for (const [pkg, crds] of Object.entries(output)) {
        for (const crd of crds) {
            for (const crdVersion of crd.spec.versions) {
                if (crdVersion.schema?.openAPIV3Schema) {
                    if (!fs.existsSync(path.join(outDir, pkg, crdVersion.name))) {
                        fs.mkdirSync(path.join(outDir, pkg, crdVersion.name), { recursive: true });
                    }
                    const compiledInterface = await compile(
                        crdVersion.schema.openAPIV3Schema,
                        `${crd.spec.names.kind}Args`,
                        {
                            bannerComment: '',
                            additionalProperties: false,
                            format: false,
                        },
                    );
                    const fileLocation = path.join(
                        outDir,
                        pkg,
                        crdVersion.name,
                        `${crd.spec.names.kind}.ts`,
                    );
                    const sourceFile = project.createSourceFile(fileLocation, compiledInterface, {
                        overwrite: true,
                    });
                    const isNamespaced = crd.spec.scope === 'Namespaced';

                    const interfaceDecleration = sourceFile.getInterfaces()[0];
                    interfaceDecleration.getProperty('apiVersion')?.remove();
                    interfaceDecleration.getProperty('kind')?.remove();
                    interfaceDecleration.getProperty('status')?.remove();
                    const metadata = interfaceDecleration.getProperty('metadata');
                    metadata?.setIsReadonly(true);
                    metadata?.setHasQuestionToken(true);
                    const spec = interfaceDecleration.getProperty('spec');
                    spec?.setIsReadonly(true);
                    sourceFile.addImportDeclaration({
                        moduleSpecifier: '@k8skonf/core',
                        namedImports: ['K8sApp'],
                        isTypeOnly: true,
                    });
                    if (isNamespaced) {
                        metadata?.setType('NamespacedObjectMeta');
                        sourceFile.addImportDeclaration({
                            moduleSpecifier: '@k8skonf/core',
                            namedImports: ['NamespacedApiObject', 'type NamespacedObjectMeta'],
                        });
                    } else {
                        metadata?.setType('ObjectMeta');
                        sourceFile.addImportDeclaration({
                            moduleSpecifier: '@k8skonf/core',
                            namedImports: ['ApiObject', 'type ObjectMeta'],
                        });
                    }

                    const classDecleration: ClassDeclarationStructure = {
                        kind: StructureKind.Class,
                        name: interfaceDecleration.getName().replace('Args', ''),
                        extends: isNamespaced ? 'NamespacedApiObject' : 'ApiObject',
                        isExported: true,
                        properties: [
                            {
                                name: 'apiVersion',
                                initializer: `'${crd.spec.group}/${crdVersion.name}'`,
                                isReadonly: true,
                            },
                            {
                                name: 'kind',
                                initializer: `'${crd.spec.names.kind}'`,
                                isReadonly: true,
                            },
                            {
                                name: 'metadata',
                                type: isNamespaced ? 'NamespacedObjectMeta' : 'ObjectMeta',
                                isReadonly: true,
                            },
                            {
                                name: 'spec',
                                type: `${interfaceDecleration.getName()}['spec']`,
                                isReadonly: true,
                            },
                        ],
                        ctors: [
                            {
                                parameters: [
                                    {
                                        name: 'app',
                                        type: 'K8sApp',
                                    },
                                    {
                                        name: 'name',
                                        type: 'string',
                                    },
                                    {
                                        name: 'args',
                                        type: interfaceDecleration.getName(),
                                    },
                                ],
                                statements: [
                                    'super(args.metadata?.name || name);',
                                    'this.metadata = {',
                                    '  name: args.metadata?.name || name,',
                                    '  ...args.metadata,',
                                    '};',
                                    'this.spec = args.spec;',
                                    'app.addResource(this);',
                                ],
                            },
                        ],
                    };
                    sourceFile.addClass(classDecleration);
                }
            }
        }
    }

    log(`Saving generated files to the ${pc.yellowBright(outDir)} directory`);
    project.saveSync();

    for (const crdDir of fs.readdirSync(outDir)) {
        let indexFileContent = '';
        for (const apiVersionDir of fs.readdirSync(path.join(outDir, crdDir))) {
            let apiVersionFileContent = '';
            for (const file of fs.readdirSync(path.join(outDir, crdDir, apiVersionDir))) {
                apiVersionFileContent += `export * from './${apiVersionDir}/${file}';\n`;
            }
            fs.writeFileSync(
                path.join(outDir, crdDir, `${apiVersionDir}.ts`),
                apiVersionFileContent,
                'utf-8',
            );
            indexFileContent += `export * as ${apiVersionDir} from './${apiVersionDir}.ts';\n`;
        }
        fs.writeFileSync(path.join(outDir, crdDir, 'index.ts'), indexFileContent, 'utf-8');
    }
    formatCode(outDir);
}
