import { NodeSelector } from '../../core/v1/NodeSelector';
import { DeviceAllocationResult } from './DeviceAllocationResult';

/**
 * AllocationResult contains attributes of an allocated resource.
 */
export interface AllocationResult {
  /**
   * Devices is the result of allocating devices.
   */
  devices?: DeviceAllocationResult;
  /**
   * NodeSelector defines where the allocated resources are available. If unset, they are available everywhere.
   */
  nodeSelector?: NodeSelector;
}
