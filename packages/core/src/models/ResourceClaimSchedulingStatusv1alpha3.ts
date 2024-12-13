/**
 * ResourceClaimSchedulingStatus contains information about one particular ResourceClaim with \"WaitForFirstConsumer\" allocation mode.
 */
export interface ResourceClaimSchedulingStatusv1alpha3 {
  /**
   * Name matches the pod.spec.resourceClaims[*].Name field.
   */
  name: string;
  /**
   * UnsuitableNodes lists nodes that the ResourceClaim cannot be allocated for.  The size of this field is limited to 128, the same as for PodSchedulingSpec.PotentialNodes. This may get increased in the future, but not reduced.
   */
  unsuitableNodes?: Array<string>;
}
