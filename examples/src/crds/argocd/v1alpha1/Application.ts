import { K8sApp } from '@k8skonf/core';
import { NamespacedApiObject, NamespacedObjectMeta } from '@k8skonf/core';

/**
 * Application is a definition of Application resource.
 */
export interface ApplicationArgs {
  readonly metadata?: NamespacedObjectMeta;
  /**
   * Operation contains information about a requested or running operation
   */
  operation?: {
    /**
     * Info is a list of informational items for this operation
     */
    info?: {
      name: string;
      value: string;
    }[];
    /**
     * InitiatedBy contains information about who initiated the operations
     */
    initiatedBy?: {
      /**
       * Automated is set to true if operation was initiated automatically by the application controller.
       */
      automated?: boolean;
      /**
       * Username contains the name of a user who started operation
       */
      username?: string;
    };
    /**
     * Retry controls the strategy to apply if a sync fails
     */
    retry?: {
      /**
       * Backoff controls how to backoff on subsequent retries of failed syncs
       */
      backoff?: {
        /**
         * Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h")
         */
        duration?: string;
        /**
         * Factor is a factor to multiply the base duration after each failed retry
         */
        factor?: number;
        /**
         * MaxDuration is the maximum amount of time allowed for the backoff strategy
         */
        maxDuration?: string;
      };
      /**
       * Limit is the maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
       */
      limit?: number;
    };
    /**
     * Sync contains parameters for the operation
     */
    sync?: {
      /**
       * SelfHealAttemptsCount contains the number of auto-heal attempts
       */
      autoHealAttemptsCount?: number;
      /**
       * DryRun specifies to perform a `kubectl apply --dry-run` without actually performing the sync
       */
      dryRun?: boolean;
      /**
       * Manifests is an optional field that overrides sync source with a local directory for development
       */
      manifests?: string[];
      /**
       * Prune specifies to delete resources from the cluster that are no longer tracked in git
       */
      prune?: boolean;
      /**
       * Resources describes which resources shall be part of the sync
       */
      resources?: {
        group?: string;
        kind: string;
        name: string;
        namespace?: string;
      }[];
      /**
       * Revision is the revision (Git) or chart version (Helm) which to sync the application to
       * If omitted, will use the revision specified in app spec.
       */
      revision?: string;
      /**
       * Revisions is the list of revision (Git) or chart version (Helm) which to sync each source in sources field for the application to
       * If omitted, will use the revision specified in app spec.
       */
      revisions?: string[];
      /**
       * Source overrides the source definition set in the application.
       * This is typically set in a Rollback operation and is nil during a Sync operation
       */
      source?: {
        /**
         * Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo.
         */
        chart?: string;
        /**
         * Directory holds path/directory specific options
         */
        directory?: {
          /**
           * Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation
           */
          exclude?: string;
          /**
           * Include contains a glob pattern to match paths against that should be explicitly included during manifest generation
           */
          include?: string;
          /**
           * Jsonnet holds options specific to Jsonnet
           */
          jsonnet?: {
            /**
             * ExtVars is a list of Jsonnet External Variables
             */
            extVars?: {
              code?: boolean;
              name: string;
              value: string;
            }[];
            /**
             * Additional library search dirs
             */
            libs?: string[];
            /**
             * TLAS is a list of Jsonnet Top-level Arguments
             */
            tlas?: {
              code?: boolean;
              name: string;
              value: string;
            }[];
          };
          /**
           * Recurse specifies whether to scan a directory recursively for manifests
           */
          recurse?: boolean;
        };
        /**
         * Helm holds helm specific options
         */
        helm?: {
          /**
           * APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
           * Argo CD uses the API versions of the target cluster. The format is [group/]version/kind.
           */
          apiVersions?: string[];
          /**
           * FileParameters are file parameters to the helm template
           */
          fileParameters?: {
            /**
             * Name is the name of the Helm parameter
             */
            name?: string;
            /**
             * Path is the path to the file containing the values for the Helm parameter
             */
            path?: string;
          }[];
          /**
           * IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values
           */
          ignoreMissingValueFiles?: boolean;
          /**
           * KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
           * uses the Kubernetes version of the target cluster.
           */
          kubeVersion?: string;
          /**
           * Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace.
           */
          namespace?: string;
          /**
           * Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation
           */
          parameters?: {
            /**
             * ForceString determines whether to tell Helm to interpret booleans and numbers as strings
             */
            forceString?: boolean;
            /**
             * Name is the name of the Helm parameter
             */
            name?: string;
            /**
             * Value is the value for the Helm parameter
             */
            value?: string;
          }[];
          /**
           * PassCredentials pass credentials to all domains (Helm's --pass-credentials)
           */
          passCredentials?: boolean;
          /**
           * ReleaseName is the Helm release name to use. If omitted it will use the application name
           */
          releaseName?: string;
          /**
           * SkipCrds skips custom resource definition installation step (Helm's --skip-crds)
           */
          skipCrds?: boolean;
          /**
           * ValuesFiles is a list of Helm value files to use when generating a template
           */
          valueFiles?: string[];
          /**
           * Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other.
           */
          values?: string;
          /**
           * ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values.
           */
          valuesObject?: {};
          /**
           * Version is the Helm version to use for templating ("3")
           */
          version?: string;
        };
        /**
         * Kustomize holds kustomize specific options
         */
        kustomize?: {
          /**
           * APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
           * Argo CD uses the API versions of the target cluster. The format is [group/]version/kind.
           */
          apiVersions?: string[];
          /**
           * CommonAnnotations is a list of additional annotations to add to rendered manifests
           */
          commonAnnotations?: {
            [k: string]: string;
          };
          /**
           * CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values
           */
          commonAnnotationsEnvsubst?: boolean;
          /**
           * CommonLabels is a list of additional labels to add to rendered manifests
           */
          commonLabels?: {
            [k: string]: string;
          };
          /**
           * Components specifies a list of kustomize components to add to the kustomization before building
           */
          components?: string[];
          /**
           * ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps
           */
          forceCommonAnnotations?: boolean;
          /**
           * ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps
           */
          forceCommonLabels?: boolean;
          /**
           * Images is a list of Kustomize image override specifications
           */
          images?: string[];
          /**
           * KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
           * uses the Kubernetes version of the target cluster.
           */
          kubeVersion?: string;
          /**
           * LabelWithoutSelector specifies whether to apply common labels to resource selectors or not
           */
          labelWithoutSelector?: boolean;
          /**
           * NamePrefix is a prefix appended to resources for Kustomize apps
           */
          namePrefix?: string;
          /**
           * NameSuffix is a suffix appended to resources for Kustomize apps
           */
          nameSuffix?: string;
          /**
           * Namespace sets the namespace that Kustomize adds to all resources
           */
          namespace?: string;
          /**
           * Patches is a list of Kustomize patches
           */
          patches?: {
            options?: {
              [k: string]: boolean;
            };
            patch?: string;
            path?: string;
            target?: {
              annotationSelector?: string;
              group?: string;
              kind?: string;
              labelSelector?: string;
              name?: string;
              namespace?: string;
              version?: string;
            };
          }[];
          /**
           * Replicas is a list of Kustomize Replicas override specifications
           */
          replicas?: {
            /**
             * Number of replicas
             */
            count: number | string;
            /**
             * Name of Deployment or StatefulSet
             */
            name: string;
          }[];
          /**
           * Version controls which version of Kustomize to use for rendering manifests
           */
          version?: string;
        };
        /**
         * Path is a directory path within the Git repository, and is only valid for applications sourced from Git.
         */
        path?: string;
        /**
         * Plugin holds config management plugin specific options
         */
        plugin?: {
          /**
           * Env is a list of environment variable entries
           */
          env?: {
            /**
             * Name is the name of the variable, usually expressed in uppercase
             */
            name: string;
            /**
             * Value is the value of the variable
             */
            value: string;
          }[];
          name?: string;
          parameters?: {
            /**
             * Array is the value of an array type parameter.
             */
            array?: string[];
            /**
             * Map is the value of a map type parameter.
             */
            map?: {
              [k: string]: string;
            };
            /**
             * Name is the name identifying a parameter.
             */
            name?: string;
            /**
             * String_ is the value of a string type parameter.
             */
            string?: string;
          }[];
        };
        /**
         * Ref is reference to another source within sources field. This field will not be used if used with a `source` tag.
         */
        ref?: string;
        /**
         * RepoURL is the URL to the repository (Git or Helm) that contains the application manifests
         */
        repoURL: string;
        /**
         * TargetRevision defines the revision of the source to sync the application to.
         * In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
         * In case of Helm, this is a semver tag for the Chart's version.
         */
        targetRevision?: string;
      };
      /**
       * Sources overrides the source definition set in the application.
       * This is typically set in a Rollback operation and is nil during a Sync operation
       */
      sources?: {
        /**
         * Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo.
         */
        chart?: string;
        /**
         * Directory holds path/directory specific options
         */
        directory?: {
          /**
           * Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation
           */
          exclude?: string;
          /**
           * Include contains a glob pattern to match paths against that should be explicitly included during manifest generation
           */
          include?: string;
          /**
           * Jsonnet holds options specific to Jsonnet
           */
          jsonnet?: {
            /**
             * ExtVars is a list of Jsonnet External Variables
             */
            extVars?: {
              code?: boolean;
              name: string;
              value: string;
            }[];
            /**
             * Additional library search dirs
             */
            libs?: string[];
            /**
             * TLAS is a list of Jsonnet Top-level Arguments
             */
            tlas?: {
              code?: boolean;
              name: string;
              value: string;
            }[];
          };
          /**
           * Recurse specifies whether to scan a directory recursively for manifests
           */
          recurse?: boolean;
        };
        /**
         * Helm holds helm specific options
         */
        helm?: {
          /**
           * APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
           * Argo CD uses the API versions of the target cluster. The format is [group/]version/kind.
           */
          apiVersions?: string[];
          /**
           * FileParameters are file parameters to the helm template
           */
          fileParameters?: {
            /**
             * Name is the name of the Helm parameter
             */
            name?: string;
            /**
             * Path is the path to the file containing the values for the Helm parameter
             */
            path?: string;
          }[];
          /**
           * IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values
           */
          ignoreMissingValueFiles?: boolean;
          /**
           * KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
           * uses the Kubernetes version of the target cluster.
           */
          kubeVersion?: string;
          /**
           * Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace.
           */
          namespace?: string;
          /**
           * Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation
           */
          parameters?: {
            /**
             * ForceString determines whether to tell Helm to interpret booleans and numbers as strings
             */
            forceString?: boolean;
            /**
             * Name is the name of the Helm parameter
             */
            name?: string;
            /**
             * Value is the value for the Helm parameter
             */
            value?: string;
          }[];
          /**
           * PassCredentials pass credentials to all domains (Helm's --pass-credentials)
           */
          passCredentials?: boolean;
          /**
           * ReleaseName is the Helm release name to use. If omitted it will use the application name
           */
          releaseName?: string;
          /**
           * SkipCrds skips custom resource definition installation step (Helm's --skip-crds)
           */
          skipCrds?: boolean;
          /**
           * ValuesFiles is a list of Helm value files to use when generating a template
           */
          valueFiles?: string[];
          /**
           * Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other.
           */
          values?: string;
          /**
           * ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values.
           */
          valuesObject?: {};
          /**
           * Version is the Helm version to use for templating ("3")
           */
          version?: string;
        };
        /**
         * Kustomize holds kustomize specific options
         */
        kustomize?: {
          /**
           * APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
           * Argo CD uses the API versions of the target cluster. The format is [group/]version/kind.
           */
          apiVersions?: string[];
          /**
           * CommonAnnotations is a list of additional annotations to add to rendered manifests
           */
          commonAnnotations?: {
            [k: string]: string;
          };
          /**
           * CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values
           */
          commonAnnotationsEnvsubst?: boolean;
          /**
           * CommonLabels is a list of additional labels to add to rendered manifests
           */
          commonLabels?: {
            [k: string]: string;
          };
          /**
           * Components specifies a list of kustomize components to add to the kustomization before building
           */
          components?: string[];
          /**
           * ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps
           */
          forceCommonAnnotations?: boolean;
          /**
           * ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps
           */
          forceCommonLabels?: boolean;
          /**
           * Images is a list of Kustomize image override specifications
           */
          images?: string[];
          /**
           * KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
           * uses the Kubernetes version of the target cluster.
           */
          kubeVersion?: string;
          /**
           * LabelWithoutSelector specifies whether to apply common labels to resource selectors or not
           */
          labelWithoutSelector?: boolean;
          /**
           * NamePrefix is a prefix appended to resources for Kustomize apps
           */
          namePrefix?: string;
          /**
           * NameSuffix is a suffix appended to resources for Kustomize apps
           */
          nameSuffix?: string;
          /**
           * Namespace sets the namespace that Kustomize adds to all resources
           */
          namespace?: string;
          /**
           * Patches is a list of Kustomize patches
           */
          patches?: {
            options?: {
              [k: string]: boolean;
            };
            patch?: string;
            path?: string;
            target?: {
              annotationSelector?: string;
              group?: string;
              kind?: string;
              labelSelector?: string;
              name?: string;
              namespace?: string;
              version?: string;
            };
          }[];
          /**
           * Replicas is a list of Kustomize Replicas override specifications
           */
          replicas?: {
            /**
             * Number of replicas
             */
            count: number | string;
            /**
             * Name of Deployment or StatefulSet
             */
            name: string;
          }[];
          /**
           * Version controls which version of Kustomize to use for rendering manifests
           */
          version?: string;
        };
        /**
         * Path is a directory path within the Git repository, and is only valid for applications sourced from Git.
         */
        path?: string;
        /**
         * Plugin holds config management plugin specific options
         */
        plugin?: {
          /**
           * Env is a list of environment variable entries
           */
          env?: {
            /**
             * Name is the name of the variable, usually expressed in uppercase
             */
            name: string;
            /**
             * Value is the value of the variable
             */
            value: string;
          }[];
          name?: string;
          parameters?: {
            /**
             * Array is the value of an array type parameter.
             */
            array?: string[];
            /**
             * Map is the value of a map type parameter.
             */
            map?: {
              [k: string]: string;
            };
            /**
             * Name is the name identifying a parameter.
             */
            name?: string;
            /**
             * String_ is the value of a string type parameter.
             */
            string?: string;
          }[];
        };
        /**
         * Ref is reference to another source within sources field. This field will not be used if used with a `source` tag.
         */
        ref?: string;
        /**
         * RepoURL is the URL to the repository (Git or Helm) that contains the application manifests
         */
        repoURL: string;
        /**
         * TargetRevision defines the revision of the source to sync the application to.
         * In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
         * In case of Helm, this is a semver tag for the Chart's version.
         */
        targetRevision?: string;
      }[];
      /**
       * SyncOptions provide per-sync sync-options, e.g. Validate=false
       */
      syncOptions?: string[];
      /**
       * SyncStrategy describes how to perform the sync
       */
      syncStrategy?: {
        /**
         * Apply will perform a `kubectl apply` to perform the sync.
         */
        apply?: {
          /**
           * Force indicates whether or not to supply the --force flag to `kubectl apply`.
           * The --force flag deletes and re-create the resource, when PATCH encounters conflict and has
           * retried for 5 times.
           */
          force?: boolean;
        };
        /**
         * Hook will submit any referenced resources to perform the sync. This is the default strategy
         */
        hook?: {
          /**
           * Force indicates whether or not to supply the --force flag to `kubectl apply`.
           * The --force flag deletes and re-create the resource, when PATCH encounters conflict and has
           * retried for 5 times.
           */
          force?: boolean;
        };
      };
    };
  };
  /**
   * ApplicationSpec represents desired application state. Contains link to repository with application definition and additional parameters link definition revision.
   */
  readonly spec: {
    /**
     * Destination is a reference to the target Kubernetes server and namespace
     */
    destination: {
      /**
       * Name is an alternate way of specifying the target cluster by its symbolic name. This must be set if Server is not set.
       */
      name?: string;
      /**
       * Namespace specifies the target namespace for the application's resources.
       * The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace
       */
      namespace?: string;
      /**
       * Server specifies the URL of the target cluster's Kubernetes control plane API. This must be set if Name is not set.
       */
      server?: string;
    };
    /**
     * IgnoreDifferences is a list of resources and their fields which should be ignored during comparison
     */
    ignoreDifferences?: {
      group?: string;
      jqPathExpressions?: string[];
      jsonPointers?: string[];
      kind: string;
      /**
       * ManagedFieldsManagers is a list of trusted managers. Fields mutated by those managers will take precedence over the
       * desired state defined in the SCM and won't be displayed in diffs
       */
      managedFieldsManagers?: string[];
      name?: string;
      namespace?: string;
    }[];
    /**
     * Info contains a list of information (URLs, email addresses, and plain text) that relates to the application
     */
    info?: {
      name: string;
      value: string;
    }[];
    /**
     * Project is a reference to the project this application belongs to.
     * The empty string means that application belongs to the 'default' project.
     */
    project: string;
    /**
     * RevisionHistoryLimit limits the number of items kept in the application's revision history, which is used for informational purposes as well as for rollbacks to previous versions.
     * This should only be changed in exceptional circumstances.
     * Setting to zero will store no history. This will reduce storage used.
     * Increasing will increase the space used to store the history, so we do not recommend increasing it.
     * Default is 10.
     */
    revisionHistoryLimit?: number;
    /**
     * Source is a reference to the location of the application's manifests or chart
     */
    source?: {
      /**
       * Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo.
       */
      chart?: string;
      /**
       * Directory holds path/directory specific options
       */
      directory?: {
        /**
         * Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation
         */
        exclude?: string;
        /**
         * Include contains a glob pattern to match paths against that should be explicitly included during manifest generation
         */
        include?: string;
        /**
         * Jsonnet holds options specific to Jsonnet
         */
        jsonnet?: {
          /**
           * ExtVars is a list of Jsonnet External Variables
           */
          extVars?: {
            code?: boolean;
            name: string;
            value: string;
          }[];
          /**
           * Additional library search dirs
           */
          libs?: string[];
          /**
           * TLAS is a list of Jsonnet Top-level Arguments
           */
          tlas?: {
            code?: boolean;
            name: string;
            value: string;
          }[];
        };
        /**
         * Recurse specifies whether to scan a directory recursively for manifests
         */
        recurse?: boolean;
      };
      /**
       * Helm holds helm specific options
       */
      helm?: {
        /**
         * APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
         * Argo CD uses the API versions of the target cluster. The format is [group/]version/kind.
         */
        apiVersions?: string[];
        /**
         * FileParameters are file parameters to the helm template
         */
        fileParameters?: {
          /**
           * Name is the name of the Helm parameter
           */
          name?: string;
          /**
           * Path is the path to the file containing the values for the Helm parameter
           */
          path?: string;
        }[];
        /**
         * IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values
         */
        ignoreMissingValueFiles?: boolean;
        /**
         * KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
         * uses the Kubernetes version of the target cluster.
         */
        kubeVersion?: string;
        /**
         * Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace.
         */
        namespace?: string;
        /**
         * Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation
         */
        parameters?: {
          /**
           * ForceString determines whether to tell Helm to interpret booleans and numbers as strings
           */
          forceString?: boolean;
          /**
           * Name is the name of the Helm parameter
           */
          name?: string;
          /**
           * Value is the value for the Helm parameter
           */
          value?: string;
        }[];
        /**
         * PassCredentials pass credentials to all domains (Helm's --pass-credentials)
         */
        passCredentials?: boolean;
        /**
         * ReleaseName is the Helm release name to use. If omitted it will use the application name
         */
        releaseName?: string;
        /**
         * SkipCrds skips custom resource definition installation step (Helm's --skip-crds)
         */
        skipCrds?: boolean;
        /**
         * ValuesFiles is a list of Helm value files to use when generating a template
         */
        valueFiles?: string[];
        /**
         * Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other.
         */
        values?: string;
        /**
         * ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values.
         */
        valuesObject?: {};
        /**
         * Version is the Helm version to use for templating ("3")
         */
        version?: string;
      };
      /**
       * Kustomize holds kustomize specific options
       */
      kustomize?: {
        /**
         * APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
         * Argo CD uses the API versions of the target cluster. The format is [group/]version/kind.
         */
        apiVersions?: string[];
        /**
         * CommonAnnotations is a list of additional annotations to add to rendered manifests
         */
        commonAnnotations?: {
          [k: string]: string;
        };
        /**
         * CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values
         */
        commonAnnotationsEnvsubst?: boolean;
        /**
         * CommonLabels is a list of additional labels to add to rendered manifests
         */
        commonLabels?: {
          [k: string]: string;
        };
        /**
         * Components specifies a list of kustomize components to add to the kustomization before building
         */
        components?: string[];
        /**
         * ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps
         */
        forceCommonAnnotations?: boolean;
        /**
         * ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps
         */
        forceCommonLabels?: boolean;
        /**
         * Images is a list of Kustomize image override specifications
         */
        images?: string[];
        /**
         * KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
         * uses the Kubernetes version of the target cluster.
         */
        kubeVersion?: string;
        /**
         * LabelWithoutSelector specifies whether to apply common labels to resource selectors or not
         */
        labelWithoutSelector?: boolean;
        /**
         * NamePrefix is a prefix appended to resources for Kustomize apps
         */
        namePrefix?: string;
        /**
         * NameSuffix is a suffix appended to resources for Kustomize apps
         */
        nameSuffix?: string;
        /**
         * Namespace sets the namespace that Kustomize adds to all resources
         */
        namespace?: string;
        /**
         * Patches is a list of Kustomize patches
         */
        patches?: {
          options?: {
            [k: string]: boolean;
          };
          patch?: string;
          path?: string;
          target?: {
            annotationSelector?: string;
            group?: string;
            kind?: string;
            labelSelector?: string;
            name?: string;
            namespace?: string;
            version?: string;
          };
        }[];
        /**
         * Replicas is a list of Kustomize Replicas override specifications
         */
        replicas?: {
          /**
           * Number of replicas
           */
          count: number | string;
          /**
           * Name of Deployment or StatefulSet
           */
          name: string;
        }[];
        /**
         * Version controls which version of Kustomize to use for rendering manifests
         */
        version?: string;
      };
      /**
       * Path is a directory path within the Git repository, and is only valid for applications sourced from Git.
       */
      path?: string;
      /**
       * Plugin holds config management plugin specific options
       */
      plugin?: {
        /**
         * Env is a list of environment variable entries
         */
        env?: {
          /**
           * Name is the name of the variable, usually expressed in uppercase
           */
          name: string;
          /**
           * Value is the value of the variable
           */
          value: string;
        }[];
        name?: string;
        parameters?: {
          /**
           * Array is the value of an array type parameter.
           */
          array?: string[];
          /**
           * Map is the value of a map type parameter.
           */
          map?: {
            [k: string]: string;
          };
          /**
           * Name is the name identifying a parameter.
           */
          name?: string;
          /**
           * String_ is the value of a string type parameter.
           */
          string?: string;
        }[];
      };
      /**
       * Ref is reference to another source within sources field. This field will not be used if used with a `source` tag.
       */
      ref?: string;
      /**
       * RepoURL is the URL to the repository (Git or Helm) that contains the application manifests
       */
      repoURL: string;
      /**
       * TargetRevision defines the revision of the source to sync the application to.
       * In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
       * In case of Helm, this is a semver tag for the Chart's version.
       */
      targetRevision?: string;
    };
    /**
     * Sources is a reference to the location of the application's manifests or chart
     */
    sources?: {
      /**
       * Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo.
       */
      chart?: string;
      /**
       * Directory holds path/directory specific options
       */
      directory?: {
        /**
         * Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation
         */
        exclude?: string;
        /**
         * Include contains a glob pattern to match paths against that should be explicitly included during manifest generation
         */
        include?: string;
        /**
         * Jsonnet holds options specific to Jsonnet
         */
        jsonnet?: {
          /**
           * ExtVars is a list of Jsonnet External Variables
           */
          extVars?: {
            code?: boolean;
            name: string;
            value: string;
          }[];
          /**
           * Additional library search dirs
           */
          libs?: string[];
          /**
           * TLAS is a list of Jsonnet Top-level Arguments
           */
          tlas?: {
            code?: boolean;
            name: string;
            value: string;
          }[];
        };
        /**
         * Recurse specifies whether to scan a directory recursively for manifests
         */
        recurse?: boolean;
      };
      /**
       * Helm holds helm specific options
       */
      helm?: {
        /**
         * APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
         * Argo CD uses the API versions of the target cluster. The format is [group/]version/kind.
         */
        apiVersions?: string[];
        /**
         * FileParameters are file parameters to the helm template
         */
        fileParameters?: {
          /**
           * Name is the name of the Helm parameter
           */
          name?: string;
          /**
           * Path is the path to the file containing the values for the Helm parameter
           */
          path?: string;
        }[];
        /**
         * IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values
         */
        ignoreMissingValueFiles?: boolean;
        /**
         * KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
         * uses the Kubernetes version of the target cluster.
         */
        kubeVersion?: string;
        /**
         * Namespace is an optional namespace to template with. If left empty, defaults to the app's destination namespace.
         */
        namespace?: string;
        /**
         * Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation
         */
        parameters?: {
          /**
           * ForceString determines whether to tell Helm to interpret booleans and numbers as strings
           */
          forceString?: boolean;
          /**
           * Name is the name of the Helm parameter
           */
          name?: string;
          /**
           * Value is the value for the Helm parameter
           */
          value?: string;
        }[];
        /**
         * PassCredentials pass credentials to all domains (Helm's --pass-credentials)
         */
        passCredentials?: boolean;
        /**
         * ReleaseName is the Helm release name to use. If omitted it will use the application name
         */
        releaseName?: string;
        /**
         * SkipCrds skips custom resource definition installation step (Helm's --skip-crds)
         */
        skipCrds?: boolean;
        /**
         * ValuesFiles is a list of Helm value files to use when generating a template
         */
        valueFiles?: string[];
        /**
         * Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other.
         */
        values?: string;
        /**
         * ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values.
         */
        valuesObject?: {};
        /**
         * Version is the Helm version to use for templating ("3")
         */
        version?: string;
      };
      /**
       * Kustomize holds kustomize specific options
       */
      kustomize?: {
        /**
         * APIVersions specifies the Kubernetes resource API versions to pass to Helm when templating manifests. By default,
         * Argo CD uses the API versions of the target cluster. The format is [group/]version/kind.
         */
        apiVersions?: string[];
        /**
         * CommonAnnotations is a list of additional annotations to add to rendered manifests
         */
        commonAnnotations?: {
          [k: string]: string;
        };
        /**
         * CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values
         */
        commonAnnotationsEnvsubst?: boolean;
        /**
         * CommonLabels is a list of additional labels to add to rendered manifests
         */
        commonLabels?: {
          [k: string]: string;
        };
        /**
         * Components specifies a list of kustomize components to add to the kustomization before building
         */
        components?: string[];
        /**
         * ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps
         */
        forceCommonAnnotations?: boolean;
        /**
         * ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps
         */
        forceCommonLabels?: boolean;
        /**
         * Images is a list of Kustomize image override specifications
         */
        images?: string[];
        /**
         * KubeVersion specifies the Kubernetes API version to pass to Helm when templating manifests. By default, Argo CD
         * uses the Kubernetes version of the target cluster.
         */
        kubeVersion?: string;
        /**
         * LabelWithoutSelector specifies whether to apply common labels to resource selectors or not
         */
        labelWithoutSelector?: boolean;
        /**
         * NamePrefix is a prefix appended to resources for Kustomize apps
         */
        namePrefix?: string;
        /**
         * NameSuffix is a suffix appended to resources for Kustomize apps
         */
        nameSuffix?: string;
        /**
         * Namespace sets the namespace that Kustomize adds to all resources
         */
        namespace?: string;
        /**
         * Patches is a list of Kustomize patches
         */
        patches?: {
          options?: {
            [k: string]: boolean;
          };
          patch?: string;
          path?: string;
          target?: {
            annotationSelector?: string;
            group?: string;
            kind?: string;
            labelSelector?: string;
            name?: string;
            namespace?: string;
            version?: string;
          };
        }[];
        /**
         * Replicas is a list of Kustomize Replicas override specifications
         */
        replicas?: {
          /**
           * Number of replicas
           */
          count: number | string;
          /**
           * Name of Deployment or StatefulSet
           */
          name: string;
        }[];
        /**
         * Version controls which version of Kustomize to use for rendering manifests
         */
        version?: string;
      };
      /**
       * Path is a directory path within the Git repository, and is only valid for applications sourced from Git.
       */
      path?: string;
      /**
       * Plugin holds config management plugin specific options
       */
      plugin?: {
        /**
         * Env is a list of environment variable entries
         */
        env?: {
          /**
           * Name is the name of the variable, usually expressed in uppercase
           */
          name: string;
          /**
           * Value is the value of the variable
           */
          value: string;
        }[];
        name?: string;
        parameters?: {
          /**
           * Array is the value of an array type parameter.
           */
          array?: string[];
          /**
           * Map is the value of a map type parameter.
           */
          map?: {
            [k: string]: string;
          };
          /**
           * Name is the name identifying a parameter.
           */
          name?: string;
          /**
           * String_ is the value of a string type parameter.
           */
          string?: string;
        }[];
      };
      /**
       * Ref is reference to another source within sources field. This field will not be used if used with a `source` tag.
       */
      ref?: string;
      /**
       * RepoURL is the URL to the repository (Git or Helm) that contains the application manifests
       */
      repoURL: string;
      /**
       * TargetRevision defines the revision of the source to sync the application to.
       * In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD.
       * In case of Helm, this is a semver tag for the Chart's version.
       */
      targetRevision?: string;
    }[];
    /**
     * SyncPolicy controls when and how a sync will be performed
     */
    syncPolicy?: {
      /**
       * Automated will keep an application synced to the target revision
       */
      automated?: {
        /**
         * AllowEmpty allows apps have zero live resources (default: false)
         */
        allowEmpty?: boolean;
        /**
         * Prune specifies whether to delete resources from the cluster that are not found in the sources anymore as part of automated sync (default: false)
         */
        prune?: boolean;
        /**
         * SelfHeal specifies whether to revert resources back to their desired state upon modification in the cluster (default: false)
         */
        selfHeal?: boolean;
      };
      /**
       * ManagedNamespaceMetadata controls metadata in the given namespace (if CreateNamespace=true)
       */
      managedNamespaceMetadata?: {
        annotations?: {
          [k: string]: string;
        };
        labels?: {
          [k: string]: string;
        };
      };
      /**
       * Retry controls failed sync retry behavior
       */
      retry?: {
        /**
         * Backoff controls how to backoff on subsequent retries of failed syncs
         */
        backoff?: {
          /**
           * Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h")
           */
          duration?: string;
          /**
           * Factor is a factor to multiply the base duration after each failed retry
           */
          factor?: number;
          /**
           * MaxDuration is the maximum amount of time allowed for the backoff strategy
           */
          maxDuration?: string;
        };
        /**
         * Limit is the maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
         */
        limit?: number;
      };
      /**
       * Options allow you to specify whole app sync-options
       */
      syncOptions?: string[];
    };
  };
}

export class Application extends NamespacedApiObject {
  readonly apiVersion = 'argoproj.io/v1alpha1';
  readonly kind = 'Application';
  readonly metadata: NamespacedObjectMeta;
  readonly spec: ApplicationArgs['spec'];

  constructor(app: K8sApp, name: string, args: ApplicationArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
