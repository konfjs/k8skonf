/**
 * ModifyVolumeStatus represents the status object of ControllerModifyVolume operation
 */
export interface ModifyVolumeStatusv1 {
  /**
   * targetVolumeAttributesClassName is the name of the VolumeAttributesClass the PVC currently being reconciled
   */
  targetVolumeAttributesClassName?: string;
}
