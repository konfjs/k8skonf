import type { K8sApp } from '@k8skonf/core';
import { NamespacedApiObject, type NamespacedObjectMeta } from '@k8skonf/core';

/**
 * GithubAccessToken generates ghs_ accessToken
 */
export interface GithubAccessTokenArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly spec?: {
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
}

export class GithubAccessToken extends NamespacedApiObject {
  readonly apiVersion = 'generators.external-secrets.io/v1alpha1';
  readonly kind = 'GithubAccessToken';
  readonly metadata: NamespacedObjectMeta;
  readonly spec: GithubAccessTokenArgs['spec'];

  constructor(app: K8sApp, name: string, args: GithubAccessTokenArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
