/**
 * AttachedVolume describes a volume attached to a node
 */
export interface AttachedVolume {
  /**
   * DevicePath represents the device path where the volume should be available
   */
  devicePath: string;
  /**
   * Name of the attached volume
   */
  name: string;
}
