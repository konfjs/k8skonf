import { MatchResources } from './MatchResources.ts';
import { ParamRef } from './ParamRef.ts';

/**
 * MutatingAdmissionPolicyBindingSpec is the specification of the MutatingAdmissionPolicyBinding.
 */
export interface MutatingAdmissionPolicyBindingSpec {
  /**
   * matchResources limits what resources match this binding and may be mutated by it. Note that if matchResources matches a resource, the resource must also match a policy\'s matchConstraints and matchConditions before the resource may be mutated. When matchResources is unset, it does not constrain resource matching, and only the policy\'s matchConstraints and matchConditions must match for the resource to be mutated. Additionally, matchResources.resourceRules are optional and do not constraint matching when unset. Note that this is differs from MutatingAdmissionPolicy matchConstraints, where resourceRules are required. The CREATE, UPDATE and CONNECT operations are allowed.  The DELETE operation may not be matched. \'*\' matches CREATE, UPDATE and CONNECT.
   */
  matchResources?: MatchResources;
  /**
   * paramRef specifies the parameter resource used to configure the admission control policy. It should point to a resource of the type specified in spec.ParamKind of the bound MutatingAdmissionPolicy. If the policy specifies a ParamKind and the resource referred to by ParamRef does not exist, this binding is considered mis-configured and the FailurePolicy of the MutatingAdmissionPolicy applied. If the policy does not specify a ParamKind then this field is ignored, and the rules are evaluated without a param.
   */
  paramRef?: ParamRef;
  /**
   * policyName references a MutatingAdmissionPolicy name which the MutatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.
   */
  policyName?: string;
}
