import { ObjectReference } from '../core/v1/ObjectReference';
import { K8sApp } from '../../K8sApp';
import { NamespacedObjectMeta, NamespacedApiObject } from '../../ApiObject';

export interface BindingArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly target: ObjectReference;
}

/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler.
 */
export class Binding extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'Binding';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: NamespacedObjectMeta;
  /**
   * The target object that you want to bind to the standard object.
   */
  readonly target: ObjectReference;

  constructor(app: K8sApp, name: string, args: BindingArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.target = args.target;
    app.addResource(this);
  }
}
