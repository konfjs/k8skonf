import { LinuxContainerUserv1 } from './LinuxContainerUserv1.js';

/**
 * ContainerUser represents user identity information
 */
export interface ContainerUserv1 {
  /**
   * Linux holds user identity information initially attached to the first process of the containers in Linux. Note that the actual running identity can be changed if the process has enough privilege to do so.
   */
  linux?: LinuxContainerUserv1;
}
