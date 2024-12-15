import { execSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import pc from 'picocolors';
import resolvePackage from 'resolve-pkg';

export function upperCaseFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
}

export function lowerCaseFirstLetter(val: string) {
    return val.charAt(0).toLowerCase() + val.slice(1);
}

export function formatCode(modelsPath: string) {
    if (resolvePackage('@biomejs/biome')) {
        console.log(`Formatting code in ${modelsPath} using ${pc.yellowBright('Biome')}`);
        execSync(`npx biome format --write --indent-width=2 ${modelsPath}/`, { stdio: 'inherit' });
    } else if (resolvePackage('prettier')) {
        console.log(`Formatting code in ${modelsPath} using ${pc.yellowBright('Prettier')}`);
        execSync(`npx prettier --write ${modelsPath}/`, { stdio: 'inherit' });
    } else {
        console.log(
            pc.red("Couldn't find Prettier or Biome. The generated code was not formatted."),
        );
    }
}

export function removeUnusedFiles(modelsPath: string) {
    const unusedFiles = new Set(['V1Event.ts']);
    const keepStatusFiles = new Set(['V1IngressPortStatus.ts', 'V1PortStatus.ts']);
    fs.readdirSync(modelsPath).forEach((file) => {
        if ((file.endsWith('Status.ts') && !keepStatusFiles.has(file)) || unusedFiles.has(file)) {
            fs.rmSync(path.join(modelsPath, file));
        }
    });
}
