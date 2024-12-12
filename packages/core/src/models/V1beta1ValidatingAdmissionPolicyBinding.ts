import { V1ObjectMeta } from './V1ObjectMeta.js';
import { V1beta1ValidatingAdmissionPolicyBindingSpec } from './V1beta1ValidatingAdmissionPolicyBindingSpec.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface V1beta1ValidatingAdmissionPolicyBindingArgs {
  readonly metadata?: V1ObjectMeta;
  readonly spec?: V1beta1ValidatingAdmissionPolicyBindingSpec;
}

/**
 * ValidatingAdmissionPolicyBinding binds the ValidatingAdmissionPolicy with paramerized resources. ValidatingAdmissionPolicyBinding and parameter CRDs together define how cluster administrators configure policies for clusters.  For a given admission request, each binding will cause its policy to be evaluated N times, where N is 1 for policies/bindings that don\'t use params, otherwise N is the number of parameters selected by the binding.  The CEL expressions of a policy must have a computed CEL cost below the maximum CEL budget. Each evaluation of the policy is given an independent CEL cost budget. Adding/removing policies, bindings, or params can not affect whether a given (policy, binding, param) combination is within its own CEL budget.
 */
export class V1beta1ValidatingAdmissionPolicyBinding extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'admissionregistration.k8s.io/v1beta1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ValidatingAdmissionPolicyBinding';
  /**
   * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
   */
  readonly metadata: V1ObjectMeta;
  /**
   * Specification of the desired behavior of the ValidatingAdmissionPolicyBinding.
   */
  readonly spec?: V1beta1ValidatingAdmissionPolicyBindingSpec;

  constructor(app: K8sApp, name: string, args: V1beta1ValidatingAdmissionPolicyBindingArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
