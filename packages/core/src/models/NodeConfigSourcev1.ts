import { ConfigMapNodeConfigSourcev1 } from './ConfigMapNodeConfigSourcev1.js';

/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
 */
export interface NodeConfigSourcev1 {
  /**
   * ConfigMap is a reference to a Node\'s ConfigMap
   */
  configMap?: ConfigMapNodeConfigSourcev1;
}
