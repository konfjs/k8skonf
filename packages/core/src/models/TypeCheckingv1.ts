import { ExpressionWarningv1 } from './ExpressionWarningv1.js';

/**
 * TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
 */
export interface TypeCheckingv1 {
  /**
   * The type checking warnings for each expression.
   */
  expressionWarnings?: Array<ExpressionWarningv1>;
}
