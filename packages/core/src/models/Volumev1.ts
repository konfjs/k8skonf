import { CSIVolumeSourcev1 } from './CSIVolumeSourcev1.js';
import { ConfigMapVolumeSourcev1 } from './ConfigMapVolumeSourcev1.js';
import { DownwardAPIVolumeSourcev1 } from './DownwardAPIVolumeSourcev1.js';
import { EmptyDirVolumeSourcev1 } from './EmptyDirVolumeSourcev1.js';
import { EphemeralVolumeSourcev1 } from './EphemeralVolumeSourcev1.js';
import { FCVolumeSourcev1 } from './FCVolumeSourcev1.js';
import { HostPathVolumeSourcev1 } from './HostPathVolumeSourcev1.js';
import { ISCSIVolumeSourcev1 } from './ISCSIVolumeSourcev1.js';
import { ImageVolumeSourcev1 } from './ImageVolumeSourcev1.js';
import { NFSVolumeSourcev1 } from './NFSVolumeSourcev1.js';
import { PersistentVolumeClaimVolumeSourcev1 } from './PersistentVolumeClaimVolumeSourcev1.js';
import { ProjectedVolumeSourcev1 } from './ProjectedVolumeSourcev1.js';
import { SecretVolumeSourcev1 } from './SecretVolumeSourcev1.js';

/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 */
export interface Volumev1 {
  /**
   * configMap represents a configMap that should populate this volume
   */
  configMap?: ConfigMapVolumeSourcev1;
  /**
   * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers.
   */
  csi?: CSIVolumeSourcev1;
  /**
   * downwardAPI represents downward API about the pod that should populate this volume
   */
  downwardAPI?: DownwardAPIVolumeSourcev1;
  /**
   * emptyDir represents a temporary directory that shares a pod\'s lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
   */
  emptyDir?: EmptyDirVolumeSourcev1;
  /**
   * ephemeral represents a volume that is handled by a cluster storage driver. The volume\'s lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed.  Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity    tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through    a PersistentVolumeClaim (see EphemeralVolumeSource for more    information on the connection between this volume type    and PersistentVolumeClaim).  Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod.  Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information.  A pod can use both types of ephemeral volumes and persistent volumes at the same time.
   */
  ephemeral?: EphemeralVolumeSourcev1;
  /**
   * fc represents a Fibre Channel resource that is attached to a kubelet\'s host machine and then exposed to the pod.
   */
  fc?: FCVolumeSourcev1;
  /**
   * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   */
  hostPath?: HostPathVolumeSourcev1;
  /**
   * image represents an OCI object (a container image or artifact) pulled and mounted on the kubelet\'s host machine. The volume is resolved at pod startup depending on which PullPolicy value is provided:  - Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails. - Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn\'t present. - IfNotPresent: the kubelet pulls if the reference isn\'t already present on disk. Container creation will fail if the reference isn\'t present and the pull fails.  The volume gets re-resolved if the pod gets deleted and recreated, which means that new remote content will become available on pod recreation. A failure to resolve or pull the image during pod startup will block containers from starting and may add significant latency. Failures will be retried using normal volume backoff and will be reported on the pod reason and message. The types of objects that may be mounted by this volume are defined by the container runtime implementation on a host machine and at minimum must include all valid types supported by the container image field. The OCI object gets mounted in a single directory (spec.containers[*].volumeMounts.mountPath) by merging the manifest layers in the same way as for container images. The volume will be mounted read-only (ro) and non-executable files (noexec). Sub path mounts for containers are not supported (spec.containers[*].volumeMounts.subpath). The field spec.securityContext.fsGroupChangePolicy has no effect on this volume type.
   */
  image?: ImageVolumeSourcev1;
  /**
   * iscsi represents an ISCSI Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
   */
  iscsi?: ISCSIVolumeSourcev1;
  /**
   * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name: string;
  /**
   * nfs represents an NFS mount on the host that shares a pod\'s lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  nfs?: NFSVolumeSourcev1;
  /**
   * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   */
  persistentVolumeClaim?: PersistentVolumeClaimVolumeSourcev1;
  /**
   * projected items for all in one resources secrets, configmaps, and downward API
   */
  projected?: ProjectedVolumeSourcev1;
  /**
   * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
   */
  secret?: SecretVolumeSourcev1;
}
