import { TypedLocalObjectReference } from '../../../core/v1/types/TypedLocalObjectReference';
import { IngressServiceBackend } from './IngressServiceBackend';

/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export interface IngressBackend {
  /**
   * resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, a service.Name and service.Port must not be specified. This is a mutually exclusive setting with \"Service\".
   */
  resource?: TypedLocalObjectReference;
  /**
   * service references a service as a backend. This is a mutually exclusive setting with \"Resource\".
   */
  service?: IngressServiceBackend;
}
