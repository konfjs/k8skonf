import type { K8sApp } from '@k8skonf/core';
import { NamespacedApiObject, type NamespacedObjectMeta } from '@k8skonf/core';

/**
 * ACRAccessToken returns a Azure Container Registry token
 * that can be used for pushing/pulling images.
 * Note: by default it will return an ACR Refresh Token with full access
 * (depending on the identity).
 * This can be scoped down to the repository level using .spec.scope.
 * In case scope is defined it will return an ACR Access Token.
 *
 * See docs: https://github.com/Azure/acr/blob/main/docs/AAD-OAuth.md
 */
export interface ACRAccessTokenArgs {
  readonly metadata?: NamespacedObjectMeta;
  /**
   * ACRAccessTokenSpec defines how to generate the access token
   * e.g. how to authenticate and which registry to use.
   * see: https://github.com/Azure/acr/blob/main/docs/AAD-OAuth.md#overview
   */
  readonly spec?: {
    auth: {
      /**
       * ManagedIdentity uses Azure Managed Identity to authenticate with Azure.
       */
      managedIdentity?: {
        /**
         * If multiple Managed Identity is assigned to the pod, you can select the one to be used
         */
        identityId?: string;
      };
      /**
       * ServicePrincipal uses Azure Service Principal credentials to authenticate with Azure.
       */
      servicePrincipal?: {
        /**
         * Configuration used to authenticate with Azure using static
         * credentials stored in a Kind=Secret.
         */
        secretRef: {
          /**
           * The Azure clientId of the service principle used for authentication.
           */
          clientId?: {
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
          /**
           * The Azure ClientSecret of the service principle used for authentication.
           */
          clientSecret?: {
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
      };
      /**
       * WorkloadIdentity uses Azure Workload Identity to authenticate with Azure.
       */
      workloadIdentity?: {
        /**
         * ServiceAccountRef specified the service account
         * that should be used when authenticating with WorkloadIdentity.
         */
        serviceAccountRef?: {
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
     * EnvironmentType specifies the Azure cloud environment endpoints to use for
     * connecting and authenticating with Azure. By default it points to the public cloud AAD endpoint.
     * The following endpoints are available, also see here: https://github.com/Azure/go-autorest/blob/main/autorest/azure/environments.go#L152
     * PublicCloud, USGovernmentCloud, ChinaCloud, GermanCloud
     */
    environmentType?: 'PublicCloud' | 'USGovernmentCloud' | 'ChinaCloud' | 'GermanCloud';
    /**
     * the domain name of the ACR registry
     * e.g. foobarexample.azurecr.io
     */
    registry: string;
    /**
     * Define the scope for the access token, e.g. pull/push access for a repository.
     * if not provided it will return a refresh token that has full scope.
     * Note: you need to pin it down to the repository level, there is no wildcard available.
     *
     * examples:
     * repository:my-repository:pull,push
     * repository:my-repository:pull
     *
     * see docs for details: https://docs.docker.com/registry/spec/auth/scope/
     */
    scope?: string;
    /**
     * TenantID configures the Azure Tenant to send requests to. Required for ServicePrincipal auth type.
     */
    tenantId?: string;
  };
}

export class ACRAccessToken extends NamespacedApiObject {
  readonly apiVersion = 'generators.external-secrets.io/v1alpha1';
  readonly kind = 'ACRAccessToken';
  readonly metadata: NamespacedObjectMeta;
  readonly spec: ACRAccessTokenArgs['spec'];

  constructor(app: K8sApp, name: string, args: ACRAccessTokenArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
