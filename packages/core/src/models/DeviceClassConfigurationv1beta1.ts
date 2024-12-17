import { OpaqueDeviceConfigurationv1beta1 } from './OpaqueDeviceConfigurationv1beta1.js';

/**
 * DeviceClassConfiguration is used in DeviceClass.
 */
export interface DeviceClassConfigurationv1beta1 {
  /**
   * Opaque provides driver-specific configuration parameters.
   */
  opaque?: OpaqueDeviceConfigurationv1beta1;
}
