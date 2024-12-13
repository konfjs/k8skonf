import { Conditionv1 } from './Conditionv1.js';

/**
 * ServiceCIDRStatus describes the current state of the ServiceCIDR.
 */
export interface ServiceCIDRStatusv1beta1 {
  /**
   * conditions holds an array of metav1.Condition that describe the state of the ServiceCIDR. Current service state
   */
  conditions?: Array<Conditionv1>;
}
