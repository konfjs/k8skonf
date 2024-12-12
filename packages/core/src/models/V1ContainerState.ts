import { V1ContainerStateRunning } from './V1ContainerStateRunning.js';
import { V1ContainerStateTerminated } from './V1ContainerStateTerminated.js';
import { V1ContainerStateWaiting } from './V1ContainerStateWaiting.js';

/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 */
export interface V1ContainerState {
  /**
   * Details about a running container
   */
  running?: V1ContainerStateRunning;
  /**
   * Details about a terminated container
   */
  terminated?: V1ContainerStateTerminated;
  /**
   * Details about a waiting container
   */
  waiting?: V1ContainerStateWaiting;
}
