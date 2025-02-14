import type { K8sApp } from '@k8skonf/core';
import { NamespacedApiObject, type NamespacedObjectMeta } from '@k8skonf/core';

/**
 * GCRAccessToken generates an GCP access token
 * that can be used to authenticate with GCR.
 */
export interface GCRAccessTokenArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly spec?: {
    /**
     * Auth defines the means for authenticating with GCP
     */
    auth: {
      secretRef?: {
        /**
         * The SecretAccessKey is used for authentication
         */
        secretAccessKeySecretRef?: {
          /**
           * A key in the referenced Secret.
           * Some instances of this field may be defaulted, in others it may be required.
           */
          key?: string;
          /**
           * The name of the Secret resource being referred to.
           */
          name?: string;
          /**
           * The namespace of the Secret resource being referred to.
           * Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent.
           */
          namespace?: string;
        };
      };
      workloadIdentity?: {
        clusterLocation: string;
        clusterName: string;
        clusterProjectID?: string;
        /**
         * A reference to a ServiceAccount resource.
         */
        serviceAccountRef: {
          /**
           * Audience specifies the `aud` claim for the service account token
           * If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity
           * then this audiences will be appended to the list
           */
          audiences?: string[];
          /**
           * The name of the ServiceAccount resource being referred to.
           */
          name: string;
          /**
           * Namespace of the resource being referred to.
           * Ignored if referent is not cluster-scoped, otherwise defaults to the namespace of the referent.
           */
          namespace?: string;
        };
      };
    };
    /**
     * ProjectID defines which project to use to authenticate with
     */
    projectID: string;
  };
}

export class GCRAccessToken extends NamespacedApiObject {
  readonly apiVersion = 'generators.external-secrets.io/v1alpha1';
  readonly kind = 'GCRAccessToken';
  readonly metadata: NamespacedObjectMeta;
  readonly spec: GCRAccessTokenArgs['spec'];

  constructor(app: K8sApp, name: string, args: GCRAccessTokenArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
