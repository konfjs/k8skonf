import { log } from 'node:console';
import * as crypto from 'node:crypto';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { compile } from 'json-schema-to-typescript';
import pc from 'picocolors';
import { ClassDeclarationStructure, Project, StructureKind } from 'ts-morph';
import * as yaml from 'yaml';
import { formatCode } from './utils.js';

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
    yaml.parseAllDocuments(fs.readFileSync(yamlSavePath, 'utf-8')).forEach((c) =>
        crds.push(c.toJS()),
    );
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
            yaml.parseAllDocuments(fs.readFileSync(crdPathOrUrl, 'utf-8')).forEach((c) =>
                output[''].push(c.toJS()),
            );
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
                    log(`Reading CRDs from ${pc.yellowBright(url)}`);
                    yaml.parseAllDocuments(fs.readFileSync(url, 'utf-8')).forEach((c) =>
                        output[pkg].push(c.toJS()),
                    );
                }
            }
        }
    }

    for (const [pkg, crds] of Object.entries(output)) {
        for (const crd of crds) {
            for (const crdVersion of crd.spec.versions) {
                if (crdVersion.schema?.openAPIV3Schema) {
                    const className = `${crd.spec.names.kind}${crdVersion.name}`;
                    const compiledInterface = await compile(
                        crdVersion.schema.openAPIV3Schema,
                        `${className}Args`,
                        {
                            bannerComment: '',
                            additionalProperties: false,
                            format: false,
                        },
                    );
                    const fileLocation = path.join(outDir, pkg, `${className}.ts`);
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
                    });
                    if (isNamespaced) {
                        metadata?.setType('NamespacedObjectMetav1');
                        sourceFile.addImportDeclaration({
                            moduleSpecifier: '@k8skonf/core',
                            namedImports: ['NamespacedApiObject', 'NamespacedObjectMetav1'],
                        });
                    } else {
                        metadata?.setType('ObjectMetav1');
                        sourceFile.addImportDeclaration({
                            moduleSpecifier: '@k8skonf/core',
                            namedImports: ['ApiObject', 'ObjectMetav1'],
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
                                type: isNamespaced ? 'NamespacedObjectMetav1' : 'ObjectMetav1',
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
    formatCode(outDir);
}
