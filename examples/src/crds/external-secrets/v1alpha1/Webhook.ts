import type { K8sApp } from '@k8skonf/core';
import { NamespacedApiObject, type NamespacedObjectMeta } from '@k8skonf/core';

/**
 * Webhook connects to a third party API server to handle the secrets generation
 * configuration parameters in spec.
 * You can specify the server, the token, and additional body parameters.
 * See documentation for the full API specification for requests and responses.
 */
export interface WebhookArgs {
  readonly metadata?: NamespacedObjectMeta;
  /**
   * WebhookSpec controls the behavior of the external generator. Any body parameters should be passed to the server through the parameters field.
   */
  readonly spec?: {
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
}

export class Webhook extends NamespacedApiObject {
  readonly apiVersion = 'generators.external-secrets.io/v1alpha1';
  readonly kind = 'Webhook';
  readonly metadata: NamespacedObjectMeta;
  readonly spec: WebhookArgs['spec'];

  constructor(app: K8sApp, name: string, args: WebhookArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
