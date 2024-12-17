import { DeviceAllocationResultv1beta1 } from './DeviceAllocationResultv1beta1.js';
import { NodeSelectorv1 } from './NodeSelectorv1.js';

/**
 * AllocationResult contains attributes of an allocated resource.
 */
export interface AllocationResultv1beta1 {
  /**
   * Devices is the result of allocating devices.
   */
  devices?: DeviceAllocationResultv1beta1;
  /**
   * NodeSelector defines where the allocated resources are available. If unset, they are available everywhere.
   */
  nodeSelector?: NodeSelectorv1;
}
