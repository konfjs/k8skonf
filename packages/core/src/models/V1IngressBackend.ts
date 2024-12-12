import { V1IngressServiceBackend } from './V1IngressServiceBackend.js';
import { V1TypedLocalObjectReference } from './V1TypedLocalObjectReference.js';

/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export interface V1IngressBackend {
  /**
   * resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, a service.Name and service.Port must not be specified. This is a mutually exclusive setting with \"Service\".
   */
  resource?: V1TypedLocalObjectReference;
  /**
   * service references a service as a backend. This is a mutually exclusive setting with \"Resource\".
   */
  service?: V1IngressServiceBackend;
}
