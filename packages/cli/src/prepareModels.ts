import pc from 'picocolors';
import { GroupVersionKindMap } from './prepareSchemas.js';
import { upperCaseFirstLetter } from './utils.js';

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
 * ServiceReferencev1
 */
export function removeModelPrefixes(
    fileName: string,
    spec: K8sOpenApiSpec,
    groupVersionKindMap: GroupVersionKindMap,
    conflicts: Set<string>,
): void {
    const updatedSchemas: { [key: string]: any } = {};

    for (const [schemaName, schemaBody] of Object.entries(spec.components.schemas || [])) {
        if (schemaName.startsWith('io.k8s') && !schemaName.endsWith('List')) {
            const splits = schemaName.split('.');
            const [group, version, kind] = splits.slice(splits.length - 3);
            let shortName = kind + version;
            /**
             * Some schemas don't have version in their name.
             * @example "io.k8s.apimachinery.pkg.util.intstr.IntOrString"
             */
            if (!version.startsWith('v')) {
                shortName = kind;
            }
            console.log(`Removing prefix ${pc.gray(schemaName)} -> ${pc.cyanBright(shortName)}`);

            /**
             * Sometimes there are multiple schemas with the same shortname.
             * For example, both of the following schemas would generate Subjectv1 class.
             * `io.k8s.api.rbac.v1.Subject`
             * `io.k8s.api.flowcontrol.v1.Subject`
             * In such cases, we're going to prefix the schema with the group name.
             * @example "io.k8s.api.rbac.v1.Subject" -> "RbacSubjectv1"
             */
            if (
                groupVersionKindMap[shortName] &&
                groupVersionKindMap[shortName].schemaName !== schemaName
            ) {
                console.warn(pc.yellowBright(`Conflicting schemas detected. ${shortName}`));
                console.log('existing:', pc.gray(groupVersionKindMap[shortName].schemaName));
                console.log('incoming:', pc.gray(pc.italic(schemaName)));
                conflicts.add(shortName);
                shortName = upperCaseFirstLetter(group) + kind + version;
            }

            groupVersionKindMap[shortName] = {
                schemaName: schemaName,
                schemaBody: schemaBody,
                fileName: fileName,
            };

            /**
             * If the schema has 'x-kubernetes-group-version-kind' property,
             * then it means it's a Kubernetes API resource.
             */
            if (schemaBody['x-kubernetes-group-version-kind']) {
                const gvk = new Set<string>();
                for (const item of schemaBody['x-kubernetes-group-version-kind']) {
                    gvk.add(JSON.stringify(item, Object.keys(item).sort()));
                }
                groupVersionKindMap[shortName].gvk = gvk;
                for (const [pathName, pathBody] of Object.entries(spec.paths)) {
                    /**
                     * If the path has "post" method, then it means it's a create operation.
                     */
                    if (pathBody.post?.['x-kubernetes-group-version-kind']) {
                        const pathGvk = JSON.stringify(
                            pathBody.post['x-kubernetes-group-version-kind'],
                            Object.keys(pathBody.post['x-kubernetes-group-version-kind']).sort(),
                        );
                        if (gvk.has(pathGvk)) {
                            groupVersionKindMap[shortName].path = pathName;
                            groupVersionKindMap[shortName].namespaced =
                                pathName.includes('{namespace}');
                            break;
                        }
                    }
                }
            }

            updatedSchemas[shortName] = schemaBody;
        }
    }

    spec.components.schemas = updatedSchemas;
}
