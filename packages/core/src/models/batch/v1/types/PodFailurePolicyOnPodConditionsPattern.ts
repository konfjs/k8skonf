/**
 * PodFailurePolicyOnPodConditionsPattern describes a pattern for matching an actual pod condition type.
 */
export interface PodFailurePolicyOnPodConditionsPattern {
  /**
   * Specifies the required Pod condition type. To match a pod condition it is required that specified type equals the pod condition type.
   */
  type: string;
}
