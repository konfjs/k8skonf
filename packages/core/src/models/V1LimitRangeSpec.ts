import { V1LimitRangeItem } from './V1LimitRangeItem.js';

/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 */
export interface V1LimitRangeSpec {
  /**
   * Limits is the list of LimitRangeItem objects that are enforced.
   */
  limits: Array<V1LimitRangeItem>;
}
