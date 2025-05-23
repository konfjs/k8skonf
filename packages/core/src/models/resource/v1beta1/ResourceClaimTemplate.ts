import type { ResourceClaimTemplateSpec } from './types/ResourceClaimTemplateSpec.ts';
import type { K8sApp } from '../../../K8sApp.ts';
import { type NamespacedObjectMeta, NamespacedApiObject } from '../../../ApiObject.ts';

export interface ResourceClaimTemplateArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly spec: ResourceClaimTemplateSpec;
}

/**
 * ResourceClaimTemplate is used to produce ResourceClaim objects.  This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export class ResourceClaimTemplate extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'resource.k8s.io/v1beta1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ResourceClaimTemplate';
  /**
   * Standard object metadata
   */
  readonly metadata: NamespacedObjectMeta;
  /**
   * Describes the ResourceClaim that is to be generated.  This field is immutable. A ResourceClaim will get created by the control plane for a Pod when needed and then not get updated anymore.
   */
  readonly spec: ResourceClaimTemplateSpec;

  constructor(app: K8sApp, name: string, args: ResourceClaimTemplateArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
