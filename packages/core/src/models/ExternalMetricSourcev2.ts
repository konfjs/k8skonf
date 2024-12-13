import { MetricIdentifierv2 } from './MetricIdentifierv2.js';
import { MetricTargetv2 } from './MetricTargetv2.js';

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 */
export interface ExternalMetricSourcev2 {
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifierv2;
  /**
   * target specifies the target value for the given metric
   */
  target: MetricTargetv2;
}
