import { DaemonEndpointv1 } from './DaemonEndpointv1.js';

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
export interface NodeDaemonEndpointsv1 {
  /**
   * Endpoint on which Kubelet is listening.
   */
  kubeletEndpoint?: DaemonEndpointv1;
}
