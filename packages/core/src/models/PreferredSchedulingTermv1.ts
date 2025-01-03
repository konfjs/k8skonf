import { NodeSelectorTermv1 } from './NodeSelectorTermv1.js';

/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it\'s a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 */
export interface PreferredSchedulingTermv1 {
  /**
   * A node selector term, associated with the corresponding weight.
   */
  preference: NodeSelectorTermv1;
  /**
   * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
   */
  weight: number;
}
