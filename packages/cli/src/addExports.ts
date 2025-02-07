import { log } from 'node:console';
import * as fs from 'node:fs';
import * as path from 'node:path';
import pc from 'picocolors';
import { IndentationText, Project, QuoteKind } from 'ts-morph';

interface ApiResources {
    [apiGroup: string]: {
        [apiVersion: string]: string[];
    };
}

function getApiResources(modelsPath: string, apiResources: ApiResources): void {
    for (const apiGroup of fs.readdirSync(modelsPath, { withFileTypes: true })) {
        if (apiGroup.isDirectory()) {
            apiResources[apiGroup.name] = {};

            for (const apiVersion of fs.readdirSync(path.join(apiGroup.parentPath, apiGroup.name), {
                withFileTypes: true,
            })) {
                if (apiVersion.isDirectory()) {
                    apiResources[apiGroup.name][apiVersion.name] = [];

                    for (const file of fs.readdirSync(
                        path.join(apiVersion.parentPath, apiVersion.name),
                        {
                            withFileTypes: true,
                        },
                    )) {
                        if (file.isFile()) {
                            apiResources[apiGroup.name][apiVersion.name].push(
                                path.basename(file.name, '.ts'),
                            );
                        }
                    }
                }
            }
        }
    }
}

function main() {
    const corePath = path.join(import.meta.dirname, '../../core');
    const modelsPath = path.join(corePath, 'src/models');

    const project = new Project({
        tsConfigFilePath: path.join(corePath, 'tsconfig.json'),
        manipulationSettings: {
            indentationText: IndentationText.TwoSpaces,
            quoteKind: QuoteKind.Double,
            insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
            useTrailingCommas: true,
        },
    });

    const apiResources: ApiResources = {};
    getApiResources(modelsPath, apiResources);

    let indexFileContent = `export * from './ApiObject';
export * from './K8sApp';
export * from './models/meta/v1/types/ObjectMeta';
export * from './Helm';
`;

    for (const apiGroup of Object.keys(apiResources)) {
        let apiGroupFileContent = '';
        for (const apiVersion of Object.keys(apiResources[apiGroup])) {
            const apiResourceList = apiResources[apiGroup][apiVersion];
            if (apiResourceList.length > 0) {
                apiGroupFileContent += `export * as ${apiVersion} from './${apiGroup}/${apiVersion}';\n`;

                let apiVersionFileContent = '';
                for (const apiResource of apiResourceList) {
                    apiVersionFileContent += `export * from './${apiVersion}/${apiResource}';\n`;
                }
                const apiVersionFilePath = path.join(modelsPath, apiGroup, `${apiVersion}.ts`);
                log(`Creating file ${pc.cyan(apiVersionFilePath)}`);
                project.createSourceFile(apiVersionFilePath, apiVersionFileContent, {
                    overwrite: true,
                });
            }
        }

        if (apiGroupFileContent) {
            const apiGroupFilePath = path.join(modelsPath, `${apiGroup}.ts`);
            log(`Creating file ${pc.cyan(apiGroupFilePath)}`);
            project.createSourceFile(apiGroupFilePath, apiGroupFileContent, {
                overwrite: true,
            });
            indexFileContent += `export * as ${apiGroup} from './models/${apiGroup}';\n`;
        }
    }

    project.createSourceFile(path.join(corePath, 'src', 'index.ts'), indexFileContent, {
        overwrite: true,
    });

    project.saveSync();
}

main();
