import { V1alpha3DeviceClaimConfiguration } from './V1alpha3DeviceClaimConfiguration.js';
import { V1alpha3DeviceConstraint } from './V1alpha3DeviceConstraint.js';
import { V1alpha3DeviceRequest } from './V1alpha3DeviceRequest.js';

/**
 * DeviceClaim defines how to request devices with a ResourceClaim.
 */
export interface V1alpha3DeviceClaim {
  /**
   * This field holds configuration for multiple potential drivers which could satisfy requests in this claim. It is ignored while allocating the claim.
   */
  config?: Array<V1alpha3DeviceClaimConfiguration>;
  /**
   * These constraints must be satisfied by the set of devices that get allocated for the claim.
   */
  constraints?: Array<V1alpha3DeviceConstraint>;
  /**
   * Requests represent individual requests for distinct devices which must all be satisfied. If empty, nothing needs to be allocated.
   */
  requests?: Array<V1alpha3DeviceRequest>;
}
