import { ExpressionWarningv1alpha1 } from './ExpressionWarningv1alpha1.js';

/**
 * TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
 */
export interface TypeCheckingv1alpha1 {
  /**
   * The type checking warnings for each expression.
   */
  expressionWarnings?: Array<ExpressionWarningv1alpha1>;
}
