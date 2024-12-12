import { V1ObjectMeta } from './V1ObjectMeta.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface V1alpha1StorageVersionArgs {
  readonly metadata?: V1ObjectMeta;
  readonly spec: any;
}

/**
 * Storage version of a specific resource.
 */
export class V1alpha1StorageVersion extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'internal.apiserver.k8s.io/v1alpha1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'StorageVersion';
  /**
   * The name is <group>.<resource>.
   */
  readonly metadata: V1ObjectMeta;
  /**
   * Spec is an empty spec. It is here to comply with Kubernetes API style.
   */
  readonly spec: any;

  constructor(app: K8sApp, name: string, args: V1alpha1StorageVersionArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
