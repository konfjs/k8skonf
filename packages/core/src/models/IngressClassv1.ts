import { IngressClassSpecv1 } from './IngressClassSpecv1.js';
import { ObjectMetav1 } from './ObjectMetav1.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface IngressClassv1Args {
  readonly metadata?: ObjectMetav1;
  readonly spec?: IngressClassSpecv1;
}

/**
 * IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class.
 */
export class IngressClassv1 extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'networking.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'IngressClass';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: ObjectMetav1;
  /**
   * spec is the desired state of the IngressClass. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  readonly spec?: IngressClassSpecv1;

  constructor(app: K8sApp, name: string, args: IngressClassv1Args) {
    super();
    this.metadata = args.metadata || { name };
    this.metadata.name ??= name;
    this.spec = args.spec;
    app.resources.push(this);
  }
}
