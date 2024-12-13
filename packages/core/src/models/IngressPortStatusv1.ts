/**
 * IngressPortStatus represents the error condition of a service port
 */
export interface IngressPortStatusv1 {
  /**
   * error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use   CamelCase names - cloud provider specific error values must have names that comply with the   format foo.example.com/CamelCase.
   */
  error?: string;
  /**
   * port is the port number of the ingress port.
   */
  port: number;
  /**
   * protocol is the protocol of the ingress port. The supported values are: \"TCP\", \"UDP\", \"SCTP\"
   */
  protocol: string;
}
