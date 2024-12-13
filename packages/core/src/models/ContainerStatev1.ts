import { ContainerStateRunningv1 } from './ContainerStateRunningv1.js';
import { ContainerStateTerminatedv1 } from './ContainerStateTerminatedv1.js';
import { ContainerStateWaitingv1 } from './ContainerStateWaitingv1.js';

/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 */
export interface ContainerStatev1 {
  /**
   * Details about a running container
   */
  running?: ContainerStateRunningv1;
  /**
   * Details about a terminated container
   */
  terminated?: ContainerStateTerminatedv1;
  /**
   * Details about a waiting container
   */
  waiting?: ContainerStateWaitingv1;
}
