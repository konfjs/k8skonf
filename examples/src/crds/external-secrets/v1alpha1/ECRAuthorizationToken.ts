import { K8sApp } from '@k8skonf/core';
import { NamespacedApiObject, NamespacedObjectMeta } from '@k8skonf/core';

/**
 * ECRAuthorizationTokenSpec uses the GetAuthorizationToken API to retrieve an
 * authorization token.
 * The authorization token is valid for 12 hours.
 * The authorizationToken returned is a base64 encoded string that can be decoded
 * and used in a docker login command to authenticate to a registry.
 * For more information, see Registry authentication (https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth) in the Amazon Elastic Container Registry User Guide.
 */
export interface ECRAuthorizationTokenArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly spec?: {
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
}

export class ECRAuthorizationToken extends NamespacedApiObject {
  readonly apiVersion = 'generators.external-secrets.io/v1alpha1';
  readonly kind = 'ECRAuthorizationToken';
  readonly metadata: NamespacedObjectMeta;
  readonly spec: ECRAuthorizationTokenArgs['spec'];

  constructor(app: K8sApp, name: string, args: ECRAuthorizationTokenArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
