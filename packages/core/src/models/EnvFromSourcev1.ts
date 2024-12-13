import { ConfigMapEnvSourcev1 } from './ConfigMapEnvSourcev1.js';
import { SecretEnvSourcev1 } from './SecretEnvSourcev1.js';

/**
 * EnvFromSource represents the source of a set of ConfigMaps
 */
export interface EnvFromSourcev1 {
  /**
   * The ConfigMap to select from
   */
  configMapRef?: ConfigMapEnvSourcev1;
  /**
   * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
   */
  prefix?: string;
  /**
   * The Secret to select from
   */
  secretRef?: SecretEnvSourcev1;
}
