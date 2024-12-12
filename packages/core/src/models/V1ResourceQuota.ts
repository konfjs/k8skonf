import { V1ResourceQuotaSpec } from './V1ResourceQuotaSpec.js';
import { K8sApp } from '../K8sApp.js';
import { V1NamespacedObjectMeta, NamespacedApiObject } from '../ApiObject.js';

export interface V1ResourceQuotaArgs {
  readonly metadata?: V1NamespacedObjectMeta;
  readonly spec?: V1ResourceQuotaSpec;
}

/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 */
export class V1ResourceQuota extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ResourceQuota';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: V1NamespacedObjectMeta;
  /**
   * Spec defines the desired quota. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  readonly spec?: V1ResourceQuotaSpec;

  constructor(app: K8sApp, name: string, args: V1ResourceQuotaArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
