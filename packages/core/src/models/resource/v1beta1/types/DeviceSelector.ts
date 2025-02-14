import type { CELDeviceSelector } from './CELDeviceSelector.ts';

/**
 * DeviceSelector must have exactly one field set.
 */
export interface DeviceSelector {
  /**
   * CEL contains a CEL expression for selecting a device.
   */
  cel?: CELDeviceSelector;
}
