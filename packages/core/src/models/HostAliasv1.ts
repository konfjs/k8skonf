/**
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod\'s hosts file.
 */
export interface HostAliasv1 {
  /**
   * Hostnames for the above IP address.
   */
  hostnames?: Array<string>;
  /**
   * IP address of the host file entry.
   */
  ip: string;
}
