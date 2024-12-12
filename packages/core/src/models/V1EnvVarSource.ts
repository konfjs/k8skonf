import { V1ConfigMapKeySelector } from './V1ConfigMapKeySelector.js';
import { V1ObjectFieldSelector } from './V1ObjectFieldSelector.js';
import { V1ResourceFieldSelector } from './V1ResourceFieldSelector.js';
import { V1SecretKeySelector } from './V1SecretKeySelector.js';

/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
export interface V1EnvVarSource {
  /**
   * Selects a key of a ConfigMap.
   */
  configMapKeyRef?: V1ConfigMapKeySelector;
  /**
   * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels[\'<KEY>\']`, `metadata.annotations[\'<KEY>\']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
   */
  fieldRef?: V1ObjectFieldSelector;
  /**
   * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
   */
  resourceFieldRef?: V1ResourceFieldSelector;
  /**
   * Selects a key of a secret in the pod\'s namespace
   */
  secretKeyRef?: V1SecretKeySelector;
}
