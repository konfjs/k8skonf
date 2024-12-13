/**
 * ServiceAccountSubject holds detailed information for service-account-kind subject.
 */
export interface ServiceAccountSubjectv1 {
  /**
   * `name` is the name of matching ServiceAccount objects, or \"*\" to match regardless of name. Required.
   */
  name: string;
  /**
   * `namespace` is the namespace of matching ServiceAccount objects. Required.
   */
  namespace: string;
}
