import { AttachedVolumev1 } from './AttachedVolumev1.js';
import { ContainerImagev1 } from './ContainerImagev1.js';
import { NodeAddressv1 } from './NodeAddressv1.js';
import { NodeConditionv1 } from './NodeConditionv1.js';
import { NodeConfigStatusv1 } from './NodeConfigStatusv1.js';
import { NodeDaemonEndpointsv1 } from './NodeDaemonEndpointsv1.js';
import { NodeFeaturesv1 } from './NodeFeaturesv1.js';
import { NodeRuntimeHandlerv1 } from './NodeRuntimeHandlerv1.js';
import { NodeSystemInfov1 } from './NodeSystemInfov1.js';

/**
 * NodeStatus is information about the current status of a node.
 */
export interface NodeStatusv1 {
  /**
   * List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/concepts/nodes/node/#addresses Note: This field is declared as mergeable, but the merge key is not sufficiently unique, which can cause data corruption when it is merged. Callers should instead use a full-replacement patch. See https://pr.k8s.io/79391 for an example. Consumers should assume that addresses can change during the lifetime of a Node. However, there are some exceptions where this may not be possible, such as Pods that inherit a Node\'s address in its own status or consumers of the downward API (status.hostIP).
   */
  addresses?: Array<NodeAddressv1>;
  /**
   * Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity.
   */
  allocatable?: { [key: string]: number | string };
  /**
   * Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/reference/node/node-status/#capacity
   */
  capacity?: { [key: string]: number | string };
  /**
   * Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/concepts/nodes/node/#condition
   */
  conditions?: Array<NodeConditionv1>;
  /**
   * Status of the config assigned to the node via the dynamic Kubelet config feature.
   */
  config?: NodeConfigStatusv1;
  /**
   * Endpoints of daemons running on the Node.
   */
  daemonEndpoints?: NodeDaemonEndpointsv1;
  /**
   * Features describes the set of features implemented by the CRI implementation.
   */
  features?: NodeFeaturesv1;
  /**
   * List of container images on this node
   */
  images?: Array<ContainerImagev1>;
  /**
   * Set of ids/uuids to uniquely identify the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#info
   */
  nodeInfo?: NodeSystemInfov1;
  /**
   * NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated.
   */
  phase?: string;
  /**
   * The available runtime handlers.
   */
  runtimeHandlers?: Array<NodeRuntimeHandlerv1>;
  /**
   * List of volumes that are attached to the node.
   */
  volumesAttached?: Array<AttachedVolumev1>;
  /**
   * List of attachable volumes in use (mounted) by the node.
   */
  volumesInUse?: Array<string>;
}
