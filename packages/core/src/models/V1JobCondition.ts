/**
 * JobCondition describes current state of a job.
 */
export interface V1JobCondition {
  /**
   * Last time the condition was checked.
   */
  lastProbeTime?: Date;
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
   * Type of job condition, Complete or Failed.
   */
  type: string;
}
