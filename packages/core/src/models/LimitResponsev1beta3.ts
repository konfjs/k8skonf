import { QueuingConfigurationv1beta3 } from './QueuingConfigurationv1beta3.js';

/**
 * LimitResponse defines how to handle requests that can not be executed right now.
 */
export interface LimitResponsev1beta3 {
  /**
   * `queuing` holds the configuration parameters for queuing. This field may be non-empty only if `type` is `\"Queue\"`.
   */
  queuing?: QueuingConfigurationv1beta3;
  /**
   * `type` is \"Queue\" or \"Reject\". \"Queue\" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. \"Reject\" means that requests that can not be executed upon arrival are rejected. Required.
   */
  type: string;
}
