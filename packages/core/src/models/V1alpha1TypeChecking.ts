import { V1alpha1ExpressionWarning } from './V1alpha1ExpressionWarning.js';

/**
 * TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
 */
export interface V1alpha1TypeChecking {
  /**
   * The type checking warnings for each expression.
   */
  expressionWarnings?: Array<V1alpha1ExpressionWarning>;
}
