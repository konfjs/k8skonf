import { IngressPortStatusv1 } from './IngressPortStatusv1.js';

/**
 * IngressLoadBalancerIngress represents the status of a load-balancer ingress point.
 */
export interface IngressLoadBalancerIngressv1 {
  /**
   * hostname is set for load-balancer ingress points that are DNS based.
   */
  hostname?: string;
  /**
   * ip is set for load-balancer ingress points that are IP based.
   */
  ip?: string;
  /**
   * ports provides information about the ports exposed by this LoadBalancer.
   */
  ports?: Array<IngressPortStatusv1>;
}
