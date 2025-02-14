import { LimitRangeItem } from './LimitRangeItem.ts';

/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 */
export interface LimitRangeSpec {
  /**
   * Limits is the list of LimitRangeItem objects that are enforced.
   */
  limits: Array<LimitRangeItem>;
}
