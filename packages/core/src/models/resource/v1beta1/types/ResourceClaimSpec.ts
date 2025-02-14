import { DeviceClaim } from './DeviceClaim.ts';

/**
 * ResourceClaimSpec defines what is being requested in a ResourceClaim and how to configure it.
 */
export interface ResourceClaimSpec {
  /**
   * Devices defines how to request devices.
   */
  devices?: DeviceClaim;
}
