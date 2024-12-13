import { OpaqueDeviceConfigurationv1alpha3 } from './OpaqueDeviceConfigurationv1alpha3.js';

/**
 * DeviceClaimConfiguration is used for configuration parameters in DeviceClaim.
 */
export interface DeviceClaimConfigurationv1alpha3 {
  /**
   * Opaque provides driver-specific configuration parameters.
   */
  opaque?: OpaqueDeviceConfigurationv1alpha3;
  /**
   * Requests lists the names of requests where the configuration applies. If empty, it applies to all requests.
   */
  requests?: Array<string>;
}
