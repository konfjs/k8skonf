import { V1JSONSchemaProps } from './V1JSONSchemaProps.js';

/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
export interface V1CustomResourceValidation {
  /**
   * openAPIV3Schema is the OpenAPI v3 schema to use for validation and pruning.
   */
  openAPIV3Schema?: V1JSONSchemaProps;
}
