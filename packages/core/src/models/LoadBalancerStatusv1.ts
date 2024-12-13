import { LoadBalancerIngressv1 } from './LoadBalancerIngressv1.js';

/**
 * LoadBalancerStatus represents the status of a load-balancer.
 */
export interface LoadBalancerStatusv1 {
  /**
   * Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
   */
  ingress?: Array<LoadBalancerIngressv1>;
}
