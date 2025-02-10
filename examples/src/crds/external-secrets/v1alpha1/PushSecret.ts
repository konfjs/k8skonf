import { K8sApp } from '@k8skonf/core';
import { NamespacedApiObject, NamespacedObjectMeta } from '@k8skonf/core';

export interface PushSecretArgs {
  readonly metadata?: NamespacedObjectMeta;
  /**
   * PushSecretSpec configures the behavior of the PushSecret.
   */
  readonly spec?: {
    /**
     * Secret Data that should be pushed to providers
     */
    data?: {
      /**
       * Used to define a conversion Strategy for the secret keys
       */
      conversionStrategy?: 'None' | 'ReverseUnicode';
      /**
       * Match a given Secret Key to be pushed to the provider.
       */
      match: {
        /**
         * Remote Refs to push to providers.
         */
        remoteRef: {
          /**
           * Name of the property in the resulting secret
           */
          property?: string;
          /**
           * Name of the resulting provider secret.
           */
          remoteKey: string;
        };
        /**
         * Secret Key to be pushed
         */
        secretKey?: string;
      };
      /**
       * Metadata is metadata attached to the secret.
       * The structure of metadata is provider specific, please look it up in the provider documentation.
       */
      metadata?: {
        [k: string]: unknown;
      };
    }[];
    /**
     * Deletion Policy to handle Secrets in the provider.
     */
    deletionPolicy?: 'Delete' | 'None';
    /**
     * The Interval to which External Secrets will try to push a secret definition
     */
    refreshInterval?: string;
    secretStoreRefs: {
      /**
       * Kind of the SecretStore resource (SecretStore or ClusterSecretStore)
       */
      kind?: 'SecretStore' | 'ClusterSecretStore';
      /**
       * Optionally, sync to secret stores with label selector
       */
      labelSelector?: {
        /**
         * matchExpressions is a list of label selector requirements. The requirements are ANDed.
         */
        matchExpressions?: {
          /**
           * key is the label key that the selector applies to.
           */
          key: string;
          /**
           * operator represents a key's relationship to a set of values.
           * Valid operators are In, NotIn, Exists and DoesNotExist.
           */
          operator: string;
          /**
           * values is an array of string values. If the operator is In or NotIn,
           * the values array must be non-empty. If the operator is Exists or DoesNotExist,
           * the values array must be empty. This array is replaced during a strategic
           * merge patch.
           */
          values?: string[];
        }[];
        /**
         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
         * map is equivalent to an element of matchExpressions, whose key field is "key", the
         * operator is "In", and the values array contains only "value". The requirements are ANDed.
         */
        matchLabels?: {
          [k: string]: string;
        };
      };
      /**
       * Optionally, sync to the SecretStore of the given name
       */
      name?: string;
    }[];
    /**
     * The Secret Selector (k8s source) for the Push Secret
     */
    selector: {
      /**
       * Point to a generator to create a Secret.
       */
      generatorRef?: {
        /**
         * Specify the apiVersion of the generator resource
         */
        apiVersion?: string;
        /**
         * Specify the Kind of the generator resource
         */
        kind:
          | 'ACRAccessToken'
          | 'ClusterGenerator'
          | 'ECRAuthorizationToken'
          | 'Fake'
          | 'GCRAccessToken'
          | 'GithubAccessToken'
          | 'Password'
          | 'STSSessionToken'
          | 'UUID'
          | 'VaultDynamicSecret'
          | 'Webhook';
        /**
         * Specify the name of the generator resource
         */
        name: string;
      };
      /**
       * Select a Secret to Push.
       */
      secret?: {
        /**
         * Name of the Secret.
         * The Secret must exist in the same namespace as the PushSecret manifest.
         */
        name: string;
      };
    };
    /**
     * Template defines a blueprint for the created Secret resource.
     */
    template?: {
      data?: {
        [k: string]: string;
      };
      /**
       * EngineVersion specifies the template engine version
       * that should be used to compile/execute the
       * template specified in .data and .templateFrom[].
       */
      engineVersion?: 'v1' | 'v2';
      mergePolicy?: 'Replace' | 'Merge';
      /**
       * ExternalSecretTemplateMetadata defines metadata fields for the Secret blueprint.
       */
      metadata?: {
        annotations?: {
          [k: string]: string;
        };
        labels?: {
          [k: string]: string;
        };
      };
      templateFrom?: {
        configMap?: {
          /**
           * A list of keys in the ConfigMap/Secret to use as templates for Secret data
           */
          items: {
            /**
             * A key in the ConfigMap/Secret
             */
            key: string;
            templateAs?: 'Values' | 'KeysAndValues';
          }[];
          /**
           * The name of the ConfigMap/Secret resource
           */
          name: string;
        };
        literal?: string;
        secret?: {
          /**
           * A list of keys in the ConfigMap/Secret to use as templates for Secret data
           */
          items: {
            /**
             * A key in the ConfigMap/Secret
             */
            key: string;
            templateAs?: 'Values' | 'KeysAndValues';
          }[];
          /**
           * The name of the ConfigMap/Secret resource
           */
          name: string;
        };
        target?: 'Data' | 'Annotations' | 'Labels';
      }[];
      type?: string;
    };
    /**
     * UpdatePolicy to handle Secrets in the provider.
     */
    updatePolicy?: 'Replace' | 'IfNotExists';
  };
}

export class PushSecret extends NamespacedApiObject {
  readonly apiVersion = 'external-secrets.io/v1alpha1';
  readonly kind = 'PushSecret';
  readonly metadata: NamespacedObjectMeta;
  readonly spec: PushSecretArgs['spec'];

  constructor(app: K8sApp, name: string, args: PushSecretArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
