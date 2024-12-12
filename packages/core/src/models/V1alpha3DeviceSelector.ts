import { V1alpha3CELDeviceSelector } from './V1alpha3CELDeviceSelector.js';

/**
 * DeviceSelector must have exactly one field set.
 */
export interface V1alpha3DeviceSelector {
  /**
   * CEL contains a CEL expression for selecting a device.
   */
  cel?: V1alpha3CELDeviceSelector;
}
