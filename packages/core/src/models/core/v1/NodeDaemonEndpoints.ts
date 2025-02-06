import { DaemonEndpoint } from './DaemonEndpoint';

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
export interface NodeDaemonEndpoints {
  /**
   * Endpoint on which Kubelet is listening.
   */
  kubeletEndpoint?: DaemonEndpoint;
}
