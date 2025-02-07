/**
 * PodDNSConfigOption defines DNS resolver options of a pod.
 */
export interface PodDNSConfigOption {
  /**
   * Name is this DNS resolver option\'s name. Required.
   */
  name?: string;
  /**
   * Value is this DNS resolver option\'s value.
   */
  value?: string;
}
