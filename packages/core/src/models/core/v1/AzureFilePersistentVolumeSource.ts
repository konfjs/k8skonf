/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export interface AzureFilePersistentVolumeSource {
  /**
   * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean;
  /**
   * secretName is the name of secret that contains Azure Storage Account Name and Key
   */
  secretName: string;
  /**
   * secretNamespace is the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod
   */
  secretNamespace?: string;
  /**
   * shareName is the azure Share Name
   */
  shareName: string;
}
