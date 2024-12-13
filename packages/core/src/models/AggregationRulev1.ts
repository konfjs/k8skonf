import { LabelSelectorv1 } from './LabelSelectorv1.js';

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export interface AggregationRulev1 {
  /**
   * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole\'s permissions will be added
   */
  clusterRoleSelectors?: Array<LabelSelectorv1>;
}
