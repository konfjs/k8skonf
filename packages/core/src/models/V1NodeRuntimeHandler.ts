import { V1NodeRuntimeHandlerFeatures } from './V1NodeRuntimeHandlerFeatures.js';

/**
 * NodeRuntimeHandler is a set of runtime handler information.
 */
export interface V1NodeRuntimeHandler {
  /**
   * Supported features.
   */
  features?: V1NodeRuntimeHandlerFeatures;
  /**
   * Runtime handler name. Empty for the default runtime handler.
   */
  name?: string;
}
