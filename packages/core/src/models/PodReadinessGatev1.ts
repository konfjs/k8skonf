/**
 * PodReadinessGate contains the reference to a pod condition
 */
export interface PodReadinessGatev1 {
  /**
   * ConditionType refers to a condition in the pod\'s condition list with matching type.
   */
  conditionType: string;
}
