/**
 * IngressClassParametersReference identifies an API object. This can be used to specify a cluster or namespace-scoped resource.
 */
export interface IngressClassParametersReferencev1 {
  /**
   * apiGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
   */
  apiGroup?: string;
  /**
   * kind is the type of resource being referenced.
   */
  kind: string;
  /**
   * name is the name of resource being referenced.
   */
  name: string;
  /**
   * namespace is the namespace of the resource being referenced. This field is required when scope is set to \"Namespace\" and must be unset when scope is set to \"Cluster\".
   */
  namespace?: string;
  /**
   * scope represents if this refers to a cluster or namespace scoped resource. This may be set to \"Cluster\" (default) or \"Namespace\".
   */
  scope?: string;
}
