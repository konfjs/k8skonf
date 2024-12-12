/**
 * PodReadinessGate contains the reference to a pod condition
 */
export interface V1PodReadinessGate {
  /**
   * ConditionType refers to a condition in the pod\'s condition list with matching type.
   */
  conditionType: string;
}
