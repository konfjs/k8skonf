/**
 * NamespaceSpec describes the attributes on a Namespace.
 */
export interface NamespaceSpec {
  /**
   * Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
   */
  finalizers?: Array<string>;
}
