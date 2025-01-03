import * as fs from 'node:fs';
import * as path from 'node:path';
import pc from 'picocolors';
import {
    ClassDeclaration,
    ConstructorDeclarationStructure,
    IndentationText,
    InterfaceDeclarationStructure,
    Project,
    PropertySignatureStructure,
    QuoteKind,
    SourceFile,
    StatementStructures,
    StructureKind,
    SyntaxKind,
} from 'ts-morph';
import { formatCode, removeUnusedFiles } from './utils.js';

interface GroupVersionKindMapOutput {
    /**
     * @example "Deploymentv1"
     */
    [schemaName: string]: {
        /**
         * @example "io.k8s.api.apps.v1.Deployment"
         */
        originalSchemaName: string;
        /**
         * @example '[{group: "apps", kind: "Deployment", version: "v1"}]'
         */
        gvk?: {
            group: string;
            kind: string;
            version: string;
        }[];
        /**
         * @example "/apis/apps/v1/namespaces/{namespace}/deployments"
         */
        path?: string;
        namespaced?: boolean;
    };
}

function removeUnusedThings(
    sourceFile: SourceFile,
    classDeclaration: ClassDeclaration,
    className: string,
    groupVersionKindMap: GroupVersionKindMapOutput,
) {
    const statusImport = `${groupVersionKindMap[className]?.gvk?.[0].kind}Status${groupVersionKindMap[className]?.gvk?.[0].version}`;
    sourceFile.getImportDeclaration('../http/http.js')?.remove();
    sourceFile.getImportDeclaration(`../models/${statusImport}.js`)?.remove();
    sourceFile.getImportDeclaration('../models/SubjectAccessReviewStatusv1.js')?.remove();
    sourceFile.getImportDeclaration('../models/SubjectRulesReviewStatusv1.js')?.remove();
    sourceFile.getImportDeclaration('../models/Quantity.js')?.remove();
    sourceFile.getImportDeclaration('../models/IntOrString.js')?.remove();
    classDeclaration.getConstructors()[0]?.remove();
    classDeclaration.getStaticMethod('getAttributeTypeMap')?.remove();
    classDeclaration.getStaticMember('discriminator')?.remove();
    classDeclaration.getStaticMember('mapping')?.remove();
    classDeclaration.getStaticMember('attributeTypeMap')?.remove();
    classDeclaration.getProperty('status')?.remove();
}

function removeAutogeneratedComments(sourceFile: SourceFile) {
    const start = sourceFile.getChildAtIndex(0).getLeadingCommentRanges()[0].getPos();
    const end = sourceFile.getChildAtIndex(0).getLeadingCommentRanges()[0].getEnd();
    sourceFile.replaceText([start, end], '');
}

function replaceRefs(sourceFile: SourceFile) {
    const t = sourceFile.getTypeAlias(sourceFile.getBaseNameWithoutExtension());
    t?.findReferencesAsNodes().forEach((node) => {
        const typeRef = node.getFirstAncestorByKind(SyntaxKind.TypeReference);
        if (typeRef) {
            console.log(
                `Replacing ${pc.gray(typeRef.getText())} in ${pc.cyan(typeRef.getSourceFile().getBaseName())} with ${pc.yellowBright('number | string')}`,
            );
            typeRef.replaceWithText('number | string');
        }
    });
    sourceFile.delete();
}

function replaceNumberStringTypes(project: Project, modelsPath: string) {
    const quantityFile = project.getSourceFile(path.join(modelsPath, 'Quantity.ts'));
    const intOrStringFile = project.getSourceFile(path.join(modelsPath, 'IntOrString.ts'));

    if (quantityFile) {
        replaceRefs(quantityFile);
    }

    if (intOrStringFile) {
        replaceRefs(intOrStringFile);
    }
}

function morph() {
    const corePath = path.join(import.meta.dirname, '../../core');
    const modelsPath = path.join(corePath, 'src/models');
    removeUnusedFiles(modelsPath);
    formatCode(modelsPath);

    const project = new Project({
        tsConfigFilePath: path.join(corePath, 'tsconfig.json'),

        manipulationSettings: {
            indentationText: IndentationText.TwoSpaces,
            quoteKind: QuoteKind.Double,
            insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
            useTrailingCommas: true,
        },
    });
    replaceNumberStringTypes(project, modelsPath);

    const groupVersionKindMap: GroupVersionKindMapOutput = JSON.parse(
        fs.readFileSync(
            path.join(import.meta.dirname, '..', 'group-version-kind-map.json'),
            'utf-8',
        ),
    );

    for (const sourceFile of project.getSourceFiles()) {
        if (modelsPath === sourceFile.getDirectoryPath()) {
            removeAutogeneratedComments(sourceFile);
            const classDeclaration = sourceFile.getClasses()[0];
            const className = classDeclaration?.getName();

            if (classDeclaration && className) {
                removeUnusedThings(sourceFile, classDeclaration, className, groupVersionKindMap);
                /**
                 * Remove all the Status classes.
                 */
                const isStatus = /^[A-Za-z]+Statusv\d/;
                if (sourceFile.getBaseNameWithoutExtension().match(isStatus)) {
                    sourceFile.delete();
                    continue;
                }
                /**
                 * If the groupVersionKindMap contains the "path" property, then it's a Kubernetes API resource.
                 * Everything else should be interfaces.
                 */
                if (groupVersionKindMap[className]?.path) {
                    const apiVersionProperty = classDeclaration.getProperty('apiVersion');
                    if (apiVersionProperty) {
                        const group = groupVersionKindMap[className].gvk?.[0].group;
                        const version = groupVersionKindMap[className].gvk?.[0].version;
                        const groupVersion = group ? `${group}/${version}` : version;
                        apiVersionProperty.setInitializer(`'${groupVersion}'`);
                        apiVersionProperty.removeType();
                        apiVersionProperty.setIsReadonly(true);
                        apiVersionProperty.setHasQuestionToken(false);
                    }

                    const kindProperty = classDeclaration.getProperty('kind');
                    if (kindProperty) {
                        kindProperty.setInitializer(
                            `'${groupVersionKindMap[className].gvk?.[0].kind}'`,
                        );
                        kindProperty.removeType();
                        kindProperty.setIsReadonly(true);
                        kindProperty.setHasQuestionToken(false);
                    }

                    sourceFile.addImportDeclaration({
                        moduleSpecifier: '../K8sApp.js',
                        namedImports: ['K8sApp'],
                    });

                    const interfaceProps: PropertySignatureStructure[] = [];

                    const i: InterfaceDeclarationStructure = {
                        kind: StructureKind.Interface,
                        name: `${className}Args`,
                        isExported: true,
                        properties: interfaceProps,
                    };

                    const c: ConstructorDeclarationStructure = {
                        kind: StructureKind.Constructor,
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
                                type: `${className}Args`,
                            },
                        ],
                    };

                    const preferredOrder = ['apiVersion', 'kind', 'metadata', 'spec'];
                    const orderedProps = classDeclaration.getProperties().sort((a, b) => {
                        const aIndex = preferredOrder.indexOf(a.getName());
                        const bIndex = preferredOrder.indexOf(b.getName());
                        if (aIndex === -1 && bIndex === -1) return 0;
                        if (aIndex === -1) return 1;
                        if (bIndex === -1) return -1;
                        return aIndex - bIndex;
                    });

                    c.statements = new Array<StatementStructures>();
                    c.statements.push('super(args.metadata?.name || name);');
                    for (const [i, prop] of orderedProps.entries()) {
                        prop.setIsReadonly(true);
                        classDeclaration.getProperty(prop.getName())?.setOrder(i);
                        const interfaceProp: PropertySignatureStructure = {
                            kind: StructureKind.PropertySignature,
                            name: prop.getName(),
                            type: prop.getTypeNode()?.getText(),
                            hasQuestionToken: prop.hasQuestionToken(),
                            isReadonly: true,
                        };
                        if (prop.getName() === 'apiVersion' || prop.getName() === 'kind') {
                            continue;
                        }
                        if (prop.getName() === 'metadata') {
                            interfaceProp.hasQuestionToken = true;
                            c.statements.push('this.metadata = {');
                            c.statements.push('  name: args.metadata?.name || name,');
                            c.statements.push('  ...args.metadata,');
                            c.statements.push('};');
                            prop.setHasQuestionToken(false);
                            if (groupVersionKindMap[className].namespaced) {
                                classDeclaration.setExtends('NamespacedApiObject');
                                prop.setType('NamespacedObjectMetav1');
                                sourceFile.addImportDeclaration({
                                    moduleSpecifier: '../ApiObject.js',
                                    namedImports: ['NamespacedObjectMetav1', 'NamespacedApiObject'],
                                });
                                interfaceProp.type = 'NamespacedObjectMetav1';
                                sourceFile
                                    .getImportDeclaration('../models/ObjectMetav1.js')
                                    ?.remove();
                            } else {
                                classDeclaration.setExtends('ApiObject');
                                sourceFile.addImportDeclaration({
                                    moduleSpecifier: '../ApiObject.js',
                                    namedImports: ['ApiObject'],
                                });
                                interfaceProp.type = 'ObjectMetav1';
                            }
                        } else {
                            c.statements.push(`this.${prop.getName()} = args.${prop.getName()};`);
                        }
                        interfaceProps.push(interfaceProp);
                    }
                    sourceFile.insertInterface(classDeclaration.getChildIndex(), i);
                    c.statements.push('app.addResource(this);');
                    classDeclaration.addConstructor(c);
                } else {
                    if (className === 'ObjectMetav1') {
                        classDeclaration.getProperty('namespace')?.remove();
                        classDeclaration.getProperty('creationTimestamp')?.remove();
                        classDeclaration.getProperty('deletionGracePeriodSeconds')?.remove();
                        classDeclaration.getProperty('deletionTimestamp')?.remove();
                        classDeclaration.getProperty('generation')?.remove();
                        classDeclaration.getProperty('resourceVersion')?.remove();
                        classDeclaration.getProperty('uid')?.remove();
                    }
                    const i: InterfaceDeclarationStructure = {
                        kind: StructureKind.Interface,
                        name: className,
                        isExported: true,
                        docs: [
                            {
                                kind: StructureKind.JSDoc,
                                description: `\n${classDeclaration
                                    .getJsDocs()
                                    .map((doc) => doc.getInnerText())}`,
                            },
                        ],
                        properties: classDeclaration.getProperties().map((prop) => {
                            return {
                                name: prop.getName(),
                                type: prop.getTypeNode()?.getText(),
                                hasQuestionToken: prop.hasQuestionToken(),
                                isReadonly: prop.isReadonly(),
                                docs: [
                                    {
                                        kind: StructureKind.JSDoc,
                                        description: `\n${prop.getJsDocs().map((doc) => {
                                            return doc.getInnerText();
                                        })}`,
                                    },
                                ],
                            };
                        }),
                    };
                    sourceFile.addInterface(i);
                    classDeclaration.remove();
                }

                sourceFile.getImportDeclarations().forEach((importDeclaration) => {
                    const updatedImport = importDeclaration
                        .getModuleSpecifierValue()
                        .replace('./models', '');
                    importDeclaration.setModuleSpecifier(updatedImport);
                });
            }
        }
    }

    project.saveSync();
    formatCode(modelsPath);
}

morph();
