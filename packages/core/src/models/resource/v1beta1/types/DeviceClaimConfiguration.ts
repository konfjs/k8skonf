import type { OpaqueDeviceConfiguration } from './OpaqueDeviceConfiguration.ts';

/**
 * DeviceClaimConfiguration is used for configuration parameters in DeviceClaim.
 */
export interface DeviceClaimConfiguration {
  /**
   * Opaque provides driver-specific configuration parameters.
   */
  opaque?: OpaqueDeviceConfiguration;
  /**
   * Requests lists the names of requests where the configuration applies. If empty, it applies to all requests.
   */
  requests?: Array<string>;
}
