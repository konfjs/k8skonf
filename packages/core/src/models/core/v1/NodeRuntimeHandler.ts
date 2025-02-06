import { NodeRuntimeHandlerFeatures } from './NodeRuntimeHandlerFeatures';

/**
 * NodeRuntimeHandler is a set of runtime handler information.
 */
export interface NodeRuntimeHandler {
  /**
   * Supported features.
   */
  features?: NodeRuntimeHandlerFeatures;
  /**
   * Runtime handler name. Empty for the default runtime handler.
   */
  name?: string;
}
