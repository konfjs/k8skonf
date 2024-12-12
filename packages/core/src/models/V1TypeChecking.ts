import { V1ExpressionWarning } from './V1ExpressionWarning.js';

/**
 * TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
 */
export interface V1TypeChecking {
  /**
   * The type checking warnings for each expression.
   */
  expressionWarnings?: Array<V1ExpressionWarning>;
}
