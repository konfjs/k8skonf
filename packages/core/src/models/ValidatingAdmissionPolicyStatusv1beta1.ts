import { Conditionv1 } from './Conditionv1.js';
import { TypeCheckingv1beta1 } from './TypeCheckingv1beta1.js';

/**
 * ValidatingAdmissionPolicyStatus represents the status of an admission validation policy.
 */
export interface ValidatingAdmissionPolicyStatusv1beta1 {
  /**
   * The conditions represent the latest available observations of a policy\'s current state.
   */
  conditions?: Array<Conditionv1>;
  /**
   * The generation observed by the controller.
   */
  observedGeneration?: number;
  /**
   * The results of type checking for each expression. Presence of this field indicates the completion of the type checking.
   */
  typeChecking?: TypeCheckingv1beta1;
}
