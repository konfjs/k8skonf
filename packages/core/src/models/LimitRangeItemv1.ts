/**
 * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
 */
export interface LimitRangeItemv1 {
  /**
   * Default resource requirement limit value by resource name if resource limit is omitted.
   */
  _default?: { [key: string]: number | string };
  /**
   * DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
   */
  defaultRequest?: { [key: string]: number | string };
  /**
   * Max usage constraints on this kind by resource name.
   */
  max?: { [key: string]: number | string };
  /**
   * MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
   */
  maxLimitRequestRatio?: { [key: string]: number | string };
  /**
   * Min usage constraints on this kind by resource name.
   */
  min?: { [key: string]: number | string };
  /**
   * Type of resource that this limit applies to.
   */
  type: string;
}
