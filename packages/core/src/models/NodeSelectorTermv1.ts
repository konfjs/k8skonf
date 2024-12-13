import { NodeSelectorRequirementv1 } from './NodeSelectorRequirementv1.js';

/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 */
export interface NodeSelectorTermv1 {
  /**
   * A list of node selector requirements by node\'s labels.
   */
  matchExpressions?: Array<NodeSelectorRequirementv1>;
  /**
   * A list of node selector requirements by node\'s fields.
   */
  matchFields?: Array<NodeSelectorRequirementv1>;
}
