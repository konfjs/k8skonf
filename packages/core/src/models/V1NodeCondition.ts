/**
 * NodeCondition contains condition information for a node.
 */
export interface V1NodeCondition {
  /**
   * Last time we got an update on a given condition.
   */
  lastHeartbeatTime?: Date;
  /**
   * Last time the condition transit from one status to another.
   */
  lastTransitionTime?: Date;
  /**
   * Human readable message indicating details about last transition.
   */
  message?: string;
  /**
   * (brief) reason for the condition\'s last transition.
   */
  reason?: string;
  /**
   * Type of node condition.
   */
  type: string;
}
