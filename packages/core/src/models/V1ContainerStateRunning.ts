/**
 * ContainerStateRunning is a running state of a container.
 */
export interface V1ContainerStateRunning {
  /**
   * Time at which the container was last (re-)started
   */
  startedAt?: Date;
}
