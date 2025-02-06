/**
 * FieldSelectorRequirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export interface FieldSelectorRequirement {
  /**
   * key is the field selector key that the requirement applies to.
   */
  key: string;
  /**
   * operator represents a key\'s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. The list of operators may grow in the future.
   */
  operator: string;
  /**
   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty.
   */
  values?: Array<string>;
}
