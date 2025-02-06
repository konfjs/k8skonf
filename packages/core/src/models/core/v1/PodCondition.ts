/**
 * PodCondition contains details for the current condition of this pod.
 */
export interface PodCondition {
  /**
   * Last time we probed the condition.
   */
  lastProbeTime?: Date;
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: Date;
  /**
   * Human-readable message indicating details about last transition.
   */
  message?: string;
  /**
   * Unique, one-word, CamelCase reason for the condition\'s last transition.
   */
  reason?: string;
  /**
   * Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
   */
  type: string;
}
