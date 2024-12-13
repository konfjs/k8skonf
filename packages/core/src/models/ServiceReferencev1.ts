/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export interface ServiceReferencev1 {
  /**
   * `name` is the name of the service. Required
   */
  name: string;
  /**
   * `namespace` is the namespace of the service. Required
   */
  namespace: string;
  /**
   * `path` is an optional URL path which will be sent in any request to this service.
   */
  path?: string;
  /**
   * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
   */
  port?: number;
}
