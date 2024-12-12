import { V1DaemonEndpoint } from './V1DaemonEndpoint.js';

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
export interface V1NodeDaemonEndpoints {
  /**
   * Endpoint on which Kubelet is listening.
   */
  kubeletEndpoint?: V1DaemonEndpoint;
}
