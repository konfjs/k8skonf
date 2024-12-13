import { NodeRuntimeHandlerFeaturesv1 } from './NodeRuntimeHandlerFeaturesv1.js';

/**
 * NodeRuntimeHandler is a set of runtime handler information.
 */
export interface NodeRuntimeHandlerv1 {
  /**
   * Supported features.
   */
  features?: NodeRuntimeHandlerFeaturesv1;
  /**
   * Runtime handler name. Empty for the default runtime handler.
   */
  name?: string;
}
