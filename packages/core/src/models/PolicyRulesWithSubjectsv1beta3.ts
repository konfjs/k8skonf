import { NonResourcePolicyRulev1beta3 } from './NonResourcePolicyRulev1beta3.js';
import { ResourcePolicyRulev1beta3 } from './ResourcePolicyRulev1beta3.js';
import { Subjectv1beta3 } from './Subjectv1beta3.js';

/**
 * PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.
 */
export interface PolicyRulesWithSubjectsv1beta3 {
  /**
   * `nonResourceRules` is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL.
   */
  nonResourceRules?: Array<NonResourcePolicyRulev1beta3>;
  /**
   * `resourceRules` is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty.
   */
  resourceRules?: Array<ResourcePolicyRulev1beta3>;
  /**
   * subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.
   */
  subjects: Array<Subjectv1beta3>;
}
