import { V1ConfigMapEnvSource } from './V1ConfigMapEnvSource.js';
import { V1SecretEnvSource } from './V1SecretEnvSource.js';

/**
 * EnvFromSource represents the source of a set of ConfigMaps
 */
export interface V1EnvFromSource {
  /**
   * The ConfigMap to select from
   */
  configMapRef?: V1ConfigMapEnvSource;
  /**
   * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
   */
  prefix?: string;
  /**
   * The Secret to select from
   */
  secretRef?: V1SecretEnvSource;
}
