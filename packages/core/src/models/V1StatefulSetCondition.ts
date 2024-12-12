/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export interface V1StatefulSetCondition {
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
   * Type of statefulset condition.
   */
  type: string;
}
