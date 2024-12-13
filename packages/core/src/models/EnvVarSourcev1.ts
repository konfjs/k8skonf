import { ConfigMapKeySelectorv1 } from './ConfigMapKeySelectorv1.js';
import { ObjectFieldSelectorv1 } from './ObjectFieldSelectorv1.js';
import { ResourceFieldSelectorv1 } from './ResourceFieldSelectorv1.js';
import { SecretKeySelectorv1 } from './SecretKeySelectorv1.js';

/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
export interface EnvVarSourcev1 {
  /**
   * Selects a key of a ConfigMap.
   */
  configMapKeyRef?: ConfigMapKeySelectorv1;
  /**
   * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels[\'<KEY>\']`, `metadata.annotations[\'<KEY>\']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
   */
  fieldRef?: ObjectFieldSelectorv1;
  /**
   * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
   */
  resourceFieldRef?: ResourceFieldSelectorv1;
  /**
   * Selects a key of a secret in the pod\'s namespace
   */
  secretKeyRef?: SecretKeySelectorv1;
}
