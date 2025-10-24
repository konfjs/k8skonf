#!/usr/bin/env node
import * as fs from 'node:fs';
import * as path from 'node:path';
import { Command } from 'commander';
import { generateCRDs, readConfig } from './generateCRDs.ts';

async function main() {
    const version = JSON.parse(
        fs.readFileSync(path.join(import.meta.dirname, '..', 'package.json'), 'utf-8'),
    ).version;
    const program = new Command();
    program
        .name('@k8skonf/cli')
        .argument('[crd-path-or-url]', 'CRD path or URL')
        .version(version)
        .parse();

    const crdPathOrUrl = program.args[0];
    if (crdPathOrUrl) {
        await generateCRDs(crdPathOrUrl);
    } else {
        const config = readConfig('./k8skonfig.yaml');
        await generateCRDs(crdPathOrUrl, config);
    }
}
main();
