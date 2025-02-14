import { log } from 'node:console';
import * as path from 'node:path';
import pc from 'picocolors';
import { IndentationText, Project, QuoteKind } from 'ts-morph';

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

    for (const sourceFile of project.getSourceFiles()) {
        /**
         * Only process files in the src/models directory.
         */
        if (sourceFile.getDirectoryPath().startsWith(modelsPath)) {
            log(`Fixing imports in file: ${pc.cyan(sourceFile.getBaseName())}`);
            for (const b of sourceFile.getImportDeclarations()) {
                let importText = b.getText();
                if (!importText.endsWith(".ts';")) {
                    importText = importText.replace("';", ".ts';");
                    b.replaceWithText(importText);
                }
            }
        }
    }

    project.saveSync();
}

main();
