import { ContainerStatusv1 } from './ContainerStatusv1.js';
import { HostIPv1 } from './HostIPv1.js';
import { PodConditionv1 } from './PodConditionv1.js';
import { PodIPv1 } from './PodIPv1.js';
import { PodResourceClaimStatusv1 } from './PodResourceClaimStatusv1.js';

/**
 * PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.
 */
export interface PodStatusv1 {
  /**
   * Current service state of pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
   */
  conditions?: Array<PodConditionv1>;
  /**
   * The list has one entry per container in the manifest. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
   */
  containerStatuses?: Array<ContainerStatusv1>;
  /**
   * Status for any ephemeral containers that have run in this pod.
   */
  ephemeralContainerStatuses?: Array<ContainerStatusv1>;
  /**
   * hostIP holds the IP address of the host to which the pod is assigned. Empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns mean that HostIP will not be updated even if there is a node is assigned to pod
   */
  hostIP?: string;
  /**
   * hostIPs holds the IP addresses allocated to the host. If this field is specified, the first entry must match the hostIP field. This list is empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns means that HostIPs will not be updated even if there is a node is assigned to this pod.
   */
  hostIPs?: Array<HostIPv1>;
  /**
   * The list has one entry per init container in the manifest. The most recent successful init container will have ready = true, the most recently started container will have startTime set. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
   */
  initContainerStatuses?: Array<ContainerStatusv1>;
  /**
   * A human readable message indicating details about why the pod is in this condition.
   */
  message?: string;
  /**
   * nominatedNodeName is set only when this pod preempts other pods on the node, but it cannot be scheduled right away as preemption victims receive their graceful termination periods. This field does not guarantee that the pod will be scheduled on this node. Scheduler may decide to place the pod elsewhere if other nodes become available sooner. Scheduler may also decide to give the resources on this node to a higher priority pod that is created after preemption. As a result, this field may be different than PodSpec.nodeName when the pod is scheduled.
   */
  nominatedNodeName?: string;
  /**
   * The phase of a Pod is a simple, high-level summary of where the Pod is in its lifecycle. The conditions array, the reason and message fields, and the individual container status arrays contain more detail about the pod\'s status. There are five possible phase values:  Pending: The pod has been accepted by the Kubernetes system, but one or more of the container images has not been created. This includes time before being scheduled as well as time spent downloading images over the network, which could take a while. Running: The pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting. Succeeded: All containers in the pod have terminated in success, and will not be restarted. Failed: All containers in the pod have terminated, and at least one container has terminated in failure. The container either exited with non-zero status or was terminated by the system. Unknown: For some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod.  More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-phase
   */
  phase?: string;
  /**
   * podIP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated.
   */
  podIP?: string;
  /**
   * podIPs holds the IP addresses allocated to the pod. If this field is specified, the 0th entry must match the podIP field. Pods may be allocated at most 1 value for each of IPv4 and IPv6. This list is empty if no IPs have been allocated yet.
   */
  podIPs?: Array<PodIPv1>;
  /**
   * The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/#quality-of-service-classes
   */
  qosClass?: string;
  /**
   * A brief CamelCase message indicating details about why the pod is in this state. e.g. \'Evicted\'
   */
  reason?: string;
  /**
   * Status of resources resize desired for pod\'s containers. It is empty if no resources resize is pending. Any changes to container resources will automatically set this to \"Proposed\"
   */
  resize?: string;
  /**
   * Status of resource claims.
   */
  resourceClaimStatuses?: Array<PodResourceClaimStatusv1>;
  /**
   * RFC 3339 date and time at which the object was acknowledged by the Kubelet. This is before the Kubelet pulled the container image(s) for the pod.
   */
  startTime?: Date;
}