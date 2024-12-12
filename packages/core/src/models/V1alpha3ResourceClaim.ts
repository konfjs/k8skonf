import { V1alpha3ResourceClaimSpec } from './V1alpha3ResourceClaimSpec.js';
import { K8sApp } from '../K8sApp.js';
import { V1NamespacedObjectMeta, NamespacedApiObject } from '../ApiObject.js';

export interface V1alpha3ResourceClaimArgs {
  readonly metadata?: V1NamespacedObjectMeta;
  readonly spec: V1alpha3ResourceClaimSpec;
}

/**
 * ResourceClaim describes a request for access to resources in the cluster, for use by workloads. For example, if a workload needs an accelerator device with specific properties, this is how that request is expressed. The status stanza tracks whether this claim has been satisfied and what specific resources have been allocated.  This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export class V1alpha3ResourceClaim extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'resource.k8s.io/v1alpha3';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ResourceClaim';
  /**
   * Standard object metadata
   */
  readonly metadata: V1NamespacedObjectMeta;
  /**
   * Spec describes what is being requested and how to configure it. The spec is immutable.
   */
  readonly spec: V1alpha3ResourceClaimSpec;

  constructor(app: K8sApp, name: string, args: V1alpha3ResourceClaimArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
