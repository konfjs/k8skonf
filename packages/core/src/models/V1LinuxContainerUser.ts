/**
 * LinuxContainerUser represents user identity information in Linux containers
 */
export interface V1LinuxContainerUser {
  /**
   * GID is the primary gid initially attached to the first process in the container
   */
  gid: number;
  /**
   * SupplementalGroups are the supplemental groups initially attached to the first process in the container
   */
  supplementalGroups?: Array<number>;
  /**
   * UID is the primary uid initially attached to the first process in the container
   */
  uid: number;
}
