import type { QueuingConfiguration } from './QueuingConfiguration.ts';

/**
 * LimitResponse defines how to handle requests that can not be executed right now.
 */
export interface LimitResponse {
  /**
   * `queuing` holds the configuration parameters for queuing. This field may be non-empty only if `type` is `\"Queue\"`.
   */
  queuing?: QueuingConfiguration;
  /**
   * `type` is \"Queue\" or \"Reject\". \"Queue\" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. \"Reject\" means that requests that can not be executed upon arrival are rejected. Required.
   */
  type: string;
}
