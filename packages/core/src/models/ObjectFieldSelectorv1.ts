/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 */
export interface ObjectFieldSelectorv1 {
  /**
   * Version of the schema the FieldPath is written in terms of, defaults to \"v1\".
   */
  apiVersion?: string;
  /**
   * Path of the field to select in the specified API version.
   */
  fieldPath: string;
}
