import { log } from 'node:console';
import * as fs from 'node:fs';
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

    const unusedInterfaceFiles: string[] = [];
    for (const sourceFile of project.getSourceFiles()) {
        if (sourceFile.getDirectoryPath().startsWith(modelsPath)) {
            const i = sourceFile.getInterfaces()[0];
            if (i?.findReferencesAsNodes().length === 0) {
                log(`Found unused interface ${pc.cyan(i.getName())}`);
                unusedInterfaceFiles.push(sourceFile.getFilePath());
            }
        }
    }

    log(`Unused interfaces: ${unusedInterfaceFiles.length}`);

    for (const sourceFile of unusedInterfaceFiles) {
        fs.rmSync(sourceFile);
    }
}

main();
