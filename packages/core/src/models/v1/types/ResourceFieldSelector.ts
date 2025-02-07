/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 */
export interface ResourceFieldSelector {
  /**
   * Container name: required for volumes, optional for env vars
   */
  containerName?: string;
  /**
   * Specifies the output format of the exposed resources, defaults to \"1\"
   */
  divisor?: number | string;
  /**
   * Required: resource to select
   */
  resource: string;
}
