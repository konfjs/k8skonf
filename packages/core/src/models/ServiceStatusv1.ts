import { Conditionv1 } from './Conditionv1.js';
import { LoadBalancerStatusv1 } from './LoadBalancerStatusv1.js';

/**
 * ServiceStatus represents the current status of a service.
 */
export interface ServiceStatusv1 {
  /**
   * Current service state
   */
  conditions?: Array<Conditionv1>;
  /**
   * LoadBalancer contains the current status of the load-balancer, if one is present.
   */
  loadBalancer?: LoadBalancerStatusv1;
}
