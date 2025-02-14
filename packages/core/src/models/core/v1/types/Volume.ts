import type { AWSElasticBlockStoreVolumeSource } from './AWSElasticBlockStoreVolumeSource.ts';
import type { AzureDiskVolumeSource } from './AzureDiskVolumeSource.ts';
import type { AzureFileVolumeSource } from './AzureFileVolumeSource.ts';
import type { CSIVolumeSource } from './CSIVolumeSource.ts';
import type { CephFSVolumeSource } from './CephFSVolumeSource.ts';
import type { CinderVolumeSource } from './CinderVolumeSource.ts';
import type { ConfigMapVolumeSource } from './ConfigMapVolumeSource.ts';
import type { DownwardAPIVolumeSource } from './DownwardAPIVolumeSource.ts';
import type { EmptyDirVolumeSource } from './EmptyDirVolumeSource.ts';
import type { EphemeralVolumeSource } from './EphemeralVolumeSource.ts';
import type { FCVolumeSource } from './FCVolumeSource.ts';
import type { FlexVolumeSource } from './FlexVolumeSource.ts';
import type { FlockerVolumeSource } from './FlockerVolumeSource.ts';
import type { GCEPersistentDiskVolumeSource } from './GCEPersistentDiskVolumeSource.ts';
import type { GitRepoVolumeSource } from './GitRepoVolumeSource.ts';
import type { GlusterfsVolumeSource } from './GlusterfsVolumeSource.ts';
import type { HostPathVolumeSource } from './HostPathVolumeSource.ts';
import type { ISCSIVolumeSource } from './ISCSIVolumeSource.ts';
import type { ImageVolumeSource } from './ImageVolumeSource.ts';
import type { NFSVolumeSource } from './NFSVolumeSource.ts';
import type { PersistentVolumeClaimVolumeSource } from './PersistentVolumeClaimVolumeSource.ts';
import type { PhotonPersistentDiskVolumeSource } from './PhotonPersistentDiskVolumeSource.ts';
import type { PortworxVolumeSource } from './PortworxVolumeSource.ts';
import type { ProjectedVolumeSource } from './ProjectedVolumeSource.ts';
import type { QuobyteVolumeSource } from './QuobyteVolumeSource.ts';
import type { RBDVolumeSource } from './RBDVolumeSource.ts';
import type { ScaleIOVolumeSource } from './ScaleIOVolumeSource.ts';
import type { SecretVolumeSource } from './SecretVolumeSource.ts';
import type { StorageOSVolumeSource } from './StorageOSVolumeSource.ts';
import type { VsphereVirtualDiskVolumeSource } from './VsphereVirtualDiskVolumeSource.ts';

/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 */
export interface Volume {
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
  azureFile?: AzureFileVolumeSource;
  /**
   * cephFS represents a Ceph FS mount on the host that shares a pod\'s lifetime. Deprecated: CephFS is deprecated and the in-tree cephfs type is no longer supported.
   */
  cephfs?: CephFSVolumeSource;
  /**
   * cinder represents a cinder volume attached and mounted on kubelets host machine. Deprecated: Cinder is deprecated. All operations for the in-tree cinder type are redirected to the cinder.csi.openstack.org CSI driver. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
   */
  cinder?: CinderVolumeSource;
  /**
   * configMap represents a configMap that should populate this volume
   */
  configMap?: ConfigMapVolumeSource;
  /**
   * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers.
   */
  csi?: CSIVolumeSource;
  /**
   * downwardAPI represents downward API about the pod that should populate this volume
   */
  downwardAPI?: DownwardAPIVolumeSource;
  /**
   * emptyDir represents a temporary directory that shares a pod\'s lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
   */
  emptyDir?: EmptyDirVolumeSource;
  /**
   * ephemeral represents a volume that is handled by a cluster storage driver. The volume\'s lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed.  Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity    tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through    a PersistentVolumeClaim (see EphemeralVolumeSource for more    information on the connection between this volume type    and PersistentVolumeClaim).  Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod.  Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information.  A pod can use both types of ephemeral volumes and persistent volumes at the same time.
   */
  ephemeral?: EphemeralVolumeSource;
  /**
   * fc represents a Fibre Channel resource that is attached to a kubelet\'s host machine and then exposed to the pod.
   */
  fc?: FCVolumeSource;
  /**
   * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. Deprecated: FlexVolume is deprecated. Consider using a CSIDriver instead.
   */
  flexVolume?: FlexVolumeSource;
  /**
   * flocker represents a Flocker volume attached to a kubelet\'s host machine. This depends on the Flocker control service being running. Deprecated: Flocker is deprecated and the in-tree flocker type is no longer supported.
   */
  flocker?: FlockerVolumeSource;
  /**
   * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. Deprecated: GCEPersistentDisk is deprecated. All operations for the in-tree gcePersistentDisk type are redirected to the pd.csi.storage.gke.io CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   */
  gcePersistentDisk?: GCEPersistentDiskVolumeSource;
  /**
   * gitRepo represents a git repository at a particular revision. Deprecated: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod\'s container.
   */
  gitRepo?: GitRepoVolumeSource;
  /**
   * glusterfs represents a Glusterfs mount on the host that shares a pod\'s lifetime. Deprecated: Glusterfs is deprecated and the in-tree glusterfs type is no longer supported. More info: https://examples.k8s.io/volumes/glusterfs/README.md
   */
  glusterfs?: GlusterfsVolumeSource;
  /**
   * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   */
  hostPath?: HostPathVolumeSource;
  /**
   * image represents an OCI object (a container image or artifact) pulled and mounted on the kubelet\'s host machine. The volume is resolved at pod startup depending on which PullPolicy value is provided:  - Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails. - Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn\'t present. - IfNotPresent: the kubelet pulls if the reference isn\'t already present on disk. Container creation will fail if the reference isn\'t present and the pull fails.  The volume gets re-resolved if the pod gets deleted and recreated, which means that new remote content will become available on pod recreation. A failure to resolve or pull the image during pod startup will block containers from starting and may add significant latency. Failures will be retried using normal volume backoff and will be reported on the pod reason and message. The types of objects that may be mounted by this volume are defined by the container runtime implementation on a host machine and at minimum must include all valid types supported by the container image field. The OCI object gets mounted in a single directory (spec.containers[*].volumeMounts.mountPath) by merging the manifest layers in the same way as for container images. The volume will be mounted read-only (ro) and non-executable files (noexec). Sub path mounts for containers are not supported (spec.containers[*].volumeMounts.subpath). The field spec.securityContext.fsGroupChangePolicy has no effect on this volume type.
   */
  image?: ImageVolumeSource;
  /**
   * iscsi represents an ISCSI Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
   */
  iscsi?: ISCSIVolumeSource;
  /**
   * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name: string;
  /**
   * nfs represents an NFS mount on the host that shares a pod\'s lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  nfs?: NFSVolumeSource;
  /**
   * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   */
  persistentVolumeClaim?: PersistentVolumeClaimVolumeSource;
  /**
   * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine. Deprecated: PhotonPersistentDisk is deprecated and the in-tree photonPersistentDisk type is no longer supported.
   */
  photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
  /**
   * portworxVolume represents a portworx volume attached and mounted on kubelets host machine. Deprecated: PortworxVolume is deprecated. All operations for the in-tree portworxVolume type are redirected to the pxd.portworx.com CSI driver when the CSIMigrationPortworx feature-gate is on.
   */
  portworxVolume?: PortworxVolumeSource;
  /**
   * projected items for all in one resources secrets, configmaps, and downward API
   */
  projected?: ProjectedVolumeSource;
  /**
   * quobyte represents a Quobyte mount on the host that shares a pod\'s lifetime. Deprecated: Quobyte is deprecated and the in-tree quobyte type is no longer supported.
   */
  quobyte?: QuobyteVolumeSource;
  /**
   * rbd represents a Rados Block Device mount on the host that shares a pod\'s lifetime. Deprecated: RBD is deprecated and the in-tree rbd type is no longer supported. More info: https://examples.k8s.io/volumes/rbd/README.md
   */
  rbd?: RBDVolumeSource;
  /**
   * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes. Deprecated: ScaleIO is deprecated and the in-tree scaleIO type is no longer supported.
   */
  scaleIO?: ScaleIOVolumeSource;
  /**
   * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
   */
  secret?: SecretVolumeSource;
  /**
   * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes. Deprecated: StorageOS is deprecated and the in-tree storageos type is no longer supported.
   */
  storageos?: StorageOSVolumeSource;
  /**
   * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine. Deprecated: VsphereVolume is deprecated. All operations for the in-tree vsphereVolume type are redirected to the csi.vsphere.vmware.com CSI driver.
   */
  vsphereVolume?: VsphereVirtualDiskVolumeSource;
}
