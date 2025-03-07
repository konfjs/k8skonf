/**
 * TypedObjectReference contains enough information to let you locate the typed referenced object
 */
export interface TypedObjectReference {
  /**
   * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
   */
  apiGroup?: string;
  /**
   * Kind is the type of resource being referenced
   */
  kind: string;
  /**
   * Name is the name of resource being referenced
   */
  name: string;
  /**
   * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace\'s owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
   */
  namespace?: string;
}
