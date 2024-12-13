import { DeviceClaimConfigurationv1alpha3 } from './DeviceClaimConfigurationv1alpha3.js';
import { DeviceConstraintv1alpha3 } from './DeviceConstraintv1alpha3.js';
import { DeviceRequestv1alpha3 } from './DeviceRequestv1alpha3.js';

/**
 * DeviceClaim defines how to request devices with a ResourceClaim.
 */
export interface DeviceClaimv1alpha3 {
  /**
   * This field holds configuration for multiple potential drivers which could satisfy requests in this claim. It is ignored while allocating the claim.
   */
  config?: Array<DeviceClaimConfigurationv1alpha3>;
  /**
   * These constraints must be satisfied by the set of devices that get allocated for the claim.
   */
  constraints?: Array<DeviceConstraintv1alpha3>;
  /**
   * Requests represent individual requests for distinct devices which must all be satisfied. If empty, nothing needs to be allocated.
   */
  requests?: Array<DeviceRequestv1alpha3>;
}
