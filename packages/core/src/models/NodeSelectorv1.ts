import { NodeSelectorTermv1 } from './NodeSelectorTermv1.js';

/**
 * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
 */
export interface NodeSelectorv1 {
  /**
   * Required. A list of node selector terms. The terms are ORed.
   */
  nodeSelectorTerms: Array<NodeSelectorTermv1>;
}
