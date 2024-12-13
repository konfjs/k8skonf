import { MetricIdentifierv2 } from './MetricIdentifierv2.js';
import { MetricValueStatusv2 } from './MetricValueStatusv2.js';

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export interface PodsMetricStatusv2 {
  /**
   * current contains the current value for the given metric
   */
  current: MetricValueStatusv2;
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifierv2;
}
