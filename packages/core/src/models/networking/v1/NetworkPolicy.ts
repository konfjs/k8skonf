import { NetworkPolicySpec } from './NetworkPolicySpec';
import { K8sApp } from '../../../K8sApp';
import { NamespacedObjectMeta, NamespacedApiObject } from '../../../ApiObject';

export interface NetworkPolicyArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly spec?: NetworkPolicySpec;
}

/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export class NetworkPolicy extends NamespacedApiObject {
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
  readonly metadata: NamespacedObjectMeta;
  /**
   * spec represents the specification of the desired behavior for this NetworkPolicy.
   */
  readonly spec?: NetworkPolicySpec;

  constructor(app: K8sApp, name: string, args: NetworkPolicyArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
