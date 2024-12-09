import { V2MetricIdentifier } from './V2MetricIdentifier.js';
import { V2MetricTarget } from './V2MetricTarget.js';

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 */
export interface V2ExternalMetricSource {
  /**
   * metric identifies the target metric by name and selector
   */
  metric: V2MetricIdentifier;
  /**
   * target specifies the target value for the given metric
   */
  target: V2MetricTarget;
}
