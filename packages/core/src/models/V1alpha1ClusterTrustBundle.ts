import { V1ObjectMeta } from './V1ObjectMeta.js';
import { V1alpha1ClusterTrustBundleSpec } from './V1alpha1ClusterTrustBundleSpec.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface V1alpha1ClusterTrustBundleArgs {
  readonly metadata?: V1ObjectMeta;
  readonly spec: V1alpha1ClusterTrustBundleSpec;
}

/**
 * ClusterTrustBundle is a cluster-scoped container for X.509 trust anchors (root certificates).  ClusterTrustBundle objects are considered to be readable by any authenticated user in the cluster, because they can be mounted by pods using the `clusterTrustBundle` projection.  All service accounts have read access to ClusterTrustBundles by default.  Users who only have namespace-level access to a cluster can read ClusterTrustBundles by impersonating a serviceaccount that they have access to.  It can be optionally associated with a particular assigner, in which case it contains one valid set of trust anchors for that signer. Signers may have multiple associated ClusterTrustBundles; each is an independent set of trust anchors for that signer. Admission control is used to enforce that only users with permissions on the signer can create or modify the corresponding bundle.
 */
export class V1alpha1ClusterTrustBundle extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'certificates.k8s.io/v1alpha1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ClusterTrustBundle';
  /**
   * metadata contains the object metadata.
   */
  readonly metadata: V1ObjectMeta;
  /**
   * spec contains the signer (if any) and trust anchors.
   */
  readonly spec: V1alpha1ClusterTrustBundleSpec;

  constructor(app: K8sApp, name: string, args: V1alpha1ClusterTrustBundleArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
