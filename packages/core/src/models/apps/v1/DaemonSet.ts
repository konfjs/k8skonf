import { DaemonSetSpec } from './DaemonSetSpec';
import { K8sApp } from '../../../K8sApp';
import { NamespacedObjectMeta, NamespacedApiObject } from '../../../ApiObject';

export interface DaemonSetArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly spec?: DaemonSetSpec;
}

/**
 * DaemonSet represents the configuration of a daemon set.
 */
export class DaemonSet extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'apps/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'DaemonSet';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: NamespacedObjectMeta;
  /**
   * The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  readonly spec?: DaemonSetSpec;

  constructor(app: K8sApp, name: string, args: DaemonSetArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
