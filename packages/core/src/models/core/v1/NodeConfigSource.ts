import { ConfigMapNodeConfigSource } from './ConfigMapNodeConfigSource';

/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
 */
export interface NodeConfigSource {
  /**
   * ConfigMap is a reference to a Node\'s ConfigMap
   */
  configMap?: ConfigMapNodeConfigSource;
}
