/**
 * VolumeError captures an error encountered during a volume operation.
 */
export interface V1VolumeError {
  /**
   * message represents the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information.
   */
  message?: string;
  /**
   * time represents the time the error was encountered.
   */
  time?: Date;
}
