import { OpaqueDeviceConfiguration } from './OpaqueDeviceConfiguration';

/**
 * DeviceClassConfiguration is used in DeviceClass.
 */
export interface DeviceClassConfiguration {
  /**
   * Opaque provides driver-specific configuration parameters.
   */
  opaque?: OpaqueDeviceConfiguration;
}
