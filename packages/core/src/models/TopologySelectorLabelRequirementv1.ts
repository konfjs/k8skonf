/**
 * A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
 */
export interface TopologySelectorLabelRequirementv1 {
  /**
   * The label key that the selector applies to.
   */
  key: string;
  /**
   * An array of string values. One value must match the label to be selected. Each entry in Values is ORed.
   */
  values: Array<string>;
}
