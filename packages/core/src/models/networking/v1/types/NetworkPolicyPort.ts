/**
 * NetworkPolicyPort describes a port to allow traffic on
 */
export interface NetworkPolicyPort {
  /**
   * endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
   */
  endPort?: number;
  /**
   * port represents the port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
   */
  port?: number | string;
  /**
   * protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
   */
  protocol?: string;
}
