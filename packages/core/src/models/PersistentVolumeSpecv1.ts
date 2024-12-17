import { CSIPersistentVolumeSourcev1 } from './CSIPersistentVolumeSourcev1.js';
import { FCVolumeSourcev1 } from './FCVolumeSourcev1.js';
import { HostPathVolumeSourcev1 } from './HostPathVolumeSourcev1.js';
import { ISCSIPersistentVolumeSourcev1 } from './ISCSIPersistentVolumeSourcev1.js';
import { LocalVolumeSourcev1 } from './LocalVolumeSourcev1.js';
import { NFSVolumeSourcev1 } from './NFSVolumeSourcev1.js';
import { ObjectReferencev1 } from './ObjectReferencev1.js';
import { VolumeNodeAffinityv1 } from './VolumeNodeAffinityv1.js';

/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
export interface PersistentVolumeSpecv1 {
  /**
   * accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
   */
  accessModes?: Array<string>;
  /**
   * capacity is the description of the persistent volume\'s resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
   */
  capacity?: { [key: string]: number | string };
  /**
   * claimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#binding
   */
  claimRef?: ObjectReferencev1;
  /**
   * csi represents storage that is handled by an external CSI driver.
   */
  csi?: CSIPersistentVolumeSourcev1;
  /**
   * fc represents a Fibre Channel resource that is attached to a kubelet\'s host machine and then exposed to the pod.
   */
  fc?: FCVolumeSourcev1;
  /**
   * hostPath represents a directory on the host. Provisioned by a developer or tester. This is useful for single-node development and testing only! On-host storage is not supported in any way and WILL NOT WORK in a multi-node cluster. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   */
  hostPath?: HostPathVolumeSourcev1;
  /**
   * iscsi represents an ISCSI Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. Provisioned by an admin.
   */
  iscsi?: ISCSIPersistentVolumeSourcev1;
  /**
   * local represents directly-attached storage with node affinity
   */
  local?: LocalVolumeSourcev1;
  /**
   * mountOptions is the list of mount options, e.g. [\"ro\", \"soft\"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
   */
  mountOptions?: Array<string>;
  /**
   * nfs represents an NFS mount on the host. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  nfs?: NFSVolumeSourcev1;
  /**
   * nodeAffinity defines constraints that limit what nodes this volume can be accessed from. This field influences the scheduling of pods that use this volume.
   */
  nodeAffinity?: VolumeNodeAffinityv1;
  /**
   * persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
   */
  persistentVolumeReclaimPolicy?: string;
  /**
   * storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
   */
  storageClassName?: string;
  /**
   * Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is a beta field and requires enabling VolumeAttributesClass feature (off by default).
   */
  volumeAttributesClassName?: string;
  /**
   * volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.
   */
  volumeMode?: string;
}
