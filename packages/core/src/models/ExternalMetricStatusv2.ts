import { MetricIdentifierv2 } from './MetricIdentifierv2.js';
import { MetricValueStatusv2 } from './MetricValueStatusv2.js';

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export interface ExternalMetricStatusv2 {
  /**
   * current contains the current value for the given metric
   */
  current: MetricValueStatusv2;
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifierv2;
}
