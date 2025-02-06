/**
 * ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
 */
export interface ServerAddressByClientCIDR {
  /**
   * The CIDR with which clients can match their IP to figure out the server address that they should use.
   */
  clientCIDR: string;
  /**
   * Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port.
   */
  serverAddress: string;
}
