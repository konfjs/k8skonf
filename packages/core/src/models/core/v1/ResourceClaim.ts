/**
 * ResourceClaim references one entry in PodSpec.ResourceClaims.
 */
export interface ResourceClaim {
  /**
   * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
   */
  name: string;
  /**
   * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
   */
  request?: string;
}
