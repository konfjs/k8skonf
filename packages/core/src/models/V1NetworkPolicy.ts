import { V1NetworkPolicySpec } from './V1NetworkPolicySpec.js';
import { K8sApp } from '../K8sApp.js';
import { V1NamespacedObjectMeta, NamespacedApiObject } from '../ApiObject.js';

export interface V1NetworkPolicyArgs {
  readonly metadata?: V1NamespacedObjectMeta;
  readonly spec?: V1NetworkPolicySpec;
}

/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export class V1NetworkPolicy extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'networking.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'NetworkPolicy';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: V1NamespacedObjectMeta;
  /**
   * spec represents the specification of the desired behavior for this NetworkPolicy.
   */
  readonly spec?: V1NetworkPolicySpec;

  constructor(app: K8sApp, name: string, args: V1NetworkPolicyArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
