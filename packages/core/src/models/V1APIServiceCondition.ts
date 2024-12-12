/**
 * APIServiceCondition describes the state of an APIService at a particular point
 */
export interface V1APIServiceCondition {
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
   * Type is the type of the condition.
   */
  type: string;
}
