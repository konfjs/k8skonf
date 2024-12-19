import { DeleteOptionsv1 } from './DeleteOptionsv1.js';
import { K8sApp } from '../K8sApp.js';
import { NamespacedObjectMetav1, NamespacedApiObject } from '../ApiObject.js';

export interface Evictionv1Args {
  readonly deleteOptions?: DeleteOptionsv1;
  readonly metadata?: NamespacedObjectMetav1;
}

/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 */
export class Evictionv1 extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'policy/v1';
  /**
   * DeleteOptions may be provided
   */
  readonly deleteOptions?: DeleteOptionsv1;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'Eviction';
  /**
   * ObjectMeta describes the pod that is being evicted.
   */
  readonly metadata: NamespacedObjectMetav1;

  constructor(app: K8sApp, name: string, args: Evictionv1Args) {
    super();
    this.deleteOptions = args.deleteOptions;
    this.metadata = args.metadata || { name };
    this.metadata.name ??= name;
    app.resources.push(this);
  }
}
