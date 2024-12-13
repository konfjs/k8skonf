/**
 * current status of a horizontal pod autoscaler
 */
export interface HorizontalPodAutoscalerStatusv1 {
  /**
   * currentCPUUtilizationPercentage is the current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU.
   */
  currentCPUUtilizationPercentage?: number;
  /**
   * currentReplicas is the current number of replicas of pods managed by this autoscaler.
   */
  currentReplicas: number;
  /**
   * desiredReplicas is the  desired number of replicas of pods managed by this autoscaler.
   */
  desiredReplicas: number;
  /**
   * lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods; used by the autoscaler to control how often the number of pods is changed.
   */
  lastScaleTime?: Date;
  /**
   * observedGeneration is the most recent generation observed by this autoscaler.
   */
  observedGeneration?: number;
}
