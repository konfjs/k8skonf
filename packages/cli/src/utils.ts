import { execSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import pc from 'picocolors';
import resolvePackage from 'resolve-pkg';
import { GroupVersionKindMap } from './prepareSchemas.js';

export function upperCaseFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
}

export function lowerCaseFirstLetter(val: string) {
    return val.charAt(0).toLowerCase() + val.slice(1);
}

export function formatCode(modelsPath: string) {
    if (resolvePackage('@biomejs/biome')) {
        console.log(
            `Formatting code in ${pc.yellowBright(modelsPath)} using ${pc.yellowBright('Biome')}`,
        );
        execSync(`npx biome format --write --indent-width=2 ${modelsPath}/`, { stdio: 'inherit' });
    } else if (resolvePackage('prettier')) {
        console.log(
            `Formatting code in ${pc.yellowBright(modelsPath)} using ${pc.yellowBright('Prettier')}`,
        );
        execSync(`npx prettier --write ${modelsPath}/`, { stdio: 'inherit' });
    } else {
        console.log(
            pc.red("Couldn't find Prettier or Biome. The generated code was not formatted."),
        );
    }
}

export function removeUnusedFiles(modelsPath: string) {
    const unusedFiles = new Set([
        'V1Event.ts',
        'LoadBalancerIngressv1.ts',
        'IngressLoadBalancerIngressv1.ts',
    ]);
    fs.readdirSync(modelsPath).forEach((file) => {
        if (file.endsWith('Status.ts') || unusedFiles.has(file)) {
            fs.rmSync(path.join(modelsPath, file));
        }
    });
}

export function updateRefs(obj: any, groupVersionKindMap: GroupVersionKindMap): void {
    for (const [k, v] of Object.entries(obj)) {
        if (k === '$ref' && typeof v === 'string' && !v.endsWith('List')) {
            const splits = v.split('.');
            const oldRef = v.split('#/components/schemas/')[1];
            const [group, version, kind] = splits.slice(splits.length - 3);
            let shortName = kind + version;
            if (!version.startsWith('v')) {
                shortName = kind;
            }
            if (!groupVersionKindMap[shortName]) {
                shortName = upperCaseFirstLetter(group) + kind + version;
            }
            const newRef = v.replace(oldRef, shortName);
            console.log(`Updating ref ${pc.gray(v)} -> ${pc.yellow(newRef)}`);
            obj[k] = newRef;
        } else if (typeof v === 'object' && v !== null) {
            if (Array.isArray(v)) {
                for (const item of v) {
                    updateRefs(item, groupVersionKindMap);
                }
            } else {
                updateRefs(v, groupVersionKindMap);
            }
        }
    }
}
