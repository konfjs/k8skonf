import type { K8sApp } from '@k8skonf/core';
import { NamespacedApiObject, type NamespacedObjectMeta } from '@k8skonf/core';

/**
 * STSSessionToken uses the GetSessionToken API to retrieve an authorization token.
 * The authorization token is valid for 12 hours.
 * The authorizationToken returned is a base64 encoded string that can be decoded.
 * For more information, see GetSessionToken (https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html).
 */
export interface STSSessionTokenArgs {
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
}

export class STSSessionToken extends NamespacedApiObject {
  readonly apiVersion = 'generators.external-secrets.io/v1alpha1';
  readonly kind = 'STSSessionToken';
  readonly metadata: NamespacedObjectMeta;
  readonly spec: STSSessionTokenArgs['spec'];

  constructor(app: K8sApp, name: string, args: STSSessionTokenArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
