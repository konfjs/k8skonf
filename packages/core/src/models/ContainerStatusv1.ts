import { ContainerStatev1 } from './ContainerStatev1.js';
import { ContainerUserv1 } from './ContainerUserv1.js';
import { ResourceRequirementsv1 } from './ResourceRequirementsv1.js';
import { ResourceStatusv1 } from './ResourceStatusv1.js';
import { VolumeMountStatusv1 } from './VolumeMountStatusv1.js';

/**
 * ContainerStatus contains details for the current status of this container.
 */
export interface ContainerStatusv1 {
  /**
   * AllocatedResources represents the compute resources allocated for this container by the node. Kubelet sets this value to Container.Resources.Requests upon successful pod admission and after successfully admitting desired pod resize.
   */
  allocatedResources?: { [key: string]: number | string };
  /**
   * AllocatedResourcesStatus represents the status of various resources allocated for this Pod.
   */
  allocatedResourcesStatus?: Array<ResourceStatusv1>;
  /**
   * ContainerID is the ID of the container in the format \'<type>://<container_id>\'. Where type is a container runtime identifier, returned from Version call of CRI API (for example \"containerd\").
   */
  containerID?: string;
  /**
   * Image is the name of container image that the container is running. The container image may not match the image used in the PodSpec, as it may have been resolved by the runtime. More info: https://kubernetes.io/docs/concepts/containers/images.
   */
  image: string;
  /**
   * ImageID is the image ID of the container\'s image. The image ID may not match the image ID of the image used in the PodSpec, as it may have been resolved by the runtime.
   */
  imageID: string;
  /**
   * LastTerminationState holds the last termination state of the container to help debug container crashes and restarts. This field is not populated if the container is still running and RestartCount is 0.
   */
  lastState?: ContainerStatev1;
  /**
   * Name is a DNS_LABEL representing the unique name of the container. Each container in a pod must have a unique name across all container types. Cannot be updated.
   */
  name: string;
  /**
   * Ready specifies whether the container is currently passing its readiness check. The value will change as readiness probes keep executing. If no readiness probes are specified, this field defaults to true once the container is fully started (see Started field).  The value is typically used to determine whether a container is ready to accept traffic.
   */
  ready: boolean;
  /**
   * Resources represents the compute resource requests and limits that have been successfully enacted on the running container after it has been started or has been successfully resized.
   */
  resources?: ResourceRequirementsv1;
  /**
   * RestartCount holds the number of times the container has been restarted. Kubelet makes an effort to always increment the value, but there are cases when the state may be lost due to node restarts and then the value may be reset to 0. The value is never negative.
   */
  restartCount: number;
  /**
   * Started indicates whether the container has finished its postStart lifecycle hook and passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. In both cases, startup probes will run again. Is always true when no startupProbe is defined and container is running and has passed the postStart lifecycle hook. The null value must be treated the same as false.
   */
  started?: boolean;
  /**
   * State holds details about the container\'s current condition.
   */
  state?: ContainerStatev1;
  /**
   * User represents user identity information initially attached to the first process of the container
   */
  user?: ContainerUserv1;
  /**
   * Status of volume mounts.
   */
  volumeMounts?: Array<VolumeMountStatusv1>;
}
