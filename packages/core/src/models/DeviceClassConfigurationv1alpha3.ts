import { OpaqueDeviceConfigurationv1alpha3 } from './OpaqueDeviceConfigurationv1alpha3.js';

/**
 * DeviceClassConfiguration is used in DeviceClass.
 */
export interface DeviceClassConfigurationv1alpha3 {
  /**
   * Opaque provides driver-specific configuration parameters.
   */
  opaque?: OpaqueDeviceConfigurationv1alpha3;
}
