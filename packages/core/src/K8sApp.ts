import * as fs from 'node:fs';
import * as path from 'node:path';
import pc from 'picocolors';
import { type ApiObject, NamespacedApiObject } from './ApiObject.ts';

export interface K8sAppArgs {
    readonly namespace?: string;
    /**
     * @default 'filePerResource'
     */
    readonly outputType?: 'singleFile' | 'filePerResource';
}

/**
 * Each Kubernetes Api Object must belong to an instance of this class.
 * So we know where to save the resources.
 */
export class K8sApp {
    private readonly resources: Array<ApiObject | NamespacedApiObject> = [];
    readonly namespace?: string;
    readonly outputName: string;
    private readonly args?: K8sAppArgs;

    constructor(outputName: string, args?: K8sAppArgs) {
        this.namespace = args?.namespace;
        this.outputName = outputName;
        this.args = args;
    }

    addResource(resource: ApiObject | NamespacedApiObject) {
        if (resource instanceof NamespacedApiObject && !resource.metadata.namespace) {
            resource.metadata.namespace = this.namespace;
        }
        this.resources.push(resource);
    }

    getResources(): Array<ApiObject | NamespacedApiObject> {
        return this.resources;
    }

    toYaml() {
        return `---\n${this.resources.map((resource) => resource.toYaml()).join('---\n')}`;
    }

    save() {
        if (this.args?.outputType === 'singleFile') {
            console.log(pc.blueBright(`Saving to ${this.outputName}.yaml`));
            fs.writeFileSync(`${this.outputName}.yaml`, this.toYaml());
        } else {
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
                    r.toYaml(),
                );
            }
        }
    }
}
