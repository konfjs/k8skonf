/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export interface ReplicaSetConditionv1 {
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
   * Type of replica set condition.
   */
  type: string;
}
