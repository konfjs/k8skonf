import { PersistentVolumeSpecv1 } from './PersistentVolumeSpecv1.js';

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistentVolumes can be attached via external attacher, in the future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export interface VolumeAttachmentSourcev1 {
  /**
   * inlineVolumeSpec contains all the information necessary to attach a persistent volume defined by a pod\'s inline VolumeSource. This field is populated only for the CSIMigration feature. It contains translated fields from a pod\'s inline VolumeSource to a PersistentVolumeSpec. This field is beta-level and is only honored by servers that enabled the CSIMigration feature.
   */
  inlineVolumeSpec?: PersistentVolumeSpecv1;
  /**
   * persistentVolumeName represents the name of the persistent volume to attach.
   */
  persistentVolumeName?: string;
}
