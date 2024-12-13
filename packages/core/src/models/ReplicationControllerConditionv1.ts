/**
 * ReplicationControllerCondition describes the state of a replication controller at a certain point.
 */
export interface ReplicationControllerConditionv1 {
  /**
   * The last time the condition transitioned from one status to another.
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
   * Type of replication controller condition.
   */
  type: string;
}
