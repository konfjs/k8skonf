import { V1NodeSelectorTerm } from './V1NodeSelectorTerm.js';

/**
 * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
 */
export interface V1NodeSelector {
  /**
   * Required. A list of node selector terms. The terms are ORed.
   */
  nodeSelectorTerms: Array<V1NodeSelectorTerm>;
}
