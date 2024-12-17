/**
 * ResourceClaimConsumerReference contains enough information to let you locate the consumer of a ResourceClaim. The user must be a resource in the same namespace as the ResourceClaim.
 */
export interface ResourceClaimConsumerReferencev1beta1 {
  /**
   * APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.
   */
  apiGroup?: string;
  /**
   * Name is the name of resource being referenced.
   */
  name: string;
  /**
   * Resource is the type of resource being referenced, for example \"pods\".
   */
  resource: string;
  /**
   * UID identifies exactly one incarnation of the resource.
   */
  uid: string;
}
