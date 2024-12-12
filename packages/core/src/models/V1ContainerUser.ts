import { V1LinuxContainerUser } from './V1LinuxContainerUser.js';

/**
 * ContainerUser represents user identity information
 */
export interface V1ContainerUser {
  /**
   * Linux holds user identity information initially attached to the first process of the containers in Linux. Note that the actual running identity can be changed if the process has enough privilege to do so.
   */
  linux?: V1LinuxContainerUser;
}
