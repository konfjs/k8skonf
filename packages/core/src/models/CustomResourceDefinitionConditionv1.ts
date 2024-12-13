/**
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 */
export interface CustomResourceDefinitionConditionv1 {
  /**
   * lastTransitionTime last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: Date;
  /**
   * message is a human-readable message indicating details about last transition.
   */
  message?: string;
  /**
   * reason is a unique, one-word, CamelCase reason for the condition\'s last transition.
   */
  reason?: string;
  /**
   * type is the type of the condition. Types include Established, NamesAccepted and Terminating.
   */
  type: string;
}
