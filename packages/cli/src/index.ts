import * as fs from 'node:fs';
import * as path from 'node:path';
import pc from 'picocolors';
import { removeDeprecatedProps } from './removeDeprecatedProps.js';
import { K8sOpenApiSpec, removeModelPrefixes } from './removeModelPrefixes.js';

export interface GroupVersionKindMap {
    /**
     * @example "Deploymentv1"
     */
    [schemaName: string]: {
        /**
         * @example "io.k8s.api.apps.v1.Deployment"
         */
        originalSchemaName: string;
        /**
         * @example '[{"group":"apps", "kind":"Deployment", "version":"v1"}]'
         */
        gvk?: Set<string>;
        /**
         * @example "/apis/apps/v1/namespaces/{namespace}/deployments"
         */
        path?: string;
        namespaced?: boolean;
    };
}

function main() {
    const v3Path = path.join(import.meta.dirname, '../files/kubernetes/api/openapi-spec/v3');
    const inputSpecPath = path.join(import.meta.dirname, 'input-spec');

    const skipList = [
        '.well-known__openid-configuration_openapi.json',
        'openid__v1__jwks_openapi.json',
        'logs_openapi.json',
        'version_openapi.json',
    ];

    fs.rmSync(inputSpecPath, { recursive: true, force: true });
    fs.mkdirSync(inputSpecPath, { recursive: true });

    const groupVersionKindMap: GroupVersionKindMap = {};

    for (const file of fs.readdirSync(v3Path, { withFileTypes: true })) {
        if (skipList.includes(file.name)) {
            continue;
        }

        const spec: K8sOpenApiSpec = JSON.parse(fs.readFileSync(`${v3Path}/${file.name}`, 'utf-8'));

        removeDeprecatedProps(spec);
        removeModelPrefixes(spec, groupVersionKindMap);

        if (spec.components.schemas) {
            for (const [schemaName, schemaBody] of Object.entries(spec.components.schemas)) {
                /**
                 * If the schema has 'x-kubernetes-group-version-kind' property,
                 * then it means it's a Kubernetes API resource.
                 */
                if (schemaBody['x-kubernetes-group-version-kind']) {
                    groupVersionKindMap[schemaName].gvk = new Set();
                    for (const item of schemaBody['x-kubernetes-group-version-kind']) {
                        groupVersionKindMap[schemaName].gvk.add(
                            JSON.stringify(item, Object.keys(item).sort()),
                        );
                    }

                    for (const [pathName, pathBody] of Object.entries(spec.paths)) {
                        /**
                         * If the path has "post" method, then it means it's a create operation.
                         */
                        if (pathBody.post?.['x-kubernetes-group-version-kind']) {
                            const pathGvk = JSON.stringify(
                                pathBody.post['x-kubernetes-group-version-kind'],
                                Object.keys(
                                    pathBody.post['x-kubernetes-group-version-kind'],
                                ).sort(),
                            );
                            if (groupVersionKindMap[schemaName].gvk.has(pathGvk)) {
                                groupVersionKindMap[schemaName].path = pathName;
                                groupVersionKindMap[schemaName].namespaced =
                                    pathName.includes('{namespace}');
                                break;
                            }
                        }
                    }
                }
            }
        }

        console.log(`Writing spec file ${pc.blueBright(file.name)}`);
        spec.paths = {};
        fs.writeFileSync(`${inputSpecPath}/${file.name}`, JSON.stringify(spec, null, 2));
    }

    fs.writeFileSync(
        './group-version-kind-map.json',
        JSON.stringify(
            groupVersionKindMap,
            (key, value) => {
                if (value instanceof Set) {
                    return Array.from(value).map((item) => JSON.parse(item));
                }
                return value;
            },
            2,
        ),
    );
}

main();
