import { LabelSelector } from '../../../meta/v1/types/LabelSelector';

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export interface AggregationRule {
  /**
   * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole\'s permissions will be added
   */
  clusterRoleSelectors?: Array<LabelSelector>;
}
