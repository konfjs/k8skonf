/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export interface DeploymentCondition {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: Date;
  /**
   * The last time this condition was updated.
   */
  lastUpdateTime?: Date;
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string;
  /**
   * The reason for the condition\'s last transition.
   */
  reason?: string;
  /**
   * Type of deployment condition.
   */
  type: string;
}
