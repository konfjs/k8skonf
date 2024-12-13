import { CSINodeDriverv1 } from './CSINodeDriverv1.js';

/**
 * CSINodeSpec holds information about the specification of all CSI drivers installed on a node
 */
export interface CSINodeSpecv1 {
  /**
   * drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
   */
  drivers: Array<CSINodeDriverv1>;
}
