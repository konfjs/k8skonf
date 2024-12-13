import { PriorityLevelConfigurationConditionv1 } from './PriorityLevelConfigurationConditionv1.js';

/**
 * PriorityLevelConfigurationStatus represents the current state of a \"request-priority\".
 */
export interface PriorityLevelConfigurationStatusv1 {
  /**
   * `conditions` is the current state of \"request-priority\".
   */
  conditions?: Array<PriorityLevelConfigurationConditionv1>;
}
