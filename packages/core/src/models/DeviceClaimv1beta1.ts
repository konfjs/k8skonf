import { DeviceClaimConfigurationv1beta1 } from './DeviceClaimConfigurationv1beta1.js';
import { DeviceConstraintv1beta1 } from './DeviceConstraintv1beta1.js';
import { DeviceRequestv1beta1 } from './DeviceRequestv1beta1.js';

/**
 * DeviceClaim defines how to request devices with a ResourceClaim.
 */
export interface DeviceClaimv1beta1 {
  /**
   * This field holds configuration for multiple potential drivers which could satisfy requests in this claim. It is ignored while allocating the claim.
   */
  config?: Array<DeviceClaimConfigurationv1beta1>;
  /**
   * These constraints must be satisfied by the set of devices that get allocated for the claim.
   */
  constraints?: Array<DeviceConstraintv1beta1>;
  /**
   * Requests represent individual requests for distinct devices which must all be satisfied. If empty, nothing needs to be allocated.
   */
  requests?: Array<DeviceRequestv1beta1>;
}
