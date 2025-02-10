import { K8sApp } from '@k8skonf/core';
import { ApiObject, ObjectMeta } from '@k8skonf/core';

/**
 * ClusterGenerator represents a cluster-wide generator which can be referenced as part of `generatorRef` fields.
 */
export interface ClusterGeneratorArgs {
  readonly metadata?: ObjectMeta;
  readonly spec?: {
    /**
     * Generator the spec for this generator, must match the kind.
     */
    generator: {
      /**
       * ACRAccessTokenSpec defines how to generate the access token
       * e.g. how to authenticate and which registry to use.
       * see: https://github.com/Azure/acr/blob/main/docs/AAD-OAuth.md#overview
       */
      acrAccessTokenSpec?: {
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
      ecrAuthorizationTokenSpec?: {
        /**
         * Auth defines how to authenticate with AWS
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
            /**
             * The SessionToken used for authentication
             * This must be defined if AccessKeyID and SecretAccessKey are temporary credentials
             * see: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html
             */
            sessionTokenSecretRef?: {
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
         * Region specifies the region to operate in.
         */
        region: string;
        /**
         * You can assume a role before making calls to the
         * desired AWS service.
         */
        role?: string;
        /**
         * Scope specifies the ECR service scope.
         * Valid options are private and public.
         */
        scope?: string;
      };
      /**
       * FakeSpec contains the static data.
       */
      fakeSpec?: {
        /**
         * Used to select the correct ESO controller (think: ingress.ingressClassName)
         * The ESO controller is instantiated with a specific controller name and filters VDS based on this property
         */
        controller?: string;
        /**
         * Data defines the static data returned
         * by this generator.
         */
        data?: {
          [k: string]: string;
        };
      };
      gcrAccessTokenSpec?: {
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
      githubAccessTokenSpec?: {
        appID: string;
        /**
         * Auth configures how ESO authenticates with a Github instance.
         */
        auth: {
          privateKey: {
            /**
             * A reference to a specific 'key' within a Secret resource.
             * In some instances, `key` is a required field.
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
        };
        installID: string;
        /**
         * Map of permissions the token will have. If omitted, defaults to all permissions the GitHub App has.
         */
        permissions?: {
          [k: string]: string;
        };
        /**
         * List of repositories the token will have access to. If omitted, defaults to all repositories the GitHub App
         * is installed to.
         */
        repositories?: string[];
        /**
         * URL configures the Github instance URL. Defaults to https://github.com/.
         */
        url?: string;
      };
      /**
       * PasswordSpec controls the behavior of the password generator.
       */
      passwordSpec?: {
        /**
         * set AllowRepeat to true to allow repeating characters.
         */
        allowRepeat: boolean;
        /**
         * Digits specifies the number of digits in the generated
         * password. If omitted it defaults to 25% of the length of the password
         */
        digits?: number;
        /**
         * Length of the password to be generated.
         * Defaults to 24
         */
        length: number;
        /**
         * Set NoUpper to disable uppercase characters
         */
        noUpper: boolean;
        /**
         * SymbolCharacters specifies the special characters that should be used
         * in the generated password.
         */
        symbolCharacters?: string;
        /**
         * Symbols specifies the number of symbol characters in the generated
         * password. If omitted it defaults to 25% of the length of the password
         */
        symbols?: number;
      };
      stsSessionTokenSpec?: {
        /**
         * Auth defines how to authenticate with AWS
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
            /**
             * The SessionToken used for authentication
             * This must be defined if AccessKeyID and SecretAccessKey are temporary credentials
             * see: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html
             */
            sessionTokenSecretRef?: {
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
         * Region specifies the region to operate in.
         */
        region: string;
        /**
         * RequestParameters contains parameters that can be passed to the STS service.
         */
        requestParameters?: {
          /**
           * SerialNumber is the identification number of the MFA device that is associated with the IAM user who is making
           * the GetSessionToken call.
           * Possible values: hardware device (such as GAHT12345678) or an Amazon Resource Name (ARN) for a virtual device
           * (such as arn:aws:iam::123456789012:mfa/user)
           */
          serialNumber?: string;
          /**
           * SessionDuration The duration, in seconds, that the credentials should remain valid. Acceptable durations for
           * IAM user sessions range from 900 seconds (15 minutes) to 129,600 seconds (36 hours), with 43,200 seconds
           * (12 hours) as the default.
           */
          sessionDuration?: number;
          /**
           * TokenCode is the value provided by the MFA device, if MFA is required.
           */
          tokenCode?: string;
        };
        /**
         * You can assume a role before making calls to the
         * desired AWS service.
         */
        role?: string;
      };
      /**
       * UUIDSpec controls the behavior of the uuid generator.
       */
      uuidSpec?: {};
      vaultDynamicSecretSpec?: {
        /**
         * Used to select the correct ESO controller (think: ingress.ingressClassName)
         * The ESO controller is instantiated with a specific controller name and filters VDS based on this property
         */
        controller?: string;
        /**
         * Vault API method to use (GET/POST/other)
         */
        method?: string;
        /**
         * Parameters to pass to Vault write (for non-GET methods)
         */
        parameters?: {
          [k: string]: unknown;
        };
        /**
         * Vault path to obtain the dynamic secret from
         */
        path: string;
        /**
         * Vault provider common spec
         */
        provider: {
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
              roleId?: string;
              /**
               * Reference to a key in a Secret that contains the App Role ID used
               * to authenticate with Vault.
               * The `key` field must be specified and denotes which entry within the Secret
               * resource is used as the app role id.
               */
              roleRef?: {
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
             * Iam authenticates with vault by passing a special AWS request signed with AWS IAM credentials
             * AWS IAM authentication method
             */
            iam?: {
              /**
               * AWS External ID set on assumed IAM roles
               */
              externalID?: string;
              /**
               * Specify a service account with IRSA enabled
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
               * Path where the AWS auth method is enabled in Vault, e.g: "aws"
               */
              path?: string;
              /**
               * AWS region
               */
              region?: string;
              /**
               * This is the AWS role to be assumed before talking to vault
               */
              role?: string;
              /**
               * Specify credentials in a Secret object
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
                /**
                 * The SessionToken used for authentication
                 * This must be defined if AccessKeyID and SecretAccessKey are temporary credentials
                 * see: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html
                 */
                sessionTokenSecretRef?: {
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
               * X-Vault-AWS-IAM-Server-ID is an additional header used by Vault IAM auth method to mitigate against different types of replay attacks. More details here: https://developer.hashicorp.com/vault/docs/auth/aws
               */
              vaultAwsIamServerID?: string;
              /**
               * Vault Role. In vault, a role describes an identity with a set of permissions, groups, or policies you want to attach a user of the secrets engine
               */
              vaultRole: string;
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
                 * Deprecated: use serviceAccountRef.Audiences instead
                 */
                audiences?: string[];
                /**
                 * Optional expiration time in seconds that will be used to request a temporary
                 * Kubernetes service account token for the service account referenced by
                 * `serviceAccountRef`.
                 * Deprecated: this will be removed in the future.
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
             * Name of the vault namespace to authenticate to. This can be different than the namespace your secret is in.
             * Namespaces is a set of features within Vault Enterprise that allows
             * Vault environments to support Secure Multi-tenancy. e.g: "ns1".
             * More about namespaces can be found here https://www.vaultproject.io/docs/enterprise/namespaces
             * This will default to Vault.Namespace field if set, or empty otherwise
             */
            namespace?: string;
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
            /**
             * UserPass authenticates with Vault by passing username/password pair
             */
            userPass?: {
              /**
               * Path where the UserPassword authentication backend is mounted
               * in Vault, e.g: "user"
               */
              path: string;
              /**
               * SecretRef to a key in a Secret resource containing password for the
               * user used to authenticate with Vault using the UserPass authentication
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
               * Username is a user name used to authenticate using the UserPass Vault
               * authentication method
               */
              username: string;
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
             * Can only be defined when used in a ClusterSecretStore.
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
           * Headers to be added in Vault request
           */
          headers?: {
            [k: string]: string;
          };
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
           * The configuration used for client side related TLS communication, when the Vault server
           * requires mutual authentication. Only used if the Server URL is using HTTPS protocol.
           * This parameter is ignored for plain HTTP protocol connection.
           * It's worth noting this configuration is different from the "TLS certificates auth method",
           * which is available under the `auth.cert` section.
           */
          tls?: {
            /**
             * CertSecretRef is a certificate added to the transport layer
             * when communicating with the Vault server.
             * If no key for the Secret is specified, external-secret will default to 'tls.crt'.
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
            /**
             * KeySecretRef to a key in a Secret resource containing client private key
             * added to the transport layer when communicating with the Vault server.
             * If no key for the Secret is specified, external-secret will default to 'tls.key'.
             */
            keySecretRef?: {
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
           * Version is the Vault KV secret engine version. This can be either "v1" or
           * "v2". Version defaults to "v2".
           */
          version?: 'v1' | 'v2';
        };
        /**
         * Result type defines which data is returned from the generator.
         * By default it is the "data" section of the Vault API response.
         * When using e.g. /auth/token/create the "data" section is empty but
         * the "auth" section contains the generated token.
         * Please refer to the vault docs regarding the result data structure.
         */
        resultType?: 'Data' | 'Auth';
        /**
         * Used to configure http retries if failed
         */
        retrySettings?: {
          maxRetries?: number;
          retryInterval?: string;
        };
      };
      /**
       * WebhookSpec controls the behavior of the external generator. Any body parameters should be passed to the server through the parameters field.
       */
      webhookSpec?: {
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
             * The key where the token is found.
             */
            key?: string;
            /**
             * The name of the Secret resource being referred to.
             */
            name?: string;
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
    };
    /**
     * Kind the kind of this generator.
     */
    kind:
      | 'ACRAccessToken'
      | 'ECRAuthorizationToken'
      | 'Fake'
      | 'GCRAccessToken'
      | 'GithubAccessToken'
      | 'Password'
      | 'STSSessionToken'
      | 'UUID'
      | 'VaultDynamicSecret'
      | 'Webhook';
  };
}

export class ClusterGenerator extends ApiObject {
  readonly apiVersion = 'generators.external-secrets.io/v1alpha1';
  readonly kind = 'ClusterGenerator';
  readonly metadata: ObjectMeta;
  readonly spec: ClusterGeneratorArgs['spec'];

  constructor(app: K8sApp, name: string, args: ClusterGeneratorArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
