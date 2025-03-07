/**
 * Overhead structure represents the resource overhead associated with running a pod.
 */
export interface Overhead {
  /**
   * podFixed represents the fixed resource overhead associated with running a pod.
   */
  podFixed?: { [key: string]: number | string };
}
