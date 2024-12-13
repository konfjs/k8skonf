import { NonResourceRulev1 } from './NonResourceRulev1.js';
import { ResourceRulev1 } from './ResourceRulev1.js';

/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it\'s safe to assume the subject has that permission, even if that list is incomplete.
 */
export interface SubjectRulesReviewStatusv1 {
  /**
   * EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn\'t support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete.
   */
  evaluationError?: string;
  /**
   * Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn\'t support rules evaluation.
   */
  incomplete: boolean;
  /**
   * NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn\'t significant, may contain duplicates, and possibly be incomplete.
   */
  nonResourceRules: Array<NonResourceRulev1>;
  /**
   * ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn\'t significant, may contain duplicates, and possibly be incomplete.
   */
  resourceRules: Array<ResourceRulev1>;
}
