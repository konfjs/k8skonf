/**
 * NodeSystemInfo is a set of ids/uuids to uniquely identify the node.
 */
export interface V1NodeSystemInfo {
  /**
   * The Architecture reported by the node
   */
  architecture: string;
  /**
   * Boot ID reported by the node.
   */
  bootID: string;
  /**
   * ContainerRuntime Version reported by the node through runtime remote API (e.g. containerd://1.4.2).
   */
  containerRuntimeVersion: string;
  /**
   * Kernel Version reported by the node from \'uname -r\' (e.g. 3.16.0-0.bpo.4-amd64).
   */
  kernelVersion: string;
  /**
   * Kubelet Version reported by the node.
   */
  kubeletVersion: string;
  /**
   * MachineID reported by the node. For unique machine identification in the cluster this field is preferred. Learn more from man(5) machine-id: http://man7.org/linux/man-pages/man5/machine-id.5.html
   */
  machineID: string;
  /**
   * The Operating System reported by the node
   */
  operatingSystem: string;
  /**
   * OS Image reported by the node from /etc/os-release (e.g. Debian GNU/Linux 7 (wheezy)).
   */
  osImage: string;
  /**
   * SystemUUID reported by the node. For unique machine identification MachineID is preferred. This field is specific to Red Hat hosts https://access.redhat.com/documentation/en-us/red_hat_subscription_management/1/html/rhsm/uuid
   */
  systemUUID: string;
}
