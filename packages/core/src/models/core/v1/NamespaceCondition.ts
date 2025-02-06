/**
 * NamespaceCondition contains details about state of namespace.
 */
export interface NamespaceCondition {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: Date;
  /**
   * Human-readable message indicating details about last transition.
   */
  message?: string;
  /**
   * Unique, one-word, CamelCase reason for the condition\'s last transition.
   */
  reason?: string;
  /**
   * Type of namespace controller condition.
   */
  type: string;
}
