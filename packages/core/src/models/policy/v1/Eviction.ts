import { DeleteOptions } from '../../meta/v1/DeleteOptions';
import { K8sApp } from '../../../K8sApp';
import { NamespacedObjectMeta, NamespacedApiObject } from '../../../ApiObject';

export interface EvictionArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly deleteOptions?: DeleteOptions;
}

/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 */
export class Eviction extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'policy/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'Eviction';
  /**
   * ObjectMeta describes the pod that is being evicted.
   */
  readonly metadata: NamespacedObjectMeta;
  /**
   * DeleteOptions may be provided
   */
  readonly deleteOptions?: DeleteOptions;

  constructor(app: K8sApp, name: string, args: EvictionArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.deleteOptions = args.deleteOptions;
    app.addResource(this);
  }
}
