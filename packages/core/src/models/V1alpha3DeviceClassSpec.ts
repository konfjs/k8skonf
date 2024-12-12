import { V1NodeSelector } from './V1NodeSelector.js';
import { V1alpha3DeviceClassConfiguration } from './V1alpha3DeviceClassConfiguration.js';
import { V1alpha3DeviceSelector } from './V1alpha3DeviceSelector.js';

/**
 * DeviceClassSpec is used in a [DeviceClass] to define what can be allocated and how to configure it.
 */
export interface V1alpha3DeviceClassSpec {
  /**
   * Config defines configuration parameters that apply to each device that is claimed via this class. Some classses may potentially be satisfied by multiple drivers, so each instance of a vendor configuration applies to exactly one driver.  They are passed to the driver, but are not considered while allocating the claim.
   */
  config?: Array<V1alpha3DeviceClassConfiguration>;
  /**
   * Each selector must be satisfied by a device which is claimed via this class.
   */
  selectors?: Array<V1alpha3DeviceSelector>;
  /**
   * Only nodes matching the selector will be considered by the scheduler when trying to find a Node that fits a Pod when that Pod uses a claim that has not been allocated yet *and* that claim gets allocated through a control plane controller. It is ignored when the claim does not use a control plane controller for allocation.  Setting this field is optional. If unset, all Nodes are candidates.  This is an alpha field and requires enabling the DRAControlPlaneController feature gate.
   */
  suitableNodes?: V1NodeSelector;
}
