import { K8sOpenApiSpec } from './prepareModels.js';

export function removeDeprecatedProps(spec: K8sOpenApiSpec): void {
    if (spec.components.schemas) {
        for (const [schemaName, schemaBody] of Object.entries(spec.components.schemas)) {
            if (schemaBody.properties) {
                for (const [propertyName, propertyBody] of Object.entries(schemaBody.properties)) {
                    if (propertyBody.description) {
                        if (propertyBody.description.includes('Deprecated:')) {
                            delete schemaBody.properties[propertyName];
                        }
                    }
                }
            }
        }
    }
}
