import { ServiceBackendPortv1 } from './ServiceBackendPortv1.js';

/**
 * IngressServiceBackend references a Kubernetes Service as a Backend.
 */
export interface IngressServiceBackendv1 {
  /**
   * name is the referenced service. The service must exist in the same namespace as the Ingress object.
   */
  name: string;
  /**
   * port of the referenced service. A port name or port number is required for a IngressServiceBackend.
   */
  port?: ServiceBackendPortv1;
}
