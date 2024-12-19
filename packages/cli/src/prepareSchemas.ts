import * as fs from 'node:fs';
import * as path from 'node:path';
import pc from 'picocolors';
import { removeDeprecatedProps } from './removeDeprecatedProps.js';
import { K8sOpenApiSpec, removeModelPrefixes as prepareModels } from './prepareModels.js';
import { updateRefs, upperCaseFirstLetter } from './utils.js';

export interface GroupVersionKindMap {
    /**
     * @example "Deploymentv1"
     */
    [shortName: string]: {
        /**
         * @example "io.k8s.api.apps.v1.Deployment"
         */
        schemaName: string;
        /**
         * @example '[{"group":"apps", "kind":"Deployment", "version":"v1"}]'
         */
        schemaBody: any;
        gvk?: Set<string>;
        /**
         * @example "/apis/apps/v1/namespaces/{namespace}/deployments"
         */
        path?: string;
        namespaced?: boolean;
        fileName: string;
    };
}

interface SpecList {
    [fileName: string]: K8sOpenApiSpec;
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
    const conflicts = new Set<string>();
    const specList: SpecList = {};

    for (const file of fs.readdirSync(v3Path, { withFileTypes: true })) {
        if (skipList.includes(file.name)) {
            continue;
        }

        const spec: K8sOpenApiSpec = JSON.parse(fs.readFileSync(`${v3Path}/${file.name}`, 'utf-8'));

        removeDeprecatedProps(spec);
        prepareModels(file.name, spec, groupVersionKindMap, conflicts);
        spec.paths = {};
        specList[file.name] = spec;
    }

    for (const c of conflicts) {
        const splits = groupVersionKindMap[c].schemaName.split('.');
        const [group, version, kind] = splits.slice(splits.length - 3);
        const newShortName = upperCaseFirstLetter(group) + kind + version;
        groupVersionKindMap[newShortName] = groupVersionKindMap[c];
        const fileName = groupVersionKindMap[c].fileName;
        delete groupVersionKindMap[c];

        if (specList[fileName]?.components.schemas?.[c]) {
            specList[fileName].components.schemas[newShortName] =
                specList[fileName]?.components.schemas?.[c];
            delete specList[fileName].components.schemas[c];
        }
    }

    for (const [fileName, spec] of Object.entries(specList)) {
        updateRefs(spec.components.schemas, groupVersionKindMap);
        console.log(`Writing spec file ${pc.blueBright(fileName)}`);
        const sortedSchemas = Object.keys(spec.components.schemas || [])
            .sort()
            .reduce(
                (acc, key) => {
                    acc[key] = spec.components.schemas?.[key];
                    return acc;
                },
                {} as Record<string, any>,
            );
        spec.components.schemas = sortedSchemas;
        fs.writeFileSync(`${inputSpecPath}/${fileName}`, JSON.stringify(spec, null, 2));
    }

    Object.keys(groupVersionKindMap).forEach((key) => {
        groupVersionKindMap[key].schemaBody = undefined;
    });

    fs.writeFileSync(
        './group-version-kind-map.json',
        JSON.stringify(
            Object.keys(groupVersionKindMap)
                .sort()
                .reduce((sorted: GroupVersionKindMap, key) => {
                    sorted[key] = groupVersionKindMap[key];
                    return sorted;
                }, {}),
            (key, value) => {
                if (value instanceof Set) {
                    return Array.from(value).map((item) => JSON.parse(item));
                }
                return value;
            },
            2,
        ),
    );

    console.log('conflicts:', conflicts);
}

main();
