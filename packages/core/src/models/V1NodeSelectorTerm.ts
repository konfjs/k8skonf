import { V1NodeSelectorRequirement } from './V1NodeSelectorRequirement.js';

/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 */
export interface V1NodeSelectorTerm {
  /**
   * A list of node selector requirements by node\'s labels.
   */
  matchExpressions?: Array<V1NodeSelectorRequirement>;
  /**
   * A list of node selector requirements by node\'s fields.
   */
  matchFields?: Array<V1NodeSelectorRequirement>;
}
