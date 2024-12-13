/**
 * Overhead structure represents the resource overhead associated with running a pod.
 */
export interface Overheadv1 {
  /**
   * podFixed represents the fixed resource overhead associated with running a pod.
   */
  podFixed?: { [key: string]: Quantity };
}
