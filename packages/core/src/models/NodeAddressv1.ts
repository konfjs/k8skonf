/**
 * NodeAddress contains information for the node\'s address.
 */
export interface NodeAddressv1 {
  /**
   * The node address.
   */
  address: string;
  /**
   * Node address type, one of Hostname, ExternalIP or InternalIP.
   */
  type: string;
}
