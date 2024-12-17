import { DeviceAllocationResultv1alpha3 } from './DeviceAllocationResultv1alpha3.js';
import { NodeSelectorv1 } from './NodeSelectorv1.js';

/**
 * AllocationResult contains attributes of an allocated resource.
 */
export interface AllocationResultv1alpha3 {
  /**
   * Devices is the result of allocating devices.
   */
  devices?: DeviceAllocationResultv1alpha3;
  /**
   * NodeSelector defines where the allocated resources are available. If unset, they are available everywhere.
   */
  nodeSelector?: NodeSelectorv1;
}
