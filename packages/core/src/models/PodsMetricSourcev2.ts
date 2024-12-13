import { MetricIdentifierv2 } from './MetricIdentifierv2.js';
import { MetricTargetv2 } from './MetricTargetv2.js';

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export interface PodsMetricSourcev2 {
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifierv2;
  /**
   * target specifies the target value for the given metric
   */
  target: MetricTargetv2;
}
