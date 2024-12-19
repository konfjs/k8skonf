import { ResourceClaimTemplateSpecv1alpha3 } from './ResourceClaimTemplateSpecv1alpha3.js';
import { K8sApp } from '../K8sApp.js';
import { NamespacedObjectMetav1, NamespacedApiObject } from '../ApiObject.js';

export interface ResourceClaimTemplatev1alpha3Args {
  readonly metadata?: NamespacedObjectMetav1;
  readonly spec: ResourceClaimTemplateSpecv1alpha3;
}

/**
 * ResourceClaimTemplate is used to produce ResourceClaim objects.  This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export class ResourceClaimTemplatev1alpha3 extends NamespacedApiObject {
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
  readonly metadata: NamespacedObjectMetav1;
  /**
   * Describes the ResourceClaim that is to be generated.  This field is immutable. A ResourceClaim will get created by the control plane for a Pod when needed and then not get updated anymore.
   */
  readonly spec: ResourceClaimTemplateSpecv1alpha3;

  constructor(app: K8sApp, name: string, args: ResourceClaimTemplatev1alpha3Args) {
    super();
    this.metadata = args.metadata || { name };
    this.metadata.name ??= name;
    this.spec = args.spec;
    app.resources.push(this);
  }
}
