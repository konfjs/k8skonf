import { DeviceAttributev1beta1 } from './DeviceAttributev1beta1.js';
import { DeviceCapacityv1beta1 } from './DeviceCapacityv1beta1.js';

/**
 * BasicDevice defines one device instance.
 */
export interface BasicDevicev1beta1 {
  /**
   * Attributes defines the set of attributes for this device. The name of each attribute must be unique in that set.  The maximum number of attributes and capacities combined is 32.
   */
  attributes?: { [key: string]: DeviceAttributev1beta1 };
  /**
   * Capacity defines the set of capacities for this device. The name of each capacity must be unique in that set.  The maximum number of attributes and capacities combined is 32.
   */
  capacity?: { [key: string]: DeviceCapacityv1beta1 };
}
