import { DeviceClaimv1alpha3 } from './DeviceClaimv1alpha3.js';

/**
 * ResourceClaimSpec defines what is being requested in a ResourceClaim and how to configure it.
 */
export interface ResourceClaimSpecv1alpha3 {
  /**
   * Controller is the name of the DRA driver that is meant to handle allocation of this claim. If empty, allocation is handled by the scheduler while scheduling a pod.  Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver.  This is an alpha field and requires enabling the DRAControlPlaneController feature gate.
   */
  controller?: string;
  /**
   * Devices defines how to request devices.
   */
  devices?: DeviceClaimv1alpha3;
}