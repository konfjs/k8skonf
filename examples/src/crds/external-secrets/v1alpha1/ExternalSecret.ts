import type { K8sApp } from '@k8skonf/core';
import { NamespacedApiObject, type NamespacedObjectMeta } from '@k8skonf/core';

/**
 * ExternalSecret is the Schema for the external-secrets API.
 */
export interface ExternalSecretArgs {
  readonly metadata?: NamespacedObjectMeta;
  /**
   * ExternalSecretSpec defines the desired state of ExternalSecret.
   */
  readonly spec?: {
    /**
     * Data defines the connection between the Kubernetes Secret keys and the Provider data
     */
    data?: {
      /**
       * ExternalSecretDataRemoteRef defines Provider data location.
       */
      remoteRef: {
        /**
         * Used to define a conversion Strategy
         */
        conversionStrategy?: 'Default' | 'Unicode';
        /**
         * Key is the key used in the Provider, mandatory
         */
        key: string;
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
    }[];
    /**
     * DataFrom is used to fetch all properties from a specific Provider data
     * If multiple entries are specified, the Secret keys are merged in the specified order
     */
    dataFrom?: {
      /**
       * Used to define a conversion Strategy
       */
      conversionStrategy?: 'Default' | 'Unicode';
      /**
       * Key is the key used in the Provider, mandatory
       */
      key: string;
      /**
       * Used to select a specific property of the Provider value (if a map), if supported
       */
      property?: string;
      /**
       * Used to select a specific version of the Provider value, if supported
       */
      version?: string;
    }[];
    /**
     * RefreshInterval is the amount of time before the values are read again from the SecretStore provider
     * Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h"
     * May be set to zero to fetch and create it once. Defaults to 1h.
     */
    refreshInterval?: string;
    /**
     * SecretStoreRef defines which SecretStore to fetch the ExternalSecret data.
     */
    secretStoreRef: {
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
    target: {
      /**
       * CreationPolicy defines rules on how to create the resulting Secret.
       * Defaults to "Owner"
       */
      creationPolicy?: 'Owner' | 'Merge' | 'None';
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
            }[];
            /**
             * The name of the ConfigMap/Secret resource
             */
            name: string;
          };
          secret?: {
            /**
             * A list of keys in the ConfigMap/Secret to use as templates for Secret data
             */
            items: {
              /**
               * A key in the ConfigMap/Secret
               */
              key: string;
            }[];
            /**
             * The name of the ConfigMap/Secret resource
             */
            name: string;
          };
        }[];
        type?: string;
      };
    };
  };
}

export class ExternalSecret extends NamespacedApiObject {
  readonly apiVersion = 'external-secrets.io/v1alpha1';
  readonly kind = 'ExternalSecret';
  readonly metadata: NamespacedObjectMeta;
  readonly spec: ExternalSecretArgs['spec'];

  constructor(app: K8sApp, name: string, args: ExternalSecretArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
