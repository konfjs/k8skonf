import { V2MetricIdentifier } from './V2MetricIdentifier.js';
import { V2MetricTarget } from './V2MetricTarget.js';

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export interface V2PodsMetricSource {
  /**
   * metric identifies the target metric by name and selector
   */
  metric: V2MetricIdentifier;
  /**
   * target specifies the target value for the given metric
   */
  target: V2MetricTarget;
}
