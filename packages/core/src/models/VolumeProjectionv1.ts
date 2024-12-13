import { ClusterTrustBundleProjectionv1 } from './ClusterTrustBundleProjectionv1.js';
import { ConfigMapProjectionv1 } from './ConfigMapProjectionv1.js';
import { DownwardAPIProjectionv1 } from './DownwardAPIProjectionv1.js';
import { SecretProjectionv1 } from './SecretProjectionv1.js';
import { ServiceAccountTokenProjectionv1 } from './ServiceAccountTokenProjectionv1.js';

/**
 * Projection that may be projected along with other supported volume types. Exactly one of these fields must be set.
 */
export interface VolumeProjectionv1 {
  /**
   * ClusterTrustBundle allows a pod to access the `.spec.trustBundle` field of ClusterTrustBundle objects in an auto-updating file.  Alpha, gated by the ClusterTrustBundleProjection feature gate.  ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector.  Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem.  Esoteric PEM features such as inter-block comments and block headers are stripped.  Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
   */
  clusterTrustBundle?: ClusterTrustBundleProjectionv1;
  /**
   * configMap information about the configMap data to project
   */
  configMap?: ConfigMapProjectionv1;
  /**
   * downwardAPI information about the downwardAPI data to project
   */
  downwardAPI?: DownwardAPIProjectionv1;
  /**
   * secret information about the secret data to project
   */
  secret?: SecretProjectionv1;
  /**
   * serviceAccountToken is information about the serviceAccountToken data to project
   */
  serviceAccountToken?: ServiceAccountTokenProjectionv1;
}
