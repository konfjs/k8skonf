import { AWSElasticBlockStoreVolumeSourcev1 } from './AWSElasticBlockStoreVolumeSourcev1.js';
import { AzureDiskVolumeSourcev1 } from './AzureDiskVolumeSourcev1.js';
import { AzureFilePersistentVolumeSourcev1 } from './AzureFilePersistentVolumeSourcev1.js';
import { CSIPersistentVolumeSourcev1 } from './CSIPersistentVolumeSourcev1.js';
import { CephFSPersistentVolumeSourcev1 } from './CephFSPersistentVolumeSourcev1.js';
import { CinderPersistentVolumeSourcev1 } from './CinderPersistentVolumeSourcev1.js';
import { FCVolumeSourcev1 } from './FCVolumeSourcev1.js';
import { FlexPersistentVolumeSourcev1 } from './FlexPersistentVolumeSourcev1.js';
import { FlockerVolumeSourcev1 } from './FlockerVolumeSourcev1.js';
import { GCEPersistentDiskVolumeSourcev1 } from './GCEPersistentDiskVolumeSourcev1.js';
import { GlusterfsPersistentVolumeSourcev1 } from './GlusterfsPersistentVolumeSourcev1.js';
import { HostPathVolumeSourcev1 } from './HostPathVolumeSourcev1.js';
import { ISCSIPersistentVolumeSourcev1 } from './ISCSIPersistentVolumeSourcev1.js';
import { LocalVolumeSourcev1 } from './LocalVolumeSourcev1.js';
import { NFSVolumeSourcev1 } from './NFSVolumeSourcev1.js';
import { ObjectReferencev1 } from './ObjectReferencev1.js';
import { PhotonPersistentDiskVolumeSourcev1 } from './PhotonPersistentDiskVolumeSourcev1.js';
import { PortworxVolumeSourcev1 } from './PortworxVolumeSourcev1.js';
import { QuobyteVolumeSourcev1 } from './QuobyteVolumeSourcev1.js';
import { RBDPersistentVolumeSourcev1 } from './RBDPersistentVolumeSourcev1.js';
import { ScaleIOPersistentVolumeSourcev1 } from './ScaleIOPersistentVolumeSourcev1.js';
import { StorageOSPersistentVolumeSourcev1 } from './StorageOSPersistentVolumeSourcev1.js';
import { VolumeNodeAffinityv1 } from './VolumeNodeAffinityv1.js';
import { VsphereVirtualDiskVolumeSourcev1 } from './VsphereVirtualDiskVolumeSourcev1.js';

/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
export interface PersistentVolumeSpecv1 {
  /**
   * accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
   */
  accessModes?: Array<string>;
  /**
   * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
   */
  awsElasticBlockStore?: AWSElasticBlockStoreVolumeSourcev1;
  /**
   * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
   */
  azureDisk?: AzureDiskVolumeSourcev1;
  /**
   * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
   */
  azureFile?: AzureFilePersistentVolumeSourcev1;
  /**
   * capacity is the description of the persistent volume\'s resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
   */
  capacity?: { [key: string]: Quantity };
  /**
   * cephFS represents a Ceph FS mount on the host that shares a pod\'s lifetime
   */
  cephfs?: CephFSPersistentVolumeSourcev1;
  /**
   * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
   */
  cinder?: CinderPersistentVolumeSourcev1;
  /**
   * claimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#binding
   */
  claimRef?: ObjectReferencev1;
  /**
   * csi represents storage that is handled by an external CSI driver (Beta feature).
   */
  csi?: CSIPersistentVolumeSourcev1;
  /**
   * fc represents a Fibre Channel resource that is attached to a kubelet\'s host machine and then exposed to the pod.
   */
  fc?: FCVolumeSourcev1;
  /**
   * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
   */
  flexVolume?: FlexPersistentVolumeSourcev1;
  /**
   * flocker represents a Flocker volume attached to a kubelet\'s host machine and exposed to the pod for its usage. This depends on the Flocker control service being running
   */
  flocker?: FlockerVolumeSourcev1;
  /**
   * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   */
  gcePersistentDisk?: GCEPersistentDiskVolumeSourcev1;
  /**
   * glusterfs represents a Glusterfs volume that is attached to a host and exposed to the pod. Provisioned by an admin. More info: https://examples.k8s.io/volumes/glusterfs/README.md
   */
  glusterfs?: GlusterfsPersistentVolumeSourcev1;
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
   * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
   */
  photonPersistentDisk?: PhotonPersistentDiskVolumeSourcev1;
  /**
   * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
   */
  portworxVolume?: PortworxVolumeSourcev1;
  /**
   * quobyte represents a Quobyte mount on the host that shares a pod\'s lifetime
   */
  quobyte?: QuobyteVolumeSourcev1;
  /**
   * rbd represents a Rados Block Device mount on the host that shares a pod\'s lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
   */
  rbd?: RBDPersistentVolumeSourcev1;
  /**
   * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
   */
  scaleIO?: ScaleIOPersistentVolumeSourcev1;
  /**
   * storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
   */
  storageClassName?: string;
  /**
   * storageOS represents a StorageOS volume that is attached to the kubelet\'s host machine and mounted into the pod More info: https://examples.k8s.io/volumes/storageos/README.md
   */
  storageos?: StorageOSPersistentVolumeSourcev1;
  /**
   * Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is a beta field and requires enabling VolumeAttributesClass feature (off by default).
   */
  volumeAttributesClassName?: string;
  /**
   * volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.
   */
  volumeMode?: string;
  /**
   * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
   */
  vsphereVolume?: VsphereVirtualDiskVolumeSourcev1;
}
