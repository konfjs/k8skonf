import { V1beta3QueuingConfiguration } from './V1beta3QueuingConfiguration.js';

/**
 * LimitResponse defines how to handle requests that can not be executed right now.
 */
export interface V1beta3LimitResponse {
  /**
   * `queuing` holds the configuration parameters for queuing. This field may be non-empty only if `type` is `\"Queue\"`.
   */
  queuing?: V1beta3QueuingConfiguration;
  /**
   * `type` is \"Queue\" or \"Reject\". \"Queue\" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. \"Reject\" means that requests that can not be executed upon arrival are rejected. Required.
   */
  type: string;
}
