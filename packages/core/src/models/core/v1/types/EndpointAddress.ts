import { ObjectReference } from './ObjectReference.ts';

/**
 * EndpointAddress is a tuple that describes single IP address.
 */
export interface EndpointAddress {
  /**
   * The Hostname of this endpoint
   */
  hostname?: string;
  /**
   * The IP of this endpoint. May not be loopback (127.0.0.0/8 or ::1), link-local (169.254.0.0/16 or fe80::/10), or link-local multicast (224.0.0.0/24 or ff02::/16).
   */
  ip: string;
  /**
   * Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
   */
  nodeName?: string;
  /**
   * Reference to object providing the endpoint.
   */
  targetRef?: ObjectReference;
}
