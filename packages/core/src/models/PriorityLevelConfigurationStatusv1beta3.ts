import { PriorityLevelConfigurationConditionv1beta3 } from './PriorityLevelConfigurationConditionv1beta3.js';

/**
 * PriorityLevelConfigurationStatus represents the current state of a \"request-priority\".
 */
export interface PriorityLevelConfigurationStatusv1beta3 {
  /**
   * `conditions` is the current state of \"request-priority\".
   */
  conditions?: Array<PriorityLevelConfigurationConditionv1beta3>;
}
