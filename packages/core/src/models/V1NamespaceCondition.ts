/**
 * NamespaceCondition contains details about state of namespace.
 */
export interface V1NamespaceCondition {
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   */
  lastTransitionTime?: Date;
  /**
   *
   */
  message?: string;
  /**
   *
   */
  reason?: string;
  /**
   * Type of namespace controller condition.
   */
  type: string;
}
