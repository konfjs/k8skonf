import { V1ServiceBackendPort } from './V1ServiceBackendPort.js';

/**
 * IngressServiceBackend references a Kubernetes Service as a Backend.
 */
export interface V1IngressServiceBackend {
  /**
   * name is the referenced service. The service must exist in the same namespace as the Ingress object.
   */
  name: string;
  /**
   * port of the referenced service. A port name or port number is required for a IngressServiceBackend.
   */
  port?: V1ServiceBackendPort;
}
