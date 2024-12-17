import { DeviceClaimv1alpha3 } from './DeviceClaimv1alpha3.js';

/**
 * ResourceClaimSpec defines what is being requested in a ResourceClaim and how to configure it.
 */
export interface ResourceClaimSpecv1alpha3 {
  /**
   * Devices defines how to request devices.
   */
  devices?: DeviceClaimv1alpha3;
}
