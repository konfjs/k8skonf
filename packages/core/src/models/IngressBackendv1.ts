import { IngressServiceBackendv1 } from './IngressServiceBackendv1.js';
import { TypedLocalObjectReferencev1 } from './TypedLocalObjectReferencev1.js';

/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export interface IngressBackendv1 {
  /**
   * resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, a service.Name and service.Port must not be specified. This is a mutually exclusive setting with \"Service\".
   */
  resource?: TypedLocalObjectReferencev1;
  /**
   * service references a service as a backend. This is a mutually exclusive setting with \"Resource\".
   */
  service?: IngressServiceBackendv1;
}
