import { V1alpha3ResourceClaimTemplateSpec } from './V1alpha3ResourceClaimTemplateSpec.js';
import { K8sApp } from '../K8sApp.js';
import { V1NamespacedObjectMeta, NamespacedApiObject } from '../ApiObject.js';

export interface V1alpha3ResourceClaimTemplateArgs {
  readonly metadata?: V1NamespacedObjectMeta;
  readonly spec: V1alpha3ResourceClaimTemplateSpec;
}

/**
 * ResourceClaimTemplate is used to produce ResourceClaim objects.  This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export class V1alpha3ResourceClaimTemplate extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'resource.k8s.io/v1alpha3';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ResourceClaimTemplate';
  /**
   * Standard object metadata
   */
  readonly metadata: V1NamespacedObjectMeta;
  /**
   * Describes the ResourceClaim that is to be generated.  This field is immutable. A ResourceClaim will get created by the control plane for a Pod when needed and then not get updated anymore.
   */
  readonly spec: V1alpha3ResourceClaimTemplateSpec;

  constructor(app: K8sApp, name: string, args: V1alpha3ResourceClaimTemplateArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
