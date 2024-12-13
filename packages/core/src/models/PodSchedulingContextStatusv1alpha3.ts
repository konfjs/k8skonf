import { ResourceClaimSchedulingStatusv1alpha3 } from './ResourceClaimSchedulingStatusv1alpha3.js';

/**
 * PodSchedulingContextStatus describes where resources for the Pod can be allocated.
 */
export interface PodSchedulingContextStatusv1alpha3 {
  /**
   * ResourceClaims describes resource availability for each pod.spec.resourceClaim entry where the corresponding ResourceClaim uses \"WaitForFirstConsumer\" allocation mode.
   */
  resourceClaims?: Array<ResourceClaimSchedulingStatusv1alpha3>;
}
