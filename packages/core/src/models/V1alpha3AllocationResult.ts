import { V1NodeSelector } from './V1NodeSelector.js';
import { V1alpha3DeviceAllocationResult } from './V1alpha3DeviceAllocationResult.js';

/**
 * AllocationResult contains attributes of an allocated resource.
 */
export interface V1alpha3AllocationResult {
  /**
   * Controller is the name of the DRA driver which handled the allocation. That driver is also responsible for deallocating the claim. It is empty when the claim can be deallocated without involving a driver.  A driver may allocate devices provided by other drivers, so this driver name here can be different from the driver names listed for the results.  This is an alpha field and requires enabling the DRAControlPlaneController feature gate.
   */
  controller?: string;
  /**
   * Devices is the result of allocating devices.
   */
  devices?: V1alpha3DeviceAllocationResult;
  /**
   * NodeSelector defines where the allocated resources are available. If unset, they are available everywhere.
   */
  nodeSelector?: V1NodeSelector;
}
