import type { CSINodeDriver } from './CSINodeDriver.ts';

/**
 * CSINodeSpec holds information about the specification of all CSI drivers installed on a node
 */
export interface CSINodeSpec {
  /**
   * drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
   */
  drivers: Array<CSINodeDriver>;
}
