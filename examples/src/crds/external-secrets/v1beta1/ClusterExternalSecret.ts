import { K8sApp } from '@k8skonf/core';
import { ApiObject, ObjectMeta } from '@k8skonf/core';

/**
 * ClusterExternalSecret is the Schema for the clusterexternalsecrets API.
 */
export interface ClusterExternalSecretArgs {
  readonly metadata?: ObjectMeta;
  /**
   * ClusterExternalSecretSpec defines the desired state of ClusterExternalSecret.
   */
  readonly spec?: {
    /**
     * The metadata of the external secrets to be created
     */
    externalSecretMetadata?: {
      annotations?: {
        [k: string]: string;
      };
      labels?: {
        [k: string]: string;
      };
    };
    /**
     * The name of the external secrets to be created.
     * Defaults to the name of the ClusterExternalSecret
     */
    externalSecretName?: string;
    /**
     * The spec for the ExternalSecrets to be created
     */
    externalSecretSpec: {
      /**
       * Data defines the connection between the Kubernetes Secret keys and the Provider data
       */
      data?: {
        /**
         * RemoteRef points to the remote secret and defines
         * which secret (version/property/..) to fetch.
         */
        remoteRef: {
          /**
           * Used to define a conversion Strategy
           */
          conversionStrategy?: 'Default' | 'Unicode';
          /**
           * Used to define a decoding Strategy
           */
          decodingStrategy?: 'Auto' | 'Base64' | 'Base64URL' | 'None';
          /**
           * Key is the key used in the Provider, mandatory
           */
          key: string;
          /**
           * Policy for fetching tags/labels from provider secrets, possible options are Fetch, None. Defaults to None
           */
          metadataPolicy?: 'None' | 'Fetch';
          /**
           * Used to select a specific property of the Provider value (if a map), if supported
           */
          property?: string;
          /**
           * Used to select a specific version of the Provider value, if supported
           */
          version?: string;
        };
        /**
         * The key in the Kubernetes Secret to store the value.
         */
        secretKey: string;
        /**
         * SourceRef allows you to override the source
         * from which the value will be pulled.
         */
        sourceRef?: {
          /**
           * GeneratorRef points to a generator custom resource.
           *
           * Deprecated: The generatorRef is not implemented in .data[].
           * this will be removed with v1.
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
           * SecretStoreRef defines which SecretStore to fetch the ExternalSecret data.
           */
          storeRef?: {
            /**
             * Kind of the SecretStore resource (SecretStore or ClusterSecretStore)
             * Defaults to `SecretStore`
             */
            kind?: 'SecretStore' | 'ClusterSecretStore';
            /**
             * Name of the SecretStore resource
             */
            name?: string;
          };
        };
      }[];
      /**
       * DataFrom is used to fetch all properties from a specific Provider data
       * If multiple entries are specified, the Secret keys are merged in the specified order
       */
      dataFrom?: {
        /**
         * Used to extract multiple key/value pairs from one secret
         * Note: Extract does not support sourceRef.Generator or sourceRef.GeneratorRef.
         */
        extract?: {
          /**
           * Used to define a conversion Strategy
           */
          conversionStrategy?: 'Default' | 'Unicode';
          /**
           * Used to define a decoding Strategy
           */
          decodingStrategy?: 'Auto' | 'Base64' | 'Base64URL' | 'None';
          /**
           * Key is the key used in the Provider, mandatory
           */
          key: string;
          /**
           * Policy for fetching tags/labels from provider secrets, possible options are Fetch, None. Defaults to None
           */
          metadataPolicy?: 'None' | 'Fetch';
          /**
           * Used to select a specific property of the Provider value (if a map), if supported
           */
          property?: string;
          /**
           * Used to select a specific version of the Provider value, if supported
           */
          version?: string;
        };
        /**
         * Used to find secrets based on tags or regular expressions
         * Note: Find does not support sourceRef.Generator or sourceRef.GeneratorRef.
         */
        find?: {
          /**
           * Used to define a conversion Strategy
           */
          conversionStrategy?: 'Default' | 'Unicode';
          /**
           * Used to define a decoding Strategy
           */
          decodingStrategy?: 'Auto' | 'Base64' | 'Base64URL' | 'None';
          /**
           * Finds secrets based on the name.
           */
          name?: {
            /**
             * Finds secrets base
             */
            regexp?: string;
          };
          /**
           * A root path to start the find operations.
           */
          path?: string;
          /**
           * Find secrets based on tags.
           */
          tags?: {
            [k: string]: string;
          };
        };
        /**
         * Used to rewrite secret Keys after getting them from the secret Provider
         * Multiple Rewrite operations can be provided. They are applied in a layered order (first to last)
         */
        rewrite?: {
          /**
           * Used to rewrite with regular expressions.
           * The resulting key will be the output of a regexp.ReplaceAll operation.
           */
          regexp?: {
            /**
             * Used to define the regular expression of a re.Compiler.
             */
            source: string;
            /**
             * Used to define the target pattern of a ReplaceAll operation.
             */
            target: string;
          };
          /**
           * Used to apply string transformation on the secrets.
           * The resulting key will be the output of the template applied by the operation.
           */
          transform?: {
            /**
             * Used to define the template to apply on the secret name.
             * `.value ` will specify the secret name in the template.
             */
            template: string;
          };
        }[];
        /**
         * SourceRef points to a store or generator
         * which contains secret values ready to use.
         * Use this in combination with Extract or Find pull values out of
         * a specific SecretStore.
         * When sourceRef points to a generator Extract or Find is not supported.
         * The generator returns a static map of values
         */
        sourceRef?: {
          /**
           * GeneratorRef points to a generator custom resource.
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
           * SecretStoreRef defines which SecretStore to fetch the ExternalSecret data.
           */
          storeRef?: {
            /**
             * Kind of the SecretStore resource (SecretStore or ClusterSecretStore)
             * Defaults to `SecretStore`
             */
            kind?: 'SecretStore' | 'ClusterSecretStore';
            /**
             * Name of the SecretStore resource
             */
            name?: string;
          };
        };
      }[];
      /**
       * RefreshInterval is the amount of time before the values are read again from the SecretStore provider,
       * specified as Golang Duration strings.
       * Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h"
       * Example values: "1h", "2h30m", "5d", "10s"
       * May be set to zero to fetch and create it once. Defaults to 1h.
       */
      refreshInterval?: string;
      /**
       * SecretStoreRef defines which SecretStore to fetch the ExternalSecret data.
       */
      secretStoreRef?: {
        /**
         * Kind of the SecretStore resource (SecretStore or ClusterSecretStore)
         * Defaults to `SecretStore`
         */
        kind?: 'SecretStore' | 'ClusterSecretStore';
        /**
         * Name of the SecretStore resource
         */
        name?: string;
      };
      /**
       * ExternalSecretTarget defines the Kubernetes Secret to be created
       * There can be only one target per ExternalSecret.
       */
      target?: {
        /**
         * CreationPolicy defines rules on how to create the resulting Secret.
         * Defaults to "Owner"
         */
        creationPolicy?: 'Owner' | 'Orphan' | 'Merge' | 'None';
        /**
         * DeletionPolicy defines rules on how to delete the resulting Secret.
         * Defaults to "Retain"
         */
        deletionPolicy?: 'Delete' | 'Merge' | 'Retain';
        /**
         * Immutable defines if the final secret will be immutable
         */
        immutable?: boolean;
        /**
         * The name of the Secret resource to be managed.
         * Defaults to the .metadata.name of the ExternalSecret resource
         */
        name?: string;
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
      };
    };
    /**
     * The labels to select by to find the Namespaces to create the ExternalSecrets in.
     * Deprecated: Use NamespaceSelectors instead.
     */
    namespaceSelector?: {
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
     * A list of labels to select by to find the Namespaces to create the ExternalSecrets in. The selectors are ORed.
     */
    namespaceSelectors?: {
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
    }[];
    /**
     * Choose namespaces by name. This field is ORed with anything that NamespaceSelectors ends up choosing.
     */
    namespaces?: string[];
    /**
     * The time in which the controller should reconcile its objects and recheck namespaces for labels.
     */
    refreshTime?: string;
  };
}

export class ClusterExternalSecret extends ApiObject {
  readonly apiVersion = 'external-secrets.io/v1beta1';
  readonly kind = 'ClusterExternalSecret';
  readonly metadata: ObjectMeta;
  readonly spec: ClusterExternalSecretArgs['spec'];

  constructor(app: K8sApp, name: string, args: ClusterExternalSecretArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
