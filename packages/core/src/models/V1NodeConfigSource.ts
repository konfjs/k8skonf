import { V1ConfigMapNodeConfigSource } from './V1ConfigMapNodeConfigSource.js';

/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
 */
export interface V1NodeConfigSource {
  /**
   * ConfigMap is a reference to a Node\'s ConfigMap
   */
  configMap?: V1ConfigMapNodeConfigSource;
}
