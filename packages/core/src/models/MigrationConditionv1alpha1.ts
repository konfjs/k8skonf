/**
 * Describes the state of a migration at a certain point.
 */
export interface MigrationConditionv1alpha1 {
  /**
   * The last time this condition was updated.
   */
  lastUpdateTime?: Date;
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string;
  /**
   * The reason for the condition\'s last transition.
   */
  reason?: string;
  /**
   * Type of the condition.
   */
  type: string;
}
