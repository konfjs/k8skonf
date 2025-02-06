import { LinuxContainerUser } from './LinuxContainerUser';

/**
 * ContainerUser represents user identity information
 */
export interface ContainerUser {
  /**
   * Linux holds user identity information initially attached to the first process of the containers in Linux. Note that the actual running identity can be changed if the process has enough privilege to do so.
   */
  linux?: LinuxContainerUser;
}
