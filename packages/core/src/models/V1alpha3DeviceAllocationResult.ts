import { V1alpha3DeviceAllocationConfiguration } from './V1alpha3DeviceAllocationConfiguration.js';
import { V1alpha3DeviceRequestAllocationResult } from './V1alpha3DeviceRequestAllocationResult.js';

/**
 * DeviceAllocationResult is the result of allocating devices.
 */
export interface V1alpha3DeviceAllocationResult {
  /**
   * This field is a combination of all the claim and class configuration parameters. Drivers can distinguish between those based on a flag.  This includes configuration parameters for drivers which have no allocated devices in the result because it is up to the drivers which configuration parameters they support. They can silently ignore unknown configuration parameters.
   */
  config?: Array<V1alpha3DeviceAllocationConfiguration>;
  /**
   * Results lists all allocated devices.
   */
  results?: Array<V1alpha3DeviceRequestAllocationResult>;
}
