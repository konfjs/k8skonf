/**
 * Sysctl defines a kernel parameter to be set
 */
export interface Sysctl {
  /**
   * Name of a property to set
   */
  name: string;
  /**
   * Value of a property to set
   */
  value: string;
}
