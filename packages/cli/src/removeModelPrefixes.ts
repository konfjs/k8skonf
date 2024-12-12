import pc from 'picocolors';
import { GroupVersionKindMap } from './index.js';

export interface K8sOpenApiSpec {
    components: {
        schemas?: {
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
                'x-kubernetes-group-version-kind': {
                    group: string;
                    kind: string;
                    version: string;
                };
            };
        };
    };
}

/**
 * io.k8s.api.admissionregistration.v1.ServiceReference
 * ->
 * V1ServiceReference
 */
export function removeModelPrefixes(
    spec: K8sOpenApiSpec,
    groupVersionKindMap: GroupVersionKindMap,
): void {
    const updatedSchemas: { [key: string]: any } = {};
    if (spec.components.schemas) {
        for (const [schemaName, schemaBody] of Object.entries(spec.components.schemas)) {
            if (schemaName.startsWith('io.k8s') && !schemaName.endsWith('List')) {
                const splits = schemaName.split('.');
                const lastTwoElements = splits.slice(splits.length - 2);
                if (!lastTwoElements[0].startsWith('v')) {
                    lastTwoElements.shift();
                }
                const newName = lastTwoElements.join('');
                groupVersionKindMap[newName] = {
                    originalSchemaName: schemaName,
                };
                console.log(`Removing prefix ${pc.dim(schemaName)} -> ${pc.cyanBright(newName)}`);
                updatedSchemas[newName] = schemaBody;

                if (schemaBody.properties) {
                    updateRefs(schemaBody.properties);
                }
            }
        }

        spec.components.schemas = updatedSchemas;
    }
}

function updateRefs(obj: any): void {
    for (const [k, v] of Object.entries(obj)) {
        if (k === '$ref' && typeof v === 'string') {
            const refSplits = v.replace('#/components/schemas/', '').split('.');
            const refLastTwoElements = refSplits.slice(refSplits.length - 2);
            if (!refLastTwoElements[0].startsWith('v')) {
                refLastTwoElements.shift();
            }
            const newRef = `#/components/schemas/${refLastTwoElements.join('')}`;
            obj[k] = newRef;
        } else if (typeof v === 'object' && !Array.isArray(v)) {
            updateRefs(v);
        } else if (Array.isArray(v)) {
            for (const item of v) {
                updateRefs(item);
            }
        }
    }
}
