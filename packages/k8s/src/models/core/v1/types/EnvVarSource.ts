import type { ConfigMapKeySelector } from './ConfigMapKeySelector.ts';
import type { ObjectFieldSelector } from './ObjectFieldSelector.ts';
import type { ResourceFieldSelector } from './ResourceFieldSelector.ts';
import type { SecretKeySelector } from './SecretKeySelector.ts';

/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
export interface EnvVarSource {
  /**
   * Selects a key of a ConfigMap.
   */
  configMapKeyRef?: ConfigMapKeySelector;
  /**
   * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels[\'<KEY>\']`, `metadata.annotations[\'<KEY>\']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
   */
  fieldRef?: ObjectFieldSelector;
  /**
   * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
   */
  resourceFieldRef?: ResourceFieldSelector;
  /**
   * Selects a key of a secret in the pod\'s namespace
   */
  secretKeyRef?: SecretKeySelector;
}
