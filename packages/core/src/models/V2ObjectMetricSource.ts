import { V2CrossVersionObjectReference } from './V2CrossVersionObjectReference.js';
import { V2MetricIdentifier } from './V2MetricIdentifier.js';
import { V2MetricTarget } from './V2MetricTarget.js';

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface V2ObjectMetricSource {
  /**
   * describedObject specifies the descriptions of a object,such as kind,name apiVersion
   */
  describedObject: V2CrossVersionObjectReference;
  /**
   * metric identifies the target metric by name and selector
   */
  metric: V2MetricIdentifier;
  /**
   * target specifies the target value for the given metric
   */
  target: V2MetricTarget;
}
