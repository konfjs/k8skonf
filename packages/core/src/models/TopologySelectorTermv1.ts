import { TopologySelectorLabelRequirementv1 } from './TopologySelectorLabelRequirementv1.js';

/**
 * A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.
 */
export interface TopologySelectorTermv1 {
  /**
   * A list of topology selector requirements by labels.
   */
  matchLabelExpressions?: Array<TopologySelectorLabelRequirementv1>;
}
