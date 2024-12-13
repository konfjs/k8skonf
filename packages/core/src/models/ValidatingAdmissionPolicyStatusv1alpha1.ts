import { Conditionv1 } from './Conditionv1.js';
import { TypeCheckingv1alpha1 } from './TypeCheckingv1alpha1.js';

/**
 * ValidatingAdmissionPolicyStatus represents the status of a ValidatingAdmissionPolicy.
 */
export interface ValidatingAdmissionPolicyStatusv1alpha1 {
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
  typeChecking?: TypeCheckingv1alpha1;
}
