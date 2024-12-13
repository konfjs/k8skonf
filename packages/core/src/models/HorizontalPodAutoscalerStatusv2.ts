import { HorizontalPodAutoscalerConditionv2 } from './HorizontalPodAutoscalerConditionv2.js';
import { MetricStatusv2 } from './MetricStatusv2.js';

/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 */
export interface HorizontalPodAutoscalerStatusv2 {
  /**
   * conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
   */
  conditions?: Array<HorizontalPodAutoscalerConditionv2>;
  /**
   * currentMetrics is the last read state of the metrics used by this autoscaler.
   */
  currentMetrics?: Array<MetricStatusv2>;
  /**
   * currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
   */
  currentReplicas?: number;
  /**
   * desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
   */
  desiredReplicas: number;
  /**
   * lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed.
   */
  lastScaleTime?: Date;
  /**
   * observedGeneration is the most recent generation observed by this autoscaler.
   */
  observedGeneration?: number;
}
