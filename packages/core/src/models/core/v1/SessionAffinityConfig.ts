import { ClientIPConfig } from './ClientIPConfig';

/**
 * SessionAffinityConfig represents the configurations of session affinity.
 */
export interface SessionAffinityConfig {
  /**
   * clientIP contains the configurations of Client IP based session affinity.
   */
  clientIP?: ClientIPConfig;
}
