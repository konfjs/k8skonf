import type { JSONSchemaProps } from './JSONSchemaProps.ts';

/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
export interface CustomResourceValidation {
  /**
   * openAPIV3Schema is the OpenAPI v3 schema to use for validation and pruning.
   */
  openAPIV3Schema?: JSONSchemaProps;
}
