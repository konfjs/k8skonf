/**
 * PriorityLevelConfigurationCondition defines the condition of priority level.
 */
export interface V1PriorityLevelConfigurationCondition {
  /**
   * `lastTransitionTime` is the last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: Date;
  /**
   * `message` is a human-readable message indicating details about last transition.
   */
  message?: string;
  /**
   * `reason` is a unique, one-word, CamelCase reason for the condition\'s last transition.
   */
  reason?: string;
  /**
   * `type` is the type of the condition. Required.
   */
  type?: string;
}
