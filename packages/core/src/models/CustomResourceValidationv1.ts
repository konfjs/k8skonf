import { JSONSchemaPropsv1 } from './JSONSchemaPropsv1.js';

/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
export interface CustomResourceValidationv1 {
  /**
   * openAPIV3Schema is the OpenAPI v3 schema to use for validation and pruning.
   */
  openAPIV3Schema?: JSONSchemaPropsv1;
}
