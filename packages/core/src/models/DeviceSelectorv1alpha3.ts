import { CELDeviceSelectorv1alpha3 } from './CELDeviceSelectorv1alpha3.js';

/**
 * DeviceSelector must have exactly one field set.
 */
export interface DeviceSelectorv1alpha3 {
  /**
   * CEL contains a CEL expression for selecting a device.
   */
  cel?: CELDeviceSelectorv1alpha3;
}
