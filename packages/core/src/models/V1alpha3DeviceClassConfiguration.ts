import { V1alpha3OpaqueDeviceConfiguration } from './V1alpha3OpaqueDeviceConfiguration.js';

/**
 * DeviceClassConfiguration is used in DeviceClass.
 */
export interface V1alpha3DeviceClassConfiguration {
  /**
   * Opaque provides driver-specific configuration parameters.
   */
  opaque?: V1alpha3OpaqueDeviceConfiguration;
}
