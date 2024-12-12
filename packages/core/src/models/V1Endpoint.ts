import { V1EndpointConditions } from './V1EndpointConditions.js';
import { V1EndpointHints } from './V1EndpointHints.js';
import { V1ObjectReference } from './V1ObjectReference.js';

/**
 * Endpoint represents a single logical \"backend\" implementing a service.
 */
export interface V1Endpoint {
  /**
   * addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. Consumers must handle different types of addresses in the context of their own capabilities. This must contain at least one address but no more than 100. These are all assumed to be fungible and clients may choose to only use the first element. Refer to: https://issue.k8s.io/106267
   */
  addresses: Array<string>;
  /**
   * conditions contains information about the current status of the endpoint.
   */
  conditions?: V1EndpointConditions;
  /**
   * deprecatedTopology contains topology information part of the v1beta1 API. This field is deprecated, and will be removed when the v1beta1 API is removed (no sooner than kubernetes v1.24).  While this field can hold values, it is not writable through the v1 API, and any attempts to write to it will be silently ignored. Topology information can be found in the zone and nodeName fields instead.
   */
  deprecatedTopology?: { [key: string]: string };
  /**
   * hints contains information associated with how an endpoint should be consumed.
   */
  hints?: V1EndpointHints;
  /**
   * hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other (e.g. in DNS names). Multiple endpoints which use the same hostname should be considered fungible (e.g. multiple A values in DNS). Must be lowercase and pass DNS Label (RFC 1123) validation.
   */
  hostname?: string;
  /**
   * nodeName represents the name of the Node hosting this endpoint. This can be used to determine endpoints local to a Node.
   */
  nodeName?: string;
  /**
   * targetRef is a reference to a Kubernetes object that represents this endpoint.
   */
  targetRef?: V1ObjectReference;
  /**
   * zone is the name of the Zone this endpoint exists in.
   */
  zone?: string;
}
