import { DeviceAllocationConfigurationv1beta1 } from './DeviceAllocationConfigurationv1beta1.js';
import { DeviceRequestAllocationResultv1beta1 } from './DeviceRequestAllocationResultv1beta1.js';

/**
 * DeviceAllocationResult is the result of allocating devices.
 */
export interface DeviceAllocationResultv1beta1 {
  /**
   * This field is a combination of all the claim and class configuration parameters. Drivers can distinguish between those based on a flag.  This includes configuration parameters for drivers which have no allocated devices in the result because it is up to the drivers which configuration parameters they support. They can silently ignore unknown configuration parameters.
   */
  config?: Array<DeviceAllocationConfigurationv1beta1>;
  /**
   * Results lists all allocated devices.
   */
  results?: Array<DeviceRequestAllocationResultv1beta1>;
}
