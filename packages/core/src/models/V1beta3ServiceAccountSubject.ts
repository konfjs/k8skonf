/**
 * ServiceAccountSubject holds detailed information for service-account-kind subject.
 */
export interface V1beta3ServiceAccountSubject {
  /**
   * `name` is the name of matching ServiceAccount objects, or \"*\" to match regardless of name. Required.
   */
  name: string;
  /**
   * `namespace` is the namespace of matching ServiceAccount objects. Required.
   */
  namespace: string;
}
