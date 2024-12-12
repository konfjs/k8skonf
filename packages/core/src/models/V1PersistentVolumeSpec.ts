import { V1AWSElasticBlockStoreVolumeSource } from './V1AWSElasticBlockStoreVolumeSource.js';
import { V1AzureDiskVolumeSource } from './V1AzureDiskVolumeSource.js';
import { V1AzureFilePersistentVolumeSource } from './V1AzureFilePersistentVolumeSource.js';
import { V1CSIPersistentVolumeSource } from './V1CSIPersistentVolumeSource.js';
import { V1CephFSPersistentVolumeSource } from './V1CephFSPersistentVolumeSource.js';
import { V1CinderPersistentVolumeSource } from './V1CinderPersistentVolumeSource.js';
import { V1FCVolumeSource } from './V1FCVolumeSource.js';
import { V1FlexPersistentVolumeSource } from './V1FlexPersistentVolumeSource.js';
import { V1FlockerVolumeSource } from './V1FlockerVolumeSource.js';
import { V1GCEPersistentDiskVolumeSource } from './V1GCEPersistentDiskVolumeSource.js';
import { V1GlusterfsPersistentVolumeSource } from './V1GlusterfsPersistentVolumeSource.js';
import { V1HostPathVolumeSource } from './V1HostPathVolumeSource.js';
import { V1ISCSIPersistentVolumeSource } from './V1ISCSIPersistentVolumeSource.js';
import { V1LocalVolumeSource } from './V1LocalVolumeSource.js';
import { V1NFSVolumeSource } from './V1NFSVolumeSource.js';
import { V1ObjectReference } from './V1ObjectReference.js';
import { V1PhotonPersistentDiskVolumeSource } from './V1PhotonPersistentDiskVolumeSource.js';
import { V1PortworxVolumeSource } from './V1PortworxVolumeSource.js';
import { V1QuobyteVolumeSource } from './V1QuobyteVolumeSource.js';
import { V1RBDPersistentVolumeSource } from './V1RBDPersistentVolumeSource.js';
import { V1ScaleIOPersistentVolumeSource } from './V1ScaleIOPersistentVolumeSource.js';
import { V1StorageOSPersistentVolumeSource } from './V1StorageOSPersistentVolumeSource.js';
import { V1VolumeNodeAffinity } from './V1VolumeNodeAffinity.js';
import { V1VsphereVirtualDiskVolumeSource } from './V1VsphereVirtualDiskVolumeSource.js';

/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
export interface V1PersistentVolumeSpec {
  /**
   * accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
   */
  accessModes?: Array<string>;
  /**
   * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
   */
  awsElasticBlockStore?: V1AWSElasticBlockStoreVolumeSource;
  /**
   * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
   */
  azureDisk?: V1AzureDiskVolumeSource;
  /**
   * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
   */
  azureFile?: V1AzureFilePersistentVolumeSource;
  /**
   * capacity is the description of the persistent volume\'s resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
   */
  capacity?: { [key: string]: number | string };
  /**
   * cephFS represents a Ceph FS mount on the host that shares a pod\'s lifetime
   */
  cephfs?: V1CephFSPersistentVolumeSource;
  /**
   * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
   */
  cinder?: V1CinderPersistentVolumeSource;
  /**
   * claimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#binding
   */
  claimRef?: V1ObjectReference;
  /**
   * csi represents storage that is handled by an external CSI driver (Beta feature).
   */
  csi?: V1CSIPersistentVolumeSource;
  /**
   * fc represents a Fibre Channel resource that is attached to a kubelet\'s host machine and then exposed to the pod.
   */
  fc?: V1FCVolumeSource;
  /**
   * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
   */
  flexVolume?: V1FlexPersistentVolumeSource;
  /**
   * flocker represents a Flocker volume attached to a kubelet\'s host machine and exposed to the pod for its usage. This depends on the Flocker control service being running
   */
  flocker?: V1FlockerVolumeSource;
  /**
   * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   */
  gcePersistentDisk?: V1GCEPersistentDiskVolumeSource;
  /**
   * glusterfs represents a Glusterfs volume that is attached to a host and exposed to the pod. Provisioned by an admin. More info: https://examples.k8s.io/volumes/glusterfs/README.md
   */
  glusterfs?: V1GlusterfsPersistentVolumeSource;
  /**
   * hostPath represents a directory on the host. Provisioned by a developer or tester. This is useful for single-node development and testing only! On-host storage is not supported in any way and WILL NOT WORK in a multi-node cluster. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   */
  hostPath?: V1HostPathVolumeSource;
  /**
   * iscsi represents an ISCSI Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. Provisioned by an admin.
   */
  iscsi?: V1ISCSIPersistentVolumeSource;
  /**
   * local represents directly-attached storage with node affinity
   */
  local?: V1LocalVolumeSource;
  /**
   * mountOptions is the list of mount options, e.g. [\"ro\", \"soft\"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
   */
  mountOptions?: Array<string>;
  /**
   * nfs represents an NFS mount on the host. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  nfs?: V1NFSVolumeSource;
  /**
   * nodeAffinity defines constraints that limit what nodes this volume can be accessed from. This field influences the scheduling of pods that use this volume.
   */
  nodeAffinity?: V1VolumeNodeAffinity;
  /**
   * persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
   */
  persistentVolumeReclaimPolicy?: string;
  /**
   * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
   */
  photonPersistentDisk?: V1PhotonPersistentDiskVolumeSource;
  /**
   * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
   */
  portworxVolume?: V1PortworxVolumeSource;
  /**
   * quobyte represents a Quobyte mount on the host that shares a pod\'s lifetime
   */
  quobyte?: V1QuobyteVolumeSource;
  /**
   * rbd represents a Rados Block Device mount on the host that shares a pod\'s lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
   */
  rbd?: V1RBDPersistentVolumeSource;
  /**
   * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
   */
  scaleIO?: V1ScaleIOPersistentVolumeSource;
  /**
   * storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
   */
  storageClassName?: string;
  /**
   * storageOS represents a StorageOS volume that is attached to the kubelet\'s host machine and mounted into the pod More info: https://examples.k8s.io/volumes/storageos/README.md
   */
  storageos?: V1StorageOSPersistentVolumeSource;
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
  vsphereVolume?: V1VsphereVirtualDiskVolumeSource;
}
