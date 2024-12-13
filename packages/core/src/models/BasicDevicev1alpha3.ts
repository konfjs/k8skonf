import { DeviceAttributev1alpha3 } from './DeviceAttributev1alpha3.js';

/**
 * BasicDevice defines one device instance.
 */
export interface BasicDevicev1alpha3 {
  /**
   * Attributes defines the set of attributes for this device. The name of each attribute must be unique in that set.  The maximum number of attributes and capacities combined is 32.
   */
  attributes?: { [key: string]: DeviceAttributev1alpha3 };
  /**
   * Capacity defines the set of capacities for this device. The name of each capacity must be unique in that set.  The maximum number of attributes and capacities combined is 32.
   */
  capacity?: { [key: string]: Quantity };
}
