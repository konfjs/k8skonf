import { CELDeviceSelectorv1beta1 } from './CELDeviceSelectorv1beta1.js';

/**
 * DeviceSelector must have exactly one field set.
 */
export interface DeviceSelectorv1beta1 {
  /**
   * CEL contains a CEL expression for selecting a device.
   */
  cel?: CELDeviceSelectorv1beta1;
}
