import { V1alpha3OpaqueDeviceConfiguration } from './V1alpha3OpaqueDeviceConfiguration.js';

/**
 * DeviceAllocationConfiguration gets embedded in an AllocationResult.
 */
export interface V1alpha3DeviceAllocationConfiguration {
  /**
   * Opaque provides driver-specific configuration parameters.
   */
  opaque?: V1alpha3OpaqueDeviceConfiguration;
  /**
   * Requests lists the names of requests where the configuration applies. If empty, its applies to all requests.
   */
  requests?: Array<string>;
  /**
   * Source records whether the configuration comes from a class and thus is not something that a normal user would have been able to set or from a claim.
   */
  source: string;
}
