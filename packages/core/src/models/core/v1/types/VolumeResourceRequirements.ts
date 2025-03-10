/**
 * VolumeResourceRequirements describes the storage resource requirements for a volume.
 */
export interface VolumeResourceRequirements {
  /**
   * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
   */
  limits?: { [key: string]: number | string };
  /**
   * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
   */
  requests?: { [key: string]: number | string };
}
