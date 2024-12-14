/**
 * MetricValueStatus holds the current value for a metric
 */
export interface MetricValueStatusv2 {
  /**
   * currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
   */
  averageUtilization?: number;
  /**
   * averageValue is the current value of the average of the metric across all relevant pods (as a quantity)
   */
  averageValue?: number | string;
  /**
   * value is the current value of the metric (as a quantity).
   */
  value?: number | string;
}
