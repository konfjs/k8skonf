import { V1DeleteOptions } from './V1DeleteOptions.js';
import { K8sApp } from '../K8sApp.js';
import { V1NamespacedObjectMeta, NamespacedApiObject } from '../ApiObject.js';

export interface V1EvictionArgs {
  readonly deleteOptions?: V1DeleteOptions;
  readonly metadata?: V1NamespacedObjectMeta;
}

/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 */
export class V1Eviction extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'policy/v1';
  /**
   * DeleteOptions may be provided
   */
  readonly deleteOptions?: V1DeleteOptions;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'Eviction';
  /**
   * ObjectMeta describes the pod that is being evicted.
   */
  readonly metadata: V1NamespacedObjectMeta;

  constructor(app: K8sApp, name: string, args: V1EvictionArgs) {
    super();
    this.deleteOptions = args.deleteOptions;
    this.metadata = args.metadata || { name };
    app.resources.push(this);
  }
}
