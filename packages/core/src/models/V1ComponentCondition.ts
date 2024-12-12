/**
 * Information about the condition of a component.
 */
export interface V1ComponentCondition {
  /**
   * Condition error code for a component. For example, a health check error code.
   */
  error?: string;
  /**
   * Message about the condition for a component. For example, information about a health check.
   */
  message?: string;
  /**
   * Type of condition for a component. Valid value: \"Healthy\"
   */
  type: string;
}
