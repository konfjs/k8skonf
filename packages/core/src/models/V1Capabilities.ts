/**
 * Adds and removes POSIX capabilities from running containers.
 */
export interface V1Capabilities {
  /**
   * Added capabilities
   */
  add?: Array<string>;
  /**
   * Removed capabilities
   */
  drop?: Array<string>;
}
