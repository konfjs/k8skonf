import { V1alpha3OpaqueDeviceConfiguration } from './V1alpha3OpaqueDeviceConfiguration.js';

/**
 * DeviceClaimConfiguration is used for configuration parameters in DeviceClaim.
 */
export interface V1alpha3DeviceClaimConfiguration {
  /**
   * Opaque provides driver-specific configuration parameters.
   */
  opaque?: V1alpha3OpaqueDeviceConfiguration;
  /**
   * Requests lists the names of requests where the configuration applies. If empty, it applies to all requests.
   */
  requests?: Array<string>;
}
