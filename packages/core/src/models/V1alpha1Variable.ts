/**
 * Variable is the definition of a variable that is used for composition.
 */
export interface V1alpha1Variable {
  /**
   * Expression is the expression that will be evaluated as the value of the variable. The CEL expression has access to the same identifiers as the CEL expressions in Validation.
   */
  expression: string;
  /**
   * Name is the name of the variable. The name must be a valid CEL identifier and unique among all variables. The variable can be accessed in other expressions through `variables` For example, if name is \"foo\", the variable will be available as `variables.foo`
   */
  name: string;
}
