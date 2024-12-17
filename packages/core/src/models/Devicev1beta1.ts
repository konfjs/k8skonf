import { BasicDevicev1beta1 } from './BasicDevicev1beta1.js';

/**
 * Device represents one individual hardware instance that can be selected based on its attributes. Besides the name, exactly one field must be set.
 */
export interface Devicev1beta1 {
  /**
   * Basic defines one device instance.
   */
  basic?: BasicDevicev1beta1;
  /**
   * Name is unique identifier among all devices managed by the driver in the pool. It must be a DNS label.
   */
  name: string;
}
