/**
 * PersistentVolumeClaimCondition contains details about state of pvc
 */
export interface V1PersistentVolumeClaimCondition {
  /**
   * lastProbeTime is the time we probed the condition.
   */
  lastProbeTime?: Date;
  /**
   * lastTransitionTime is the time the condition transitioned from one status to another.
   */
  lastTransitionTime?: Date;
  /**
   * message is the human-readable message indicating details about last transition.
   */
  message?: string;
  /**
   * reason is a unique, this should be a short, machine understandable string that gives the reason for condition\'s last transition. If it reports \"Resizing\" that means the underlying persistent volume is being resized.
   */
  reason?: string;
  /**
   *
   */
  type: string;
}
