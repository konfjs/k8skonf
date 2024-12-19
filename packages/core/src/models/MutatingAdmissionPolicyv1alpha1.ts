import { MutatingAdmissionPolicySpecv1alpha1 } from './MutatingAdmissionPolicySpecv1alpha1.js';
import { ObjectMetav1 } from './ObjectMetav1.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface MutatingAdmissionPolicyv1alpha1Args {
  readonly metadata?: ObjectMetav1;
  readonly spec?: MutatingAdmissionPolicySpecv1alpha1;
}

/**
 * MutatingAdmissionPolicy describes the definition of an admission mutation policy that mutates the object coming into admission chain.
 */
export class MutatingAdmissionPolicyv1alpha1 extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'admissionregistration.k8s.io/v1alpha1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'MutatingAdmissionPolicy';
  /**
   * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
   */
  readonly metadata: ObjectMetav1;
  /**
   * Specification of the desired behavior of the MutatingAdmissionPolicy.
   */
  readonly spec?: MutatingAdmissionPolicySpecv1alpha1;

  constructor(app: K8sApp, name: string, args: MutatingAdmissionPolicyv1alpha1Args) {
    super();
    this.metadata = args.metadata || { name };
    this.metadata.name ??= name;
    this.spec = args.spec;
    app.resources.push(this);
  }
}
