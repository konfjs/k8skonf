import { V1beta1ExpressionWarning } from './V1beta1ExpressionWarning.js';

/**
 * TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
 */
export interface V1beta1TypeChecking {
  /**
   * The type checking warnings for each expression.
   */
  expressionWarnings?: Array<V1beta1ExpressionWarning>;
}
