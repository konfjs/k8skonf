import { DeviceClassConfiguration } from './DeviceClassConfiguration';
import { DeviceSelector } from './DeviceSelector';

/**
 * DeviceClassSpec is used in a [DeviceClass] to define what can be allocated and how to configure it.
 */
export interface DeviceClassSpec {
  /**
   * Config defines configuration parameters that apply to each device that is claimed via this class. Some classses may potentially be satisfied by multiple drivers, so each instance of a vendor configuration applies to exactly one driver.  They are passed to the driver, but are not considered while allocating the claim.
   */
  config?: Array<DeviceClassConfiguration>;
  /**
   * Each selector must be satisfied by a device which is claimed via this class.
   */
  selectors?: Array<DeviceSelector>;
}
