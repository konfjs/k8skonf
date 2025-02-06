import { ClusterTrustBundleProjection } from './ClusterTrustBundleProjection';
import { ConfigMapProjection } from './ConfigMapProjection';
import { DownwardAPIProjection } from './DownwardAPIProjection';
import { SecretProjection } from './SecretProjection';
import { ServiceAccountTokenProjection } from './ServiceAccountTokenProjection';

/**
 * Projection that may be projected along with other supported volume types. Exactly one of these fields must be set.
 */
export interface VolumeProjection {
  /**
   * ClusterTrustBundle allows a pod to access the `.spec.trustBundle` field of ClusterTrustBundle objects in an auto-updating file.  Alpha, gated by the ClusterTrustBundleProjection feature gate.  ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector.  Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem.  Esoteric PEM features such as inter-block comments and block headers are stripped.  Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
   */
  clusterTrustBundle?: ClusterTrustBundleProjection;
  /**
   * configMap information about the configMap data to project
   */
  configMap?: ConfigMapProjection;
  /**
   * downwardAPI information about the downwardAPI data to project
   */
  downwardAPI?: DownwardAPIProjection;
  /**
   * secret information about the secret data to project
   */
  secret?: SecretProjection;
  /**
   * serviceAccountToken is information about the serviceAccountToken data to project
   */
  serviceAccountToken?: ServiceAccountTokenProjection;
}
