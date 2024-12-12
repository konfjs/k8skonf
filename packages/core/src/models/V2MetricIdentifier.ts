import { V1LabelSelector } from './V1LabelSelector.js';

/**
 * MetricIdentifier defines the name and optionally selector for a metric
 */
export interface V2MetricIdentifier {
  /**
   * name is the name of the given metric
   */
  name: string;
  /**
   * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
   */
  selector?: V1LabelSelector;
}
