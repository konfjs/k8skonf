import { OpaqueDeviceConfigurationv1beta1 } from './OpaqueDeviceConfigurationv1beta1.js';

/**
 * DeviceClaimConfiguration is used for configuration parameters in DeviceClaim.
 */
export interface DeviceClaimConfigurationv1beta1 {
  /**
   * Opaque provides driver-specific configuration parameters.
   */
  opaque?: OpaqueDeviceConfigurationv1beta1;
  /**
   * Requests lists the names of requests where the configuration applies. If empty, it applies to all requests.
   */
  requests?: Array<string>;
}
