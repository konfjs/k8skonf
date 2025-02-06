/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
export interface HorizontalPodAutoscalerCondition {
  /**
   * lastTransitionTime is the last time the condition transitioned from one status to another
   */
  lastTransitionTime?: Date;
  /**
   * message is a human-readable explanation containing details about the transition
   */
  message?: string;
  /**
   * reason is the reason for the condition\'s last transition.
   */
  reason?: string;
  /**
   * type describes the current condition
   */
  type: string;
}
