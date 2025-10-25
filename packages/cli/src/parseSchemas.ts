import { log } from 'node:console';
import * as fs from 'node:fs';
import * as path from 'node:path';
import pc from 'picocolors';

export interface K8sOpenApiSpec {
    components: {
        schemas: {
            [model: string]: {
                description: string;
                properties?: {
                    [property: string]: {
                        description?: string;
                        [key: string]: any;
                    };
                };
                type: string;
                required?: string[];
                'x-kubernetes-map-type'?: string;
                'x-kubernetes-group-version-kind'?: {
                    group: string;
                    kind: string;
                    version: string;
                }[];
            };
        };
    };
    paths: {
        [path: string]: {
            post?: {
                requestBody?: {
                    content: {
                        // Should be */*
                        [contentType: string]: {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                'x-kubernetes-group-version-kind': {
                    group: string;
                    kind: string;
                    version: string;
                };
            };
        };
    };
}

interface Schema {
    /**
     * Schema name appears in the OpenAPI spec's components.schemas
     * @example "io.k8s.api.apps.v1.Deployment"
     */
    schemaName: string;
    /**
     * Files this schema appears in.
     * A schema can appear in multiple files.
     * @example ["apis__apps__v1_openapi.json"]
     */
    files: string[];
    /**
     * API group this schema belongs to.
     * @example "apps"
     */
    group: string;
    /**
     * If the schema is not a Kubernetes API object,
     * it represents the interface name.
     * @example "Deployment"
     * @example "DeploymentSpec"
     */
    kind: string;
    /**
     * API version this schema belongs to.
     * @example "v1"
     */
    version: string;
}

interface ClassSchema extends Schema {
    /**
     * Paths this schema used
     * @example "/apis/apps/v1/namespaces/{namespace}/deployments"
     */
    paths: string[];
    namespaced: boolean;
}

export interface Schemas {
    classes: {
        /**
         * @example "IoK8sApiAppsV1Deployment"
         */
        [className: string]: ClassSchema;
    };
    interfaces: {
        /**
         * @example "IoK8sApiAppsV1DeploymentSpec"
         */
        [interfaceName: string]: Schema;
    };
}

/**
 * @example "io.k8s.api.apps.v1.Deployment" -> "IoK8sApiAppsV1Deployment"
 */
function normalizeSchemaName(schemaName: string): string {
    return schemaName
        .replace(/-(.)/g, (_, letter) => letter.toUpperCase())
        .split('.')
        .map((part) => part[0].toUpperCase() + part.slice(1))
        .join('');
}

function parseSchemas(fileName: string, spec: K8sOpenApiSpec, schemas: Schemas): void {
    for (const [pathName, pathBody] of Object.entries(spec.paths)) {
        if (pathBody.post?.['x-kubernetes-group-version-kind']) {
            const schemaRef = pathBody.post?.requestBody?.content['*/*'].schema.$ref;
            if (schemaRef?.includes('#/components/schemas/')) {
                const schemaName = schemaRef.split('#/components/schemas/')[1];

                const className = normalizeSchemaName(schemaName);
                if (schemas.classes[className]) {
                    schemas.classes[className].files.push(fileName);
                    schemas.classes[className].paths.push(pathName);
                } else {
                    schemas.classes[className] = {
                        schemaName,
                        files: [fileName],
                        paths: [pathName],
                        group: pathBody.post['x-kubernetes-group-version-kind'].group,
                        version: pathBody.post['x-kubernetes-group-version-kind'].version,
                        kind: pathBody.post['x-kubernetes-group-version-kind'].kind,
                        namespaced: pathName.includes('{namespace}'),
                    };
                }
            }
        }
    }
    for (const [schemaName, schemaBody] of Object.entries(spec.components.schemas)) {
        const interfaceName = normalizeSchemaName(schemaName);
        /**
         * If the schema is already considered a class, skip it
         */
        if (schemas.classes[interfaceName]) {
            continue;
        }
        if (schemas.interfaces[interfaceName]) {
            schemas.interfaces[interfaceName].files.push(fileName);
        } else {
            const parts = schemaName.split('.');
            const kind = parts.pop() || '';
            const version = parts.pop() || '';
            let group: string;
            if (version && !version.startsWith('v')) {
                group = version;
            } else {
                group = parts.pop() || '';
            }
            schemas.interfaces[interfaceName] = {
                schemaName,
                files: [fileName],
                group,
                kind,
                version,
            };
        }
    }
}

function saveSchemas(schemas: Schemas, outputPath: string) {
    const sortedClasses = Object.keys(schemas.classes)
        .sort()
        .reduce((sorted: Schemas['classes'], key) => {
            sorted[key] = schemas.classes[key];
            return sorted;
        }, {});

    const sortedInterfaces = Object.keys(schemas.interfaces)
        .sort()
        .reduce((sorted: Schemas['interfaces'], key) => {
            sorted[key] = schemas.interfaces[key];
            return sorted;
        }, {});

    const sortedSchemas: Schemas = {
        classes: sortedClasses,
        interfaces: sortedInterfaces,
    };

    fs.writeFileSync(
        outputPath,
        JSON.stringify(
            sortedSchemas,
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

function main() {
    const v3Path = path.join(import.meta.dirname, '../openapi-spec/v1.32.0');
    const skipList = [
        '.well-known__openid-configuration_openapi.json',
        'openid__v1__jwks_openapi.json',
        'logs_openapi.json',
        'version_openapi.json',
    ];
    const schemas: Schemas = {
        classes: {},
        interfaces: {},
    };
    log('Parsing Kubernetes schemas...');

    for (const file of fs.readdirSync(v3Path, { withFileTypes: true })) {
        if (skipList.includes(file.name)) {
            continue;
        }

        const spec: K8sOpenApiSpec = JSON.parse(
            fs.readFileSync(path.join(v3Path, file.name), 'utf-8'),
        );
        parseSchemas(file.name, spec, schemas);
    }

    log(`Saving to ${pc.blueBright('schemas.json')}`);
    saveSchemas(schemas, 'schemas.json');
}

main();
