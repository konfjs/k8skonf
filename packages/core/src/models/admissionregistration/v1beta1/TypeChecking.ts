import { ExpressionWarning } from './ExpressionWarning';

/**
 * TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
 */
export interface TypeChecking {
  /**
   * The type checking warnings for each expression.
   */
  expressionWarnings?: Array<ExpressionWarning>;
}
