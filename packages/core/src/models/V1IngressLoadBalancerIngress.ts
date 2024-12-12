import { V1IngressPortStatus } from './V1IngressPortStatus.js';

/**
 * IngressLoadBalancerIngress represents the status of a load-balancer ingress point.
 */
export interface V1IngressLoadBalancerIngress {
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
  ports?: Array<V1IngressPortStatus>;
}
