import { LabelSelector } from '../../meta/v1/types/LabelSelector';

/**
 * ClusterTrustBundleProjection describes how to select a set of ClusterTrustBundle objects and project their contents into the pod filesystem.
 */
export interface ClusterTrustBundleProjection {
  /**
   * Select all ClusterTrustBundles that match this label selector.  Only has effect if signerName is set.  Mutually-exclusive with name.  If unset, interpreted as \"match nothing\".  If set but empty, interpreted as \"match everything\".
   */
  labelSelector?: LabelSelector;
  /**
   * Select a single ClusterTrustBundle by object name.  Mutually-exclusive with signerName and labelSelector.
   */
  name?: string;
  /**
   * If true, don\'t block pod startup if the referenced ClusterTrustBundle(s) aren\'t available.  If using name, then the named ClusterTrustBundle is allowed not to exist.  If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles.
   */
  optional?: boolean;
  /**
   * Relative path from the volume root to write the bundle.
   */
  path: string;
  /**
   * Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name.  The contents of all selected ClusterTrustBundles will be unified and deduplicated.
   */
  signerName?: string;
}
