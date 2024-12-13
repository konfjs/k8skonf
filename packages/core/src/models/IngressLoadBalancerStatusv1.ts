import { IngressLoadBalancerIngressv1 } from './IngressLoadBalancerIngressv1.js';

/**
 * IngressLoadBalancerStatus represents the status of a load-balancer.
 */
export interface IngressLoadBalancerStatusv1 {
  /**
   * ingress is a list containing ingress points for the load-balancer.
   */
  ingress?: Array<IngressLoadBalancerIngressv1>;
}
