import type { ObjectReference } from './ObjectReference.ts';

/**
 * Represents a StorageOS persistent volume resource.
 */
export interface StorageOSPersistentVolumeSource {
  /**
   * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
   */
  fsType?: string;
  /**
   * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean;
  /**
   * secretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.
   */
  secretRef?: ObjectReference;
  /**
   * volumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
   */
  volumeName?: string;
  /**
   * volumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod\'s namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to \"default\" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
   */
  volumeNamespace?: string;
}
