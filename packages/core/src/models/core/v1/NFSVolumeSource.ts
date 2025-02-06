/**
 * Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
 */
export interface NFSVolumeSource {
  /**
   * path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  path: string;
  /**
   * readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  readOnly?: boolean;
  /**
   * server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  server: string;
}
