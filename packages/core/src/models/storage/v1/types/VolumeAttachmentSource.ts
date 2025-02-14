import type { PersistentVolumeSpec } from '../../../core/v1/types/PersistentVolumeSpec.ts';

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistentVolumes can be attached via external attacher, in the future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export interface VolumeAttachmentSource {
  /**
   * inlineVolumeSpec contains all the information necessary to attach a persistent volume defined by a pod\'s inline VolumeSource. This field is populated only for the CSIMigration feature. It contains translated fields from a pod\'s inline VolumeSource to a PersistentVolumeSpec. This field is beta-level and is only honored by servers that enabled the CSIMigration feature.
   */
  inlineVolumeSpec?: PersistentVolumeSpec;
  /**
   * persistentVolumeName represents the name of the persistent volume to attach.
   */
  persistentVolumeName?: string;
}
