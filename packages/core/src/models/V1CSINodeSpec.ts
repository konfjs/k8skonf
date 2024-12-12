import { V1CSINodeDriver } from './V1CSINodeDriver.js';

/**
 * CSINodeSpec holds information about the specification of all CSI drivers installed on a node
 */
export interface V1CSINodeSpec {
  /**
   * drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
   */
  drivers: Array<V1CSINodeDriver>;
}
