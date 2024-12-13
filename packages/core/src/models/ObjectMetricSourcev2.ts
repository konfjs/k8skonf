import { CrossVersionObjectReferencev2 } from './CrossVersionObjectReferencev2.js';
import { MetricIdentifierv2 } from './MetricIdentifierv2.js';
import { MetricTargetv2 } from './MetricTargetv2.js';

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface ObjectMetricSourcev2 {
  /**
   * describedObject specifies the descriptions of a object,such as kind,name apiVersion
   */
  describedObject: CrossVersionObjectReferencev2;
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifierv2;
  /**
   * target specifies the target value for the given metric
   */
  target: MetricTargetv2;
}
