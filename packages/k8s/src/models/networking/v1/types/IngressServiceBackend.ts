import type { ServiceBackendPort } from './ServiceBackendPort.ts';

/**
 * IngressServiceBackend references a Kubernetes Service as a Backend.
 */
export interface IngressServiceBackend {
  /**
   * name is the referenced service. The service must exist in the same namespace as the Ingress object.
   */
  name: string;
  /**
   * port of the referenced service. A port name or port number is required for a IngressServiceBackend.
   */
  port?: ServiceBackendPort;
}
