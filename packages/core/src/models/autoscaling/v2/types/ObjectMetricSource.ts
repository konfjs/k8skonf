import type { CrossVersionObjectReference } from './CrossVersionObjectReference.ts';
import type { MetricIdentifier } from './MetricIdentifier.ts';
import type { MetricTarget } from './MetricTarget.ts';

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface ObjectMetricSource {
  /**
   * describedObject specifies the descriptions of a object,such as kind,name apiVersion
   */
  describedObject: CrossVersionObjectReference;
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifier;
  /**
   * target specifies the target value for the given metric
   */
  target: MetricTarget;
}
