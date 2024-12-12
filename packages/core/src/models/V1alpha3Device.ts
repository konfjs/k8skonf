import { V1alpha3BasicDevice } from './V1alpha3BasicDevice.js';

/**
 * Device represents one individual hardware instance that can be selected based on its attributes. Besides the name, exactly one field must be set.
 */
export interface V1alpha3Device {
  /**
   * Basic defines one device instance.
   */
  basic?: V1alpha3BasicDevice;
  /**
   * Name is unique identifier among all devices managed by the driver in the pool. It must be a DNS label.
   */
  name: string;
}
