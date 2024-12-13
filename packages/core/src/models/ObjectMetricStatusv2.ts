import { CrossVersionObjectReferencev2 } from './CrossVersionObjectReferencev2.js';
import { MetricIdentifierv2 } from './MetricIdentifierv2.js';
import { MetricValueStatusv2 } from './MetricValueStatusv2.js';

/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface ObjectMetricStatusv2 {
  /**
   * current contains the current value for the given metric
   */
  current: MetricValueStatusv2;
  /**
   * DescribedObject specifies the descriptions of a object,such as kind,name apiVersion
   */
  describedObject: CrossVersionObjectReferencev2;
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifierv2;
}
