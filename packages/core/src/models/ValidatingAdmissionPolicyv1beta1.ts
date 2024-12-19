import { ObjectMetav1 } from './ObjectMetav1.js';
import { ValidatingAdmissionPolicySpecv1beta1 } from './ValidatingAdmissionPolicySpecv1beta1.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface ValidatingAdmissionPolicyv1beta1Args {
  readonly metadata?: ObjectMetav1;
  readonly spec?: ValidatingAdmissionPolicySpecv1beta1;
}

/**
 * ValidatingAdmissionPolicy describes the definition of an admission validation policy that accepts or rejects an object without changing it.
 */
export class ValidatingAdmissionPolicyv1beta1 extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'admissionregistration.k8s.io/v1beta1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ValidatingAdmissionPolicy';
  /**
   * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
   */
  readonly metadata: ObjectMetav1;
  /**
   * Specification of the desired behavior of the ValidatingAdmissionPolicy.
   */
  readonly spec?: ValidatingAdmissionPolicySpecv1beta1;

  constructor(app: K8sApp, name: string, args: ValidatingAdmissionPolicyv1beta1Args) {
    super();
    this.metadata = args.metadata || { name };
    this.metadata.name ??= name;
    this.spec = args.spec;
    app.resources.push(this);
  }
}
