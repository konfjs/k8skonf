#!/usr/bin/env tsx
import * as crypto from 'node:crypto';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { compile } from 'json-schema-to-typescript';
import { ClassDeclarationStructure, Project, StructureKind } from 'ts-morph';
import * as yaml from 'yaml';
import { formatCode } from './utils.js';
import { Command } from 'commander';
import { log } from 'node:console';
import pc from 'picocolors';

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

async function main() {
    const version = JSON.parse(
        fs.readFileSync(path.join(import.meta.dirname, '..', 'package.json'), 'utf-8'),
    ).version;
    const program = new Command();
    program
        .name('@k8skonf/cli')
        .argument('<crd-path-or-url>', 'CRD path or URL')
        .version(version)
        .parse();

    const crdPathOrUrl = program.args[0];
    const cacheHome = path.join(os.homedir(), '.cache', 'k8skonf');
    const cacheId = crypto.createHash('sha256').update(crdPathOrUrl).digest('hex');
    const cacheDir = path.join(cacheHome, cacheId);
    fs.existsSync(cacheDir) || fs.mkdirSync(cacheDir, { recursive: true });
    const yamlSavePath = path.join(cacheDir, path.basename(crdPathOrUrl));

    if (!fs.existsSync(yamlSavePath)) {
        const req = await fetch(crdPathOrUrl);
        const data = await req.text();
        fs.writeFileSync(yamlSavePath, data);
    }

    const project = new Project();
    const crds = yaml.parseAllDocuments(fs.readFileSync(yamlSavePath, 'utf-8'));
    for (const c of crds) {
        const crd: CRD = c.toJS();
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
                const sourceFile = project.createSourceFile(
                    path.join('crds', `${className}.ts`),
                    compiledInterface,
                    {
                        overwrite: true,
                    },
                );
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

    log(`Saving generated files to the ${pc.yellowBright('crds')} directory`);
    project.saveSync();
    formatCode(path.resolve('crds'));
}
main();
