import * as fs from 'node:fs';
import * as path from 'node:path';
import pc from 'picocolors';
import * as yaml from 'yaml';
import { ApiObject } from './ApiObject.js';

/**
 * Each Kubernetes Api Object must belong to an instance of this class.
 * So we know where to save the resources.
 */
export class K8sApp {
    readonly resources: ApiObject[] = [];

    constructor(
        readonly outputName: string,
        /**
         * @default 'singleFile'
         */
        readonly outputType?: 'singleFile' | 'filePerResource',
    ) {}

    addResource(resource: ApiObject) {
        this.resources.push(resource);
    }

    toYaml() {
        return `---\n${this.resources.map((resource) => yaml.stringify(resource)).join('---\n')}`;
    }

    save() {
        if (this.outputType === 'filePerResource') {
            if (fs.existsSync(this.outputName)) {
                fs.rmSync(this.outputName, { recursive: true });
            }
            fs.mkdirSync(this.outputName, { recursive: true });
            for (const r of this.resources) {
                console.log(
                    pc.blueBright(
                        `Saving to ${path.join(this.outputName, `${r.kind}.${r.metadata.name}.yaml`)}`,
                    ),
                );
                fs.writeFileSync(
                    path.join(this.outputName, `${r.kind}.${r.metadata.name}.yaml`),
                    yaml.stringify(r),
                );
            }
        } else {
            console.log(pc.blueBright(`Saving to ${this.outputName}.yaml`));
            fs.writeFileSync(`${this.outputName}.yaml`, this.toYaml());
        }
    }
}
