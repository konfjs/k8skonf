import { V1AWSElasticBlockStoreVolumeSource } from './V1AWSElasticBlockStoreVolumeSource.js';
import { V1AzureDiskVolumeSource } from './V1AzureDiskVolumeSource.js';
import { V1AzureFileVolumeSource } from './V1AzureFileVolumeSource.js';
import { V1CSIVolumeSource } from './V1CSIVolumeSource.js';
import { V1CephFSVolumeSource } from './V1CephFSVolumeSource.js';
import { V1CinderVolumeSource } from './V1CinderVolumeSource.js';
import { V1ConfigMapVolumeSource } from './V1ConfigMapVolumeSource.js';
import { V1DownwardAPIVolumeSource } from './V1DownwardAPIVolumeSource.js';
import { V1EmptyDirVolumeSource } from './V1EmptyDirVolumeSource.js';
import { V1EphemeralVolumeSource } from './V1EphemeralVolumeSource.js';
import { V1FCVolumeSource } from './V1FCVolumeSource.js';
import { V1FlexVolumeSource } from './V1FlexVolumeSource.js';
import { V1FlockerVolumeSource } from './V1FlockerVolumeSource.js';
import { V1GCEPersistentDiskVolumeSource } from './V1GCEPersistentDiskVolumeSource.js';
import { V1GitRepoVolumeSource } from './V1GitRepoVolumeSource.js';
import { V1GlusterfsVolumeSource } from './V1GlusterfsVolumeSource.js';
import { V1HostPathVolumeSource } from './V1HostPathVolumeSource.js';
import { V1ISCSIVolumeSource } from './V1ISCSIVolumeSource.js';
import { V1ImageVolumeSource } from './V1ImageVolumeSource.js';
import { V1NFSVolumeSource } from './V1NFSVolumeSource.js';
import { V1PersistentVolumeClaimVolumeSource } from './V1PersistentVolumeClaimVolumeSource.js';
import { V1PhotonPersistentDiskVolumeSource } from './V1PhotonPersistentDiskVolumeSource.js';
import { V1PortworxVolumeSource } from './V1PortworxVolumeSource.js';
import { V1ProjectedVolumeSource } from './V1ProjectedVolumeSource.js';
import { V1QuobyteVolumeSource } from './V1QuobyteVolumeSource.js';
import { V1RBDVolumeSource } from './V1RBDVolumeSource.js';
import { V1ScaleIOVolumeSource } from './V1ScaleIOVolumeSource.js';
import { V1SecretVolumeSource } from './V1SecretVolumeSource.js';
import { V1StorageOSVolumeSource } from './V1StorageOSVolumeSource.js';
import { V1VsphereVirtualDiskVolumeSource } from './V1VsphereVirtualDiskVolumeSource.js';

/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 */
export interface V1Volume {
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
  azureFile?: V1AzureFileVolumeSource;
  /**
   * cephFS represents a Ceph FS mount on the host that shares a pod\'s lifetime
   */
  cephfs?: V1CephFSVolumeSource;
  /**
   * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
   */
  cinder?: V1CinderVolumeSource;
  /**
   * configMap represents a configMap that should populate this volume
   */
  configMap?: V1ConfigMapVolumeSource;
  /**
   * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
   */
  csi?: V1CSIVolumeSource;
  /**
   * downwardAPI represents downward API about the pod that should populate this volume
   */
  downwardAPI?: V1DownwardAPIVolumeSource;
  /**
   * emptyDir represents a temporary directory that shares a pod\'s lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
   */
  emptyDir?: V1EmptyDirVolumeSource;
  /**
   * ephemeral represents a volume that is handled by a cluster storage driver. The volume\'s lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed.  Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity    tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through    a PersistentVolumeClaim (see EphemeralVolumeSource for more    information on the connection between this volume type    and PersistentVolumeClaim).  Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod.  Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information.  A pod can use both types of ephemeral volumes and persistent volumes at the same time.
   */
  ephemeral?: V1EphemeralVolumeSource;
  /**
   * fc represents a Fibre Channel resource that is attached to a kubelet\'s host machine and then exposed to the pod.
   */
  fc?: V1FCVolumeSource;
  /**
   * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
   */
  flexVolume?: V1FlexVolumeSource;
  /**
   * flocker represents a Flocker volume attached to a kubelet\'s host machine. This depends on the Flocker control service being running
   */
  flocker?: V1FlockerVolumeSource;
  /**
   * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   */
  gcePersistentDisk?: V1GCEPersistentDiskVolumeSource;
  /**
   * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod\'s container.
   */
  gitRepo?: V1GitRepoVolumeSource;
  /**
   * glusterfs represents a Glusterfs mount on the host that shares a pod\'s lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
   */
  glusterfs?: V1GlusterfsVolumeSource;
  /**
   * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   */
  hostPath?: V1HostPathVolumeSource;
  /**
   * image represents an OCI object (a container image or artifact) pulled and mounted on the kubelet\'s host machine. The volume is resolved at pod startup depending on which PullPolicy value is provided:  - Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails. - Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn\'t present. - IfNotPresent: the kubelet pulls if the reference isn\'t already present on disk. Container creation will fail if the reference isn\'t present and the pull fails.  The volume gets re-resolved if the pod gets deleted and recreated, which means that new remote content will become available on pod recreation. A failure to resolve or pull the image during pod startup will block containers from starting and may add significant latency. Failures will be retried using normal volume backoff and will be reported on the pod reason and message. The types of objects that may be mounted by this volume are defined by the container runtime implementation on a host machine and at minimum must include all valid types supported by the container image field. The OCI object gets mounted in a single directory (spec.containers[*].volumeMounts.mountPath) by merging the manifest layers in the same way as for container images. The volume will be mounted read-only (ro) and non-executable files (noexec). Sub path mounts for containers are not supported (spec.containers[*].volumeMounts.subpath). The field spec.securityContext.fsGroupChangePolicy has no effect on this volume type.
   */
  image?: V1ImageVolumeSource;
  /**
   * iscsi represents an ISCSI Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
   */
  iscsi?: V1ISCSIVolumeSource;
  /**
   * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name: string;
  /**
   * nfs represents an NFS mount on the host that shares a pod\'s lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  nfs?: V1NFSVolumeSource;
  /**
   * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   */
  persistentVolumeClaim?: V1PersistentVolumeClaimVolumeSource;
  /**
   * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
   */
  photonPersistentDisk?: V1PhotonPersistentDiskVolumeSource;
  /**
   * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
   */
  portworxVolume?: V1PortworxVolumeSource;
  /**
   * projected items for all in one resources secrets, configmaps, and downward API
   */
  projected?: V1ProjectedVolumeSource;
  /**
   * quobyte represents a Quobyte mount on the host that shares a pod\'s lifetime
   */
  quobyte?: V1QuobyteVolumeSource;
  /**
   * rbd represents a Rados Block Device mount on the host that shares a pod\'s lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
   */
  rbd?: V1RBDVolumeSource;
  /**
   * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
   */
  scaleIO?: V1ScaleIOVolumeSource;
  /**
   * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
   */
  secret?: V1SecretVolumeSource;
  /**
   * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
   */
  storageos?: V1StorageOSVolumeSource;
  /**
   * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
   */
  vsphereVolume?: V1VsphereVirtualDiskVolumeSource;
}
