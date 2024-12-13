import { ExpressionWarningv1beta1 } from './ExpressionWarningv1beta1.js';

/**
 * TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
 */
export interface TypeCheckingv1beta1 {
  /**
   * The type checking warnings for each expression.
   */
  expressionWarnings?: Array<ExpressionWarningv1beta1>;
}
