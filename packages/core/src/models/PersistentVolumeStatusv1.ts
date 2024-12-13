/**
 * PersistentVolumeStatus is the current status of a persistent volume.
 */
export interface PersistentVolumeStatusv1 {
  /**
   * lastPhaseTransitionTime is the time the phase transitioned from one to another and automatically resets to current time everytime a volume phase transitions.
   */
  lastPhaseTransitionTime?: Date;
  /**
   * message is a human-readable message indicating details about why the volume is in this state.
   */
  message?: string;
  /**
   * phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase
   */
  phase?: string;
  /**
   * reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI.
   */
  reason?: string;
}
