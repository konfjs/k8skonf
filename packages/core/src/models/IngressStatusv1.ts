import { IngressLoadBalancerStatusv1 } from './IngressLoadBalancerStatusv1.js';

/**
 * IngressStatus describe the current state of the Ingress.
 */
export interface IngressStatusv1 {
  /**
   * loadBalancer contains the current status of the load-balancer.
   */
  loadBalancer?: IngressLoadBalancerStatusv1;
}
