/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export interface V1DaemonSetCondition {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: Date;
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string;
  /**
   * The reason for the condition\'s last transition.
   */
  reason?: string;
  /**
   * Type of DaemonSet condition.
   */
  type: string;
}
