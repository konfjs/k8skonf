import { log } from 'node:console';
import * as fs from 'node:fs';
import * as path from 'node:path';
import pc from 'picocolors';
import { IndentationText, Project, QuoteKind } from 'ts-morph';
import { Schemas } from './parseSchemas';

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

    const schemas: Schemas = JSON.parse(
        fs.readFileSync(path.join(import.meta.dirname, '../schemas.json'), 'utf-8'),
    );

    for (const sourceFile of project.getSourceFiles()) {
        if (sourceFile.getDirectoryPath().startsWith(modelsPath)) {
            const fileName = sourceFile.getBaseNameWithoutExtension();
            const classSchema = schemas.classes[fileName];
            const interfaceSchema = schemas.interfaces[fileName];
            const schema = classSchema ?? interfaceSchema;

            /**
             * In the OpenAPI spec file, classes contain ".k8s.io", interfaces don't.
             * "flowcontrol.apiserver.k8s.io" is used in classes, but just "flowcontrol" was used in interfaces.
             * "rbac.authorization.k8s.io" is used in classes, but just "rbac" was used in interfaces.
             *
             * Following the same logic, "core" is used in the classes, but it's empty in the interfaces.
             */
            const group = schema.group === '' ? 'core' : schema.group;
            let destDir = path.join(
                modelsPath,
                group
                    .replace('.k8s.io', '')
                    .replace('flowcontrol.apiserver', 'flowcontrol')
                    .replace('rbac.authorization', 'rbac'),
                schema.version,
            );

            if (interfaceSchema) {
                destDir = path.join(destDir, 'types');
            }

            if (!fs.existsSync(destDir)) {
                log(`Creating directory ${pc.blueBright(destDir)}`);
                fs.mkdirSync(destDir, { recursive: true });
            }

            const destFile = path.join(destDir, `${schema.kind}.ts`);

            if (schema) {
                log(`Moving ${pc.gray(`${fileName}.ts`)} to ${pc.cyan(destFile)}`);
                sourceFile.move(destFile);
            }
        }
    }

    project.saveSync();
}

main();
