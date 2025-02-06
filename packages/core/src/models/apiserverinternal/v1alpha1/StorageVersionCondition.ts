/**
 * Describes the state of the storageVersion at a certain point.
 */
export interface StorageVersionCondition {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: Date;
  /**
   * A human readable message indicating details about the transition.
   */
  message: string;
  /**
   * If set, this represents the .metadata.generation that the condition was set based upon.
   */
  observedGeneration?: number;
  /**
   * The reason for the condition\'s last transition.
   */
  reason: string;
  /**
   * Type of the condition.
   */
  type: string;
}
