/**
 * Represents a vSphere volume resource.
 */
export interface VsphereVirtualDiskVolumeSource {
  /**
   * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
   */
  fsType?: string;
  /**
   * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
   */
  storagePolicyID?: string;
  /**
   * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
   */
  storagePolicyName?: string;
  /**
   * volumePath is the path that identifies vSphere volume vmdk
   */
  volumePath: string;
}
