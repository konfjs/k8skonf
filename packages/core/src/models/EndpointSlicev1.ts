import { EndpointPortv1 } from './EndpointPortv1.js';
import { Endpointv1 } from './Endpointv1.js';
import { K8sApp } from '../K8sApp.js';
import { NamespacedObjectMetav1, NamespacedApiObject } from '../ApiObject.js';

export interface EndpointSlicev1Args {
  readonly addressType: string;
  readonly endpoints: Array<Endpointv1>;
  readonly metadata?: NamespacedObjectMetav1;
  readonly ports?: Array<EndpointPortv1>;
}

/**
 * EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints.
 */
export class EndpointSlicev1 extends NamespacedApiObject {
  /**
   * addressType specifies the type of address carried by this EndpointSlice. All addresses in this slice must be the same type. This field is immutable after creation. The following address types are currently supported: * IPv4: Represents an IPv4 Address. * IPv6: Represents an IPv6 Address. * FQDN: Represents a Fully Qualified Domain Name.
   */
  readonly addressType: string;
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'discovery.k8s.io/v1';
  /**
   * endpoints is a list of unique endpoints in this slice. Each slice may include a maximum of 1000 endpoints.
   */
  readonly endpoints: Array<Endpointv1>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'EndpointSlice';
  /**
   * Standard object\'s metadata.
   */
  readonly metadata: NamespacedObjectMetav1;
  /**
   * ports specifies the list of network ports exposed by each endpoint in this slice. Each port must have a unique name. When ports is empty, it indicates that there are no defined ports. When a port is defined with a nil port value, it indicates \"all ports\". Each slice may include a maximum of 100 ports.
   */
  readonly ports?: Array<EndpointPortv1>;

  constructor(app: K8sApp, name: string, args: EndpointSlicev1Args) {
    super();
    this.addressType = args.addressType;
    this.endpoints = args.endpoints;
    this.metadata = args.metadata || { name };
    this.ports = args.ports;
    app.resources.push(this);
  }
}
