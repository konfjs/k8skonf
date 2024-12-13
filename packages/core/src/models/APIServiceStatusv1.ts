import { APIServiceConditionv1 } from './APIServiceConditionv1.js';

/**
 * APIServiceStatus contains derived information about an API server
 */
export interface APIServiceStatusv1 {
  /**
   * Current service state of apiService.
   */
  conditions?: Array<APIServiceConditionv1>;
}
