import { SecretReference } from './SecretReference';

/**
 * ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
 */
export interface ScaleIOPersistentVolumeSource {
  /**
   * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Default is \"xfs\"
   */
  fsType?: string;
  /**
   * gateway is the host address of the ScaleIO API Gateway.
   */
  gateway: string;
  /**
   * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
   */
  protectionDomain?: string;
  /**
   * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean;
  /**
   * secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
   */
  secretRef: SecretReference;
  /**
   * sslEnabled is the flag to enable/disable SSL communication with Gateway, default false
   */
  sslEnabled?: boolean;
  /**
   * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
   */
  storageMode?: string;
  /**
   * storagePool is the ScaleIO Storage Pool associated with the protection domain.
   */
  storagePool?: string;
  /**
   * system is the name of the storage system as configured in ScaleIO.
   */
  system: string;
  /**
   * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
   */
  volumeName?: string;
}
