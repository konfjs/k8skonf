import { execSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import * as yaml from 'yaml';
import { ApiObject } from './ApiObject.js';
import { K8sApp } from './K8sApp.js';
import { ObjectMeta } from './models/meta/v1/ObjectMeta';

interface HelmObjectArgs {
    readonly apiVersion: string;
    readonly kind: string;
    readonly metadata: ObjectMeta;
    readonly spec: any;
    readonly [key: string]: any;
}

class HelmObject extends ApiObject {
    readonly apiVersion: string;
    readonly kind: string;
    readonly metadata: ObjectMeta;
    readonly spec: any;
    readonly [key: string]: any;
    constructor(name: string, args: HelmObjectArgs) {
        super(name);
        this.apiVersion = args.apiVersion;
        this.kind = args.kind;
        this.metadata = args.metadata;
        this.spec = args.spec;
        Object.assign(this, args);
    }
}

export interface HelmArgs {
    /**
     * Chart repository URL. Equivalent to `helm template --repo`.
     * @example "https://argoproj.github.io/argo-helm"
     */
    readonly repo?: string;
    /**
     * Chart URL or path.
     * @example "argo-cd"
     */
    readonly chart: string;
    /**
     * Chart version to use. Equivalent to `helm template --version`.
     * @example "1.2.3" or "^2.0.0"
     * @default "latest"
     */
    readonly version?: string;
    /**
     * Namespace scope for this request.
     * Equivalent to `helm template --namespace`.
     */
    readonly namespace?: string;
    /**
     * Values to pass to the chart. Equivalent to `helm template --values values.yaml`.
     * Content should be yaml parsable.
     * Temporary `values.yaml` file will be created and passed to `helm template`.
     */
    readonly valuesObject?: { [key: string]: any };
    /**
     * Additional flags to add to the `helm` execution
     * @example ["--set key1=val1", "--set key2=val2"]
     */
    readonly helmFlags?: string[];
}

/**
 * @link https://helm.sh/docs/helm/helm_install/
 * @link https://helm.sh/docs/helm/helm_template/
 */
export class Helm {
    readonly resources: HelmObject[] = [];
    constructor(app: K8sApp, name: string, args: HelmArgs) {
        if (this.isHelmInstalled()) {
            const helmFlags = args.helmFlags || [];
            if (args.repo) {
                helmFlags.push(`--repo ${args.repo}`);
            }
            if (args.version) {
                helmFlags.push(`--version ${args.version}`);
            }
            if (args.namespace) {
                helmFlags.push(`--namespace ${args.namespace}`);
            }
            let tmpValuesDir = '';
            if (args.valuesObject) {
                try {
                    const content = yaml.stringify(args.valuesObject, {
                        schema: 'yaml-1.1',
                        aliasDuplicateObjects: false,
                    });
                    tmpValuesDir = fs.mkdtempSync(path.join(os.tmpdir(), 'k8skonf-helm-values-'), {
                        encoding: 'utf-8',
                    });
                    fs.writeFileSync(path.join(tmpValuesDir, 'values.yaml'), content);
                    helmFlags.push(`--values ${path.join(tmpValuesDir, 'values.yaml')}`);
                } catch (e) {
                    console.error('Error parsing valuesObject:', e);
                }
            }
            const cmd = `helm template ${name} ${args.chart} ${helmFlags.join(' ')}`;
            const output = execSync(cmd).toString();

            const files = yaml.parseAllDocuments(output);
            for (const file of files) {
                if (file.errors.length) {
                    console.error('Error parsing file:', file.errors);
                }
                const helmObj = file.toJS();
                if (helmObj !== null) {
                    const resource = new HelmObject(helmObj.metadata.name, helmObj);
                    this.resources.push(resource);
                    app.addResource(resource);
                }
            }

            if (tmpValuesDir) {
                fs.rmdirSync(tmpValuesDir, { recursive: true });
            }
        }
    }

    private isHelmInstalled() {
        try {
            execSync('helm version --short', { stdio: 'ignore' });
            return true;
        } catch (e) {
            console.error('Helm is not available. Please install it first.');
            return false;
        }
    }
}
