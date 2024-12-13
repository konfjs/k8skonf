import { ClientIPConfigv1 } from './ClientIPConfigv1.js';

/**
 * SessionAffinityConfig represents the configurations of session affinity.
 */
export interface SessionAffinityConfigv1 {
  /**
   * clientIP contains the configurations of Client IP based session affinity.
   */
  clientIP?: ClientIPConfigv1;
}
