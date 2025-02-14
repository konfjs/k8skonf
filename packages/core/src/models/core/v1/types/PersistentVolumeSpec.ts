import type { AWSElasticBlockStoreVolumeSource } from './AWSElasticBlockStoreVolumeSource.ts';
import type { AzureDiskVolumeSource } from './AzureDiskVolumeSource.ts';
import type { AzureFilePersistentVolumeSource } from './AzureFilePersistentVolumeSource.ts';
import type { CSIPersistentVolumeSource } from './CSIPersistentVolumeSource.ts';
import type { CephFSPersistentVolumeSource } from './CephFSPersistentVolumeSource.ts';
import type { CinderPersistentVolumeSource } from './CinderPersistentVolumeSource.ts';
import type { FCVolumeSource } from './FCVolumeSource.ts';
import type { FlexPersistentVolumeSource } from './FlexPersistentVolumeSource.ts';
import type { FlockerVolumeSource } from './FlockerVolumeSource.ts';
import type { GCEPersistentDiskVolumeSource } from './GCEPersistentDiskVolumeSource.ts';
import type { GlusterfsPersistentVolumeSource } from './GlusterfsPersistentVolumeSource.ts';
import type { HostPathVolumeSource } from './HostPathVolumeSource.ts';
import type { ISCSIPersistentVolumeSource } from './ISCSIPersistentVolumeSource.ts';
import type { LocalVolumeSource } from './LocalVolumeSource.ts';
import type { NFSVolumeSource } from './NFSVolumeSource.ts';
import type { ObjectReference } from './ObjectReference.ts';
import type { PhotonPersistentDiskVolumeSource } from './PhotonPersistentDiskVolumeSource.ts';
import type { PortworxVolumeSource } from './PortworxVolumeSource.ts';
import type { QuobyteVolumeSource } from './QuobyteVolumeSource.ts';
import type { RBDPersistentVolumeSource } from './RBDPersistentVolumeSource.ts';
import type { ScaleIOPersistentVolumeSource } from './ScaleIOPersistentVolumeSource.ts';
import type { StorageOSPersistentVolumeSource } from './StorageOSPersistentVolumeSource.ts';
import type { VolumeNodeAffinity } from './VolumeNodeAffinity.ts';
import type { VsphereVirtualDiskVolumeSource } from './VsphereVirtualDiskVolumeSource.ts';

/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
export interface PersistentVolumeSpec {
  /**
   * accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
   */
  accessModes?: Array<string>;
  /**
   * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. Deprecated: AWSElasticBlockStore is deprecated. All operations for the in-tree awsElasticBlockStore type are redirected to the ebs.csi.aws.com CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
   */
  awsElasticBlockStore?: AWSElasticBlockStoreVolumeSource;
  /**
   * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. Deprecated: AzureDisk is deprecated. All operations for the in-tree azureDisk type are redirected to the disk.csi.azure.com CSI driver.
   */
  azureDisk?: AzureDiskVolumeSource;
  /**
   * azureFile represents an Azure File Service mount on the host and bind mount to the pod. Deprecated: AzureFile is deprecated. All operations for the in-tree azureFile type are redirected to the file.csi.azure.com CSI driver.
   */
  azureFile?: AzureFilePersistentVolumeSource;
  /**
   * capacity is the description of the persistent volume\'s resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
   */
  capacity?: { [key: string]: number | string };
  /**
   * cephFS represents a Ceph FS mount on the host that shares a pod\'s lifetime. Deprecated: CephFS is deprecated and the in-tree cephfs type is no longer supported.
   */
  cephfs?: CephFSPersistentVolumeSource;
  /**
   * cinder represents a cinder volume attached and mounted on kubelets host machine. Deprecated: Cinder is deprecated. All operations for the in-tree cinder type are redirected to the cinder.csi.openstack.org CSI driver. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
   */
  cinder?: CinderPersistentVolumeSource;
  /**
   * claimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#binding
   */
  claimRef?: ObjectReference;
  /**
   * csi represents storage that is handled by an external CSI driver.
   */
  csi?: CSIPersistentVolumeSource;
  /**
   * fc represents a Fibre Channel resource that is attached to a kubelet\'s host machine and then exposed to the pod.
   */
  fc?: FCVolumeSource;
  /**
   * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. Deprecated: FlexVolume is deprecated. Consider using a CSIDriver instead.
   */
  flexVolume?: FlexPersistentVolumeSource;
  /**
   * flocker represents a Flocker volume attached to a kubelet\'s host machine and exposed to the pod for its usage. This depends on the Flocker control service being running. Deprecated: Flocker is deprecated and the in-tree flocker type is no longer supported.
   */
  flocker?: FlockerVolumeSource;
  /**
   * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. Provisioned by an admin. Deprecated: GCEPersistentDisk is deprecated. All operations for the in-tree gcePersistentDisk type are redirected to the pd.csi.storage.gke.io CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   */
  gcePersistentDisk?: GCEPersistentDiskVolumeSource;
  /**
   * glusterfs represents a Glusterfs volume that is attached to a host and exposed to the pod. Provisioned by an admin. Deprecated: Glusterfs is deprecated and the in-tree glusterfs type is no longer supported. More info: https://examples.k8s.io/volumes/glusterfs/README.md
   */
  glusterfs?: GlusterfsPersistentVolumeSource;
  /**
   * hostPath represents a directory on the host. Provisioned by a developer or tester. This is useful for single-node development and testing only! On-host storage is not supported in any way and WILL NOT WORK in a multi-node cluster. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   */
  hostPath?: HostPathVolumeSource;
  /**
   * iscsi represents an ISCSI Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. Provisioned by an admin.
   */
  iscsi?: ISCSIPersistentVolumeSource;
  /**
   * local represents directly-attached storage with node affinity
   */
  local?: LocalVolumeSource;
  /**
   * mountOptions is the list of mount options, e.g. [\"ro\", \"soft\"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
   */
  mountOptions?: Array<string>;
  /**
   * nfs represents an NFS mount on the host. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  nfs?: NFSVolumeSource;
  /**
   * nodeAffinity defines constraints that limit what nodes this volume can be accessed from. This field influences the scheduling of pods that use this volume.
   */
  nodeAffinity?: VolumeNodeAffinity;
  /**
   * persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
   */
  persistentVolumeReclaimPolicy?: string;
  /**
   * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine. Deprecated: PhotonPersistentDisk is deprecated and the in-tree photonPersistentDisk type is no longer supported.
   */
  photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
  /**
   * portworxVolume represents a portworx volume attached and mounted on kubelets host machine. Deprecated: PortworxVolume is deprecated. All operations for the in-tree portworxVolume type are redirected to the pxd.portworx.com CSI driver when the CSIMigrationPortworx feature-gate is on.
   */
  portworxVolume?: PortworxVolumeSource;
  /**
   * quobyte represents a Quobyte mount on the host that shares a pod\'s lifetime. Deprecated: Quobyte is deprecated and the in-tree quobyte type is no longer supported.
   */
  quobyte?: QuobyteVolumeSource;
  /**
   * rbd represents a Rados Block Device mount on the host that shares a pod\'s lifetime. Deprecated: RBD is deprecated and the in-tree rbd type is no longer supported. More info: https://examples.k8s.io/volumes/rbd/README.md
   */
  rbd?: RBDPersistentVolumeSource;
  /**
   * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes. Deprecated: ScaleIO is deprecated and the in-tree scaleIO type is no longer supported.
   */
  scaleIO?: ScaleIOPersistentVolumeSource;
  /**
   * storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
   */
  storageClassName?: string;
  /**
   * storageOS represents a StorageOS volume that is attached to the kubelet\'s host machine and mounted into the pod. Deprecated: StorageOS is deprecated and the in-tree storageos type is no longer supported. More info: https://examples.k8s.io/volumes/storageos/README.md
   */
  storageos?: StorageOSPersistentVolumeSource;
  /**
   * Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is a beta field and requires enabling VolumeAttributesClass feature (off by default).
   */
  volumeAttributesClassName?: string;
  /**
   * volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.
   */
  volumeMode?: string;
  /**
   * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine. Deprecated: VsphereVolume is deprecated. All operations for the in-tree vsphereVolume type are redirected to the csi.vsphere.vmware.com CSI driver.
   */
  vsphereVolume?: VsphereVirtualDiskVolumeSource;
}
