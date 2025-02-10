import { K8sApp } from '@k8skonf/core';
import { ApiObject, ObjectMeta } from '@k8skonf/core';

/**
 * ClusterSecretStore represents a secure external location for storing secrets, which can be referenced as part of `storeRef` fields.
 */
export interface ClusterSecretStoreArgs {
  readonly metadata?: ObjectMeta;
  /**
   * SecretStoreSpec defines the desired state of SecretStore.
   */
  readonly spec?: {
    /**
     * Used to select the correct ESO controller (think: ingress.ingressClassName)
     * The ESO controller is instantiated with a specific controller name and filters ES based on this property
     */
    controller?: string;
    /**
     * Used to configure the provider. Only one provider may be set
     */
    provider: {
      /**
       * Akeyless configures this store to sync secrets using Akeyless Vault provider
       */
      akeyless?: {
        /**
         * Akeyless GW API Url from which the secrets to be fetched from.
         */
        akeylessGWApiURL: string;
        /**
         * Auth configures how the operator authenticates with Akeyless.
         */
        authSecretRef: {
          /**
           * Kubernetes authenticates with Akeyless by passing the ServiceAccount
           * token stored in the named Secret resource.
           */
          kubernetesAuth?: {
            /**
             * the Akeyless Kubernetes auth-method access-id
             */
            accessID: string;
            /**
             * Kubernetes-auth configuration name in Akeyless-Gateway
             */
            k8sConfName: string;
            /**
             * Optional secret field containing a Kubernetes ServiceAccount JWT used
             * for authenticating with Akeyless. If a name is specified without a key,
             * `token` is the default. If one is not specified, the one bound to
             * the controller will be used.
             */
            secretRef?: {
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
             * Optional service account field containing the name of a kubernetes ServiceAccount.
             * If the service account is specified, the service account secret token JWT will be used
             * for authenticating with Akeyless. If the service account selector is not supplied,
             * the secretRef will be used instead.
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
          /**
           * Reference to a Secret that contains the details
           * to authenticate with Akeyless.
           */
          secretRef?: {
            /**
             * The SecretAccessID is used for authentication
             */
            accessID?: {
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
             * A reference to a specific 'key' within a Secret resource.
             * In some instances, `key` is a required field.
             */
            accessType?: {
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
             * A reference to a specific 'key' within a Secret resource.
             * In some instances, `key` is a required field.
             */
            accessTypeParam?: {
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
         * PEM/base64 encoded CA bundle used to validate Akeyless Gateway certificate. Only used
         * if the AkeylessGWApiURL URL is using HTTPS protocol. If not set the system root certificates
         * are used to validate the TLS connection.
         */
        caBundle?: string;
        /**
         * The provider for the CA bundle to use to validate Akeyless Gateway certificate.
         */
        caProvider?: {
          /**
           * The key where the CA certificate can be found in the Secret or ConfigMap.
           */
          key?: string;
          /**
           * The name of the object located at the provider type.
           */
          name: string;
          /**
           * The namespace the Provider type is in.
           */
          namespace?: string;
          /**
           * The type of provider to use such as "Secret", or "ConfigMap".
           */
          type: 'Secret' | 'ConfigMap';
        };
      };
      /**
       * Alibaba configures this store to sync secrets using Alibaba Cloud provider
       */
      alibaba?: {
        /**
         * AlibabaAuth contains a secretRef for credentials.
         */
        auth: {
          /**
           * Authenticate against Alibaba using RRSA.
           */
          rrsa?: {
            oidcProviderArn: string;
            oidcTokenFilePath: string;
            roleArn: string;
            sessionName: string;
          };
          /**
           * AlibabaAuthSecretRef holds secret references for Alibaba credentials.
           */
          secretRef?: {
            /**
             * The AccessKeyID is used for authentication
             */
            accessKeyIDSecretRef: {
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
             * The AccessKeySecret is used for authentication
             */
            accessKeySecretSecretRef: {
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
         * Alibaba Region to be used for the provider
         */
        regionID: string;
      };
      /**
       * AWS configures this store to sync secrets using AWS Secret Manager provider
       */
      aws?: {
        /**
         * Auth defines the information necessary to authenticate against AWS
         * if not set aws sdk will infer credentials from your environment
         * see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
         */
        auth?: {
          /**
           * Authenticate against AWS using service account tokens.
           */
          jwt?: {
            /**
             * A reference to a ServiceAccount resource.
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
          /**
           * AWSAuthSecretRef holds secret references for AWS credentials
           * both AccessKeyID and SecretAccessKey must be defined in order to properly authenticate.
           */
          secretRef?: {
            /**
             * The AccessKeyID is used for authentication
             */
            accessKeyIDSecretRef?: {
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
        };
        /**
         * AWS Region to be used for the provider
         */
        region: string;
        /**
         * Role is a Role ARN which the SecretManager provider will assume
         */
        role?: string;
        /**
         * Service defines which service should be used to fetch the secrets
         */
        service: 'SecretsManager' | 'ParameterStore';
      };
      /**
       * AzureKV configures this store to sync secrets using Azure Key Vault provider
       */
      azurekv?: {
        /**
         * Auth configures how the operator authenticates with Azure. Required for ServicePrincipal auth type.
         */
        authSecretRef?: {
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
        /**
         * Auth type defines how to authenticate to the keyvault service.
         * Valid values are:
         * - "ServicePrincipal" (default): Using a service principal (tenantId, clientId, clientSecret)
         * - "ManagedIdentity": Using Managed Identity assigned to the pod (see aad-pod-identity)
         */
        authType?: 'ServicePrincipal' | 'ManagedIdentity' | 'WorkloadIdentity';
        /**
         * If multiple Managed Identity is assigned to the pod, you can select the one to be used
         */
        identityId?: string;
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
        /**
         * TenantID configures the Azure Tenant to send requests to. Required for ServicePrincipal auth type.
         */
        tenantId?: string;
        /**
         * Vault Url from which the secrets to be fetched from.
         */
        vaultUrl: string;
      };
      /**
       * Fake configures a store with static key/value pairs
       */
      fake?: {
        data: {
          key: string;
          value?: string;
          valueMap?: {
            [k: string]: string;
          };
          version?: string;
        }[];
      };
      /**
       * GCPSM configures this store to sync secrets using Google Cloud Platform Secret Manager provider
       */
      gcpsm?: {
        /**
         * Auth defines the information necessary to authenticate against GCP
         */
        auth?: {
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
         * ProjectID project where secret is located
         */
        projectID?: string;
      };
      /**
       * GitLab configures this store to sync secrets using GitLab Variables provider
       */
      gitlab?: {
        /**
         * Auth configures how secret-manager authenticates with a GitLab instance.
         */
        auth: {
          SecretRef: {
            /**
             * AccessToken is used for authentication.
             */
            accessToken?: {
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
         * ProjectID specifies a project where secrets are located.
         */
        projectID?: string;
        /**
         * URL configures the GitLab instance URL. Defaults to https://gitlab.com/.
         */
        url?: string;
      };
      /**
       * IBM configures this store to sync secrets using IBM Cloud provider
       */
      ibm?: {
        /**
         * Auth configures how secret-manager authenticates with the IBM secrets manager.
         */
        auth: {
          secretRef: {
            /**
             * The SecretAccessKey is used for authentication
             */
            secretApiKeySecretRef?: {
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
         * ServiceURL is the Endpoint URL that is specific to the Secrets Manager service instance
         */
        serviceUrl?: string;
      };
      /**
       * Kubernetes configures this store to sync secrets using a Kubernetes cluster provider
       */
      kubernetes?: {
        /**
         * Auth configures how secret-manager authenticates with a Kubernetes instance.
         */
        auth: {
          /**
           * has both clientCert and clientKey as secretKeySelector
           */
          cert?: {
            /**
             * A reference to a specific 'key' within a Secret resource.
             * In some instances, `key` is a required field.
             */
            clientCert?: {
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
             * A reference to a specific 'key' within a Secret resource.
             * In some instances, `key` is a required field.
             */
            clientKey?: {
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
          /**
           * points to a service account that should be used for authentication
           */
          serviceAccount?: {
            /**
             * A reference to a ServiceAccount resource.
             */
            serviceAccount?: {
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
          /**
           * use static token to authenticate with
           */
          token?: {
            /**
             * A reference to a specific 'key' within a Secret resource.
             * In some instances, `key` is a required field.
             */
            bearerToken?: {
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
         * Remote namespace to fetch the secrets from
         */
        remoteNamespace?: string;
        /**
         * configures the Kubernetes server Address.
         */
        server?: {
          /**
           * CABundle is a base64-encoded CA certificate
           */
          caBundle?: string;
          /**
           * see: https://external-secrets.io/v0.4.1/spec/#external-secrets.io/v1alpha1.CAProvider
           */
          caProvider?: {
            /**
             * The key where the CA certificate can be found in the Secret or ConfigMap.
             */
            key?: string;
            /**
             * The name of the object located at the provider type.
             */
            name: string;
            /**
             * The namespace the Provider type is in.
             */
            namespace?: string;
            /**
             * The type of provider to use such as "Secret", or "ConfigMap".
             */
            type: 'Secret' | 'ConfigMap';
          };
          /**
           * configures the Kubernetes server Address.
           */
          url?: string;
        };
      };
      /**
       * Oracle configures this store to sync secrets using Oracle Vault provider
       */
      oracle?: {
        /**
         * Auth configures how secret-manager authenticates with the Oracle Vault.
         * If empty, instance principal is used. Optionally, the authenticating principal type
         * and/or user data may be supplied for the use of workload identity and user principal.
         */
        auth?: {
          /**
           * SecretRef to pass through sensitive information.
           */
          secretRef: {
            /**
             * Fingerprint is the fingerprint of the API private key.
             */
            fingerprint: {
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
             * PrivateKey is the user's API Signing Key in PEM format, used for authentication.
             */
            privatekey: {
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
          /**
           * Tenancy is the tenancy OCID where user is located.
           */
          tenancy: string;
          /**
           * User is an access OCID specific to the account.
           */
          user: string;
        };
        /**
         * Compartment is the vault compartment OCID.
         * Required for PushSecret
         */
        compartment?: string;
        /**
         * EncryptionKey is the OCID of the encryption key within the vault.
         * Required for PushSecret
         */
        encryptionKey?: string;
        /**
         * The type of principal to use for authentication. If left blank, the Auth struct will
         * determine the principal type. This optional field must be specified if using
         * workload identity.
         */
        principalType?: '' | 'UserPrincipal' | 'InstancePrincipal' | 'Workload';
        /**
         * Region is the region where vault is located.
         */
        region: string;
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
        /**
         * Vault is the vault's OCID of the specific vault where secret is located.
         */
        vault: string;
      };
      /**
       * Configures a store to sync secrets with a Password Depot instance.
       */
      passworddepot?: {
        /**
         * Auth configures how secret-manager authenticates with a Password Depot instance.
         */
        auth: {
          secretRef: {
            /**
             * Username / Password is used for authentication.
             */
            credentials?: {
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
         * Database to use as source
         */
        database: string;
        /**
         * URL configures the Password Depot instance URL.
         */
        host: string;
      };
      /**
       * Vault configures this store to sync secrets using Hashi provider
       */
      vault?: {
        /**
         * Auth configures how secret-manager authenticates with the Vault server.
         */
        auth: {
          /**
           * AppRole authenticates with Vault using the App Role auth mechanism,
           * with the role and secret stored in a Kubernetes Secret resource.
           */
          appRole?: {
            /**
             * Path where the App Role authentication backend is mounted
             * in Vault, e.g: "approle"
             */
            path: string;
            /**
             * RoleID configured in the App Role authentication backend when setting
             * up the authentication backend in Vault.
             */
            roleId: string;
            /**
             * Reference to a key in a Secret that contains the App Role secret used
             * to authenticate with Vault.
             * The `key` field must be specified and denotes which entry within the Secret
             * resource is used as the app role secret.
             */
            secretRef: {
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
          /**
           * Cert authenticates with TLS Certificates by passing client certificate, private key and ca certificate
           * Cert authentication method
           */
          cert?: {
            /**
             * ClientCert is a certificate to authenticate using the Cert Vault
             * authentication method
             */
            clientCert?: {
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
             * SecretRef to a key in a Secret resource containing client private key to
             * authenticate with Vault using the Cert authentication method
             */
            secretRef?: {
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
          /**
           * Jwt authenticates with Vault by passing role and JWT token using the
           * JWT/OIDC authentication method
           */
          jwt?: {
            /**
             * Optional ServiceAccountToken specifies the Kubernetes service account for which to request
             * a token for with the `TokenRequest` API.
             */
            kubernetesServiceAccountToken?: {
              /**
               * Optional audiences field that will be used to request a temporary Kubernetes service
               * account token for the service account referenced by `serviceAccountRef`.
               * Defaults to a single audience `vault` it not specified.
               */
              audiences?: string[];
              /**
               * Optional expiration time in seconds that will be used to request a temporary
               * Kubernetes service account token for the service account referenced by
               * `serviceAccountRef`.
               * Defaults to 10 minutes.
               */
              expirationSeconds?: number;
              /**
               * Service account field containing the name of a kubernetes ServiceAccount.
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
            /**
             * Path where the JWT authentication backend is mounted
             * in Vault, e.g: "jwt"
             */
            path: string;
            /**
             * Role is a JWT role to authenticate using the JWT/OIDC Vault
             * authentication method
             */
            role?: string;
            /**
             * Optional SecretRef that refers to a key in a Secret resource containing JWT token to
             * authenticate with Vault using the JWT/OIDC authentication method.
             */
            secretRef?: {
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
          /**
           * Kubernetes authenticates with Vault by passing the ServiceAccount
           * token stored in the named Secret resource to the Vault server.
           */
          kubernetes?: {
            /**
             * Path where the Kubernetes authentication backend is mounted in Vault, e.g:
             * "kubernetes"
             */
            mountPath: string;
            /**
             * A required field containing the Vault Role to assume. A Role binds a
             * Kubernetes ServiceAccount with a set of Vault policies.
             */
            role: string;
            /**
             * Optional secret field containing a Kubernetes ServiceAccount JWT used
             * for authenticating with Vault. If a name is specified without a key,
             * `token` is the default. If one is not specified, the one bound to
             * the controller will be used.
             */
            secretRef?: {
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
             * Optional service account field containing the name of a kubernetes ServiceAccount.
             * If the service account is specified, the service account secret token JWT will be used
             * for authenticating with Vault. If the service account selector is not supplied,
             * the secretRef will be used instead.
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
          /**
           * Ldap authenticates with Vault by passing username/password pair using
           * the LDAP authentication method
           */
          ldap?: {
            /**
             * Path where the LDAP authentication backend is mounted
             * in Vault, e.g: "ldap"
             */
            path: string;
            /**
             * SecretRef to a key in a Secret resource containing password for the LDAP
             * user used to authenticate with Vault using the LDAP authentication
             * method
             */
            secretRef?: {
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
             * Username is a LDAP user name used to authenticate using the LDAP Vault
             * authentication method
             */
            username: string;
          };
          /**
           * TokenSecretRef authenticates with Vault by presenting a token.
           */
          tokenSecretRef?: {
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
        /**
         * PEM encoded CA bundle used to validate Vault server certificate. Only used
         * if the Server URL is using HTTPS protocol. This parameter is ignored for
         * plain HTTP protocol connection. If not set the system root certificates
         * are used to validate the TLS connection.
         */
        caBundle?: string;
        /**
         * The provider for the CA bundle to use to validate Vault server certificate.
         */
        caProvider?: {
          /**
           * The key where the CA certificate can be found in the Secret or ConfigMap.
           */
          key?: string;
          /**
           * The name of the object located at the provider type.
           */
          name: string;
          /**
           * The namespace the Provider type is in.
           */
          namespace?: string;
          /**
           * The type of provider to use such as "Secret", or "ConfigMap".
           */
          type: 'Secret' | 'ConfigMap';
        };
        /**
         * ForwardInconsistent tells Vault to forward read-after-write requests to the Vault
         * leader instead of simply retrying within a loop. This can increase performance if
         * the option is enabled serverside.
         * https://www.vaultproject.io/docs/configuration/replication#allow_forwarding_via_header
         */
        forwardInconsistent?: boolean;
        /**
         * Name of the vault namespace. Namespaces is a set of features within Vault Enterprise that allows
         * Vault environments to support Secure Multi-tenancy. e.g: "ns1".
         * More about namespaces can be found here https://www.vaultproject.io/docs/enterprise/namespaces
         */
        namespace?: string;
        /**
         * Path is the mount path of the Vault KV backend endpoint, e.g:
         * "secret". The v2 KV secret engine version specific "/data" path suffix
         * for fetching secrets from Vault is optional and will be appended
         * if not present in specified path.
         */
        path?: string;
        /**
         * ReadYourWrites ensures isolated read-after-write semantics by
         * providing discovered cluster replication states in each request.
         * More information about eventual consistency in Vault can be found here
         * https://www.vaultproject.io/docs/enterprise/consistency
         */
        readYourWrites?: boolean;
        /**
         * Server is the connection address for the Vault server, e.g: "https://vault.example.com:8200".
         */
        server: string;
        /**
         * Version is the Vault KV secret engine version. This can be either "v1" or
         * "v2". Version defaults to "v2".
         */
        version?: 'v1' | 'v2';
      };
      /**
       * Webhook configures this store to sync secrets using a generic templated webhook
       */
      webhook?: {
        /**
         * Body
         */
        body?: string;
        /**
         * PEM encoded CA bundle used to validate webhook server certificate. Only used
         * if the Server URL is using HTTPS protocol. This parameter is ignored for
         * plain HTTP protocol connection. If not set the system root certificates
         * are used to validate the TLS connection.
         */
        caBundle?: string;
        /**
         * The provider for the CA bundle to use to validate webhook server certificate.
         */
        caProvider?: {
          /**
           * The key where the CA certificate can be found in the Secret or ConfigMap.
           */
          key?: string;
          /**
           * The name of the object located at the provider type.
           */
          name: string;
          /**
           * The namespace the Provider type is in.
           */
          namespace?: string;
          /**
           * The type of provider to use such as "Secret", or "ConfigMap".
           */
          type: 'Secret' | 'ConfigMap';
        };
        /**
         * Headers
         */
        headers?: {
          [k: string]: string;
        };
        /**
         * Webhook Method
         */
        method?: string;
        /**
         * Result formatting
         */
        result: {
          /**
           * Json path of return value
           */
          jsonPath?: string;
        };
        /**
         * Secrets to fill in templates
         * These secrets will be passed to the templating function as key value pairs under the given name
         */
        secrets?: {
          /**
           * Name of this secret in templates
           */
          name: string;
          /**
           * Secret ref to fill in credentials
           */
          secretRef: {
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
        }[];
        /**
         * Timeout
         */
        timeout?: string;
        /**
         * Webhook url to call
         */
        url: string;
      };
      /**
       * YandexLockbox configures this store to sync secrets using Yandex Lockbox provider
       */
      yandexlockbox?: {
        /**
         * Yandex.Cloud API endpoint (e.g. 'api.cloud.yandex.net:443')
         */
        apiEndpoint?: string;
        /**
         * Auth defines the information necessary to authenticate against Yandex Lockbox
         */
        auth: {
          /**
           * The authorized key used for authentication
           */
          authorizedKeySecretRef?: {
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
        /**
         * The provider for the CA bundle to use to validate Yandex.Cloud server certificate.
         */
        caProvider?: {
          /**
           * A reference to a specific 'key' within a Secret resource.
           * In some instances, `key` is a required field.
           */
          certSecretRef?: {
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
    };
    /**
     * Used to configure http retries if failed
     */
    retrySettings?: {
      maxRetries?: number;
      retryInterval?: string;
    };
  };
}

export class ClusterSecretStore extends ApiObject {
  readonly apiVersion = 'external-secrets.io/v1alpha1';
  readonly kind = 'ClusterSecretStore';
  readonly metadata: ObjectMeta;
  readonly spec: ClusterSecretStoreArgs['spec'];

  constructor(app: K8sApp, name: string, args: ClusterSecretStoreArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
