/**
 * Adds and removes POSIX capabilities from running containers.
 */
export interface Capabilitiesv1 {
  /**
   * Added capabilities
   */
  add?: Array<string>;
  /**
   * Removed capabilities
   */
  drop?: Array<string>;
}
