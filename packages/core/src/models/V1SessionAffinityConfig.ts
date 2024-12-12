import { V1ClientIPConfig } from './V1ClientIPConfig.js';

/**
 * SessionAffinityConfig represents the configurations of session affinity.
 */
export interface V1SessionAffinityConfig {
  /**
   * clientIP contains the configurations of Client IP based session affinity.
   */
  clientIP?: V1ClientIPConfig;
}
