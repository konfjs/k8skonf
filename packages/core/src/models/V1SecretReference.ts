/**
 * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
 */
export interface V1SecretReference {
  /**
   * name is unique within a namespace to reference a secret resource.
   */
  name?: string;
  /**
   * namespace defines the space within which the secret name must be unique.
   */
  namespace?: string;
}
