import { DeviceClaimv1beta1 } from './DeviceClaimv1beta1.js';

/**
 * ResourceClaimSpec defines what is being requested in a ResourceClaim and how to configure it.
 */
export interface ResourceClaimSpecv1beta1 {
  /**
   * Devices defines how to request devices.
   */
  devices?: DeviceClaimv1beta1;
}
