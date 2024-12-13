import { LimitRangeItemv1 } from './LimitRangeItemv1.js';

/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 */
export interface LimitRangeSpecv1 {
  /**
   * Limits is the list of LimitRangeItem objects that are enforced.
   */
  limits: Array<LimitRangeItemv1>;
}
