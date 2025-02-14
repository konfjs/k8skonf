import { OpaqueDeviceConfiguration } from './OpaqueDeviceConfiguration.ts';

/**
 * DeviceClassConfiguration is used in DeviceClass.
 */
export interface DeviceClassConfiguration {
  /**
   * Opaque provides driver-specific configuration parameters.
   */
  opaque?: OpaqueDeviceConfiguration;
}
