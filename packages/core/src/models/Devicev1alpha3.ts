import { BasicDevicev1alpha3 } from './BasicDevicev1alpha3.js';

/**
 * Device represents one individual hardware instance that can be selected based on its attributes. Besides the name, exactly one field must be set.
 */
export interface Devicev1alpha3 {
  /**
   * Basic defines one device instance.
   */
  basic?: BasicDevicev1alpha3;
  /**
   * Name is unique identifier among all devices managed by the driver in the pool. It must be a DNS label.
   */
  name: string;
}
