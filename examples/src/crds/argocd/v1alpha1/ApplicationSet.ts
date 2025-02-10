import { K8sApp } from '@k8skonf/core';
import { NamespacedApiObject, NamespacedObjectMeta } from '@k8skonf/core';

export interface ApplicationSetArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly spec: {
    applyNestedSelectors?: boolean;
    generators: {
      clusterDecisionResource?: {
        configMapRef: string;
        labelSelector?: {
          matchExpressions?: {
            key: string;
            operator: string;
            values?: string[];
          }[];
          matchLabels?: {
            [k: string]: string;
          };
        };
        name?: string;
        requeueAfterSeconds?: number;
        template?: {
          metadata: {
            annotations?: {
              [k: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [k: string]: string;
            };
            name?: string;
            namespace?: string;
          };
          spec: {
            destination: {
              name?: string;
              namespace?: string;
              server?: string;
            };
            ignoreDifferences?: {
              group?: string;
              jqPathExpressions?: string[];
              jsonPointers?: string[];
              kind: string;
              managedFieldsManagers?: string[];
              name?: string;
              namespace?: string;
            }[];
            info?: {
              name: string;
              value: string;
            }[];
            project: string;
            revisionHistoryLimit?: number;
            source?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            };
            sources?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            }[];
            syncPolicy?: {
              automated?: {
                allowEmpty?: boolean;
                prune?: boolean;
                selfHeal?: boolean;
              };
              managedNamespaceMetadata?: {
                annotations?: {
                  [k: string]: string;
                };
                labels?: {
                  [k: string]: string;
                };
              };
              retry?: {
                backoff?: {
                  duration?: string;
                  factor?: number;
                  maxDuration?: string;
                };
                limit?: number;
              };
              syncOptions?: string[];
            };
          };
        };
        values?: {
          [k: string]: string;
        };
      };
      clusters?: {
        selector?: {
          matchExpressions?: {
            key: string;
            operator: string;
            values?: string[];
          }[];
          matchLabels?: {
            [k: string]: string;
          };
        };
        template?: {
          metadata: {
            annotations?: {
              [k: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [k: string]: string;
            };
            name?: string;
            namespace?: string;
          };
          spec: {
            destination: {
              name?: string;
              namespace?: string;
              server?: string;
            };
            ignoreDifferences?: {
              group?: string;
              jqPathExpressions?: string[];
              jsonPointers?: string[];
              kind: string;
              managedFieldsManagers?: string[];
              name?: string;
              namespace?: string;
            }[];
            info?: {
              name: string;
              value: string;
            }[];
            project: string;
            revisionHistoryLimit?: number;
            source?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            };
            sources?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            }[];
            syncPolicy?: {
              automated?: {
                allowEmpty?: boolean;
                prune?: boolean;
                selfHeal?: boolean;
              };
              managedNamespaceMetadata?: {
                annotations?: {
                  [k: string]: string;
                };
                labels?: {
                  [k: string]: string;
                };
              };
              retry?: {
                backoff?: {
                  duration?: string;
                  factor?: number;
                  maxDuration?: string;
                };
                limit?: number;
              };
              syncOptions?: string[];
            };
          };
        };
        values?: {
          [k: string]: string;
        };
      };
      git?: {
        directories?: {
          exclude?: boolean;
          path: string;
        }[];
        files?: {
          path: string;
        }[];
        pathParamPrefix?: string;
        repoURL: string;
        requeueAfterSeconds?: number;
        revision: string;
        template?: {
          metadata: {
            annotations?: {
              [k: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [k: string]: string;
            };
            name?: string;
            namespace?: string;
          };
          spec: {
            destination: {
              name?: string;
              namespace?: string;
              server?: string;
            };
            ignoreDifferences?: {
              group?: string;
              jqPathExpressions?: string[];
              jsonPointers?: string[];
              kind: string;
              managedFieldsManagers?: string[];
              name?: string;
              namespace?: string;
            }[];
            info?: {
              name: string;
              value: string;
            }[];
            project: string;
            revisionHistoryLimit?: number;
            source?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            };
            sources?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            }[];
            syncPolicy?: {
              automated?: {
                allowEmpty?: boolean;
                prune?: boolean;
                selfHeal?: boolean;
              };
              managedNamespaceMetadata?: {
                annotations?: {
                  [k: string]: string;
                };
                labels?: {
                  [k: string]: string;
                };
              };
              retry?: {
                backoff?: {
                  duration?: string;
                  factor?: number;
                  maxDuration?: string;
                };
                limit?: number;
              };
              syncOptions?: string[];
            };
          };
        };
        values?: {
          [k: string]: string;
        };
      };
      list?: {
        elements?: {
          [k: string]: unknown;
        }[];
        elementsYaml?: string;
        template?: {
          metadata: {
            annotations?: {
              [k: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [k: string]: string;
            };
            name?: string;
            namespace?: string;
          };
          spec: {
            destination: {
              name?: string;
              namespace?: string;
              server?: string;
            };
            ignoreDifferences?: {
              group?: string;
              jqPathExpressions?: string[];
              jsonPointers?: string[];
              kind: string;
              managedFieldsManagers?: string[];
              name?: string;
              namespace?: string;
            }[];
            info?: {
              name: string;
              value: string;
            }[];
            project: string;
            revisionHistoryLimit?: number;
            source?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            };
            sources?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            }[];
            syncPolicy?: {
              automated?: {
                allowEmpty?: boolean;
                prune?: boolean;
                selfHeal?: boolean;
              };
              managedNamespaceMetadata?: {
                annotations?: {
                  [k: string]: string;
                };
                labels?: {
                  [k: string]: string;
                };
              };
              retry?: {
                backoff?: {
                  duration?: string;
                  factor?: number;
                  maxDuration?: string;
                };
                limit?: number;
              };
              syncOptions?: string[];
            };
          };
        };
      };
      matrix?: {
        generators: {
          clusterDecisionResource?: {
            configMapRef: string;
            labelSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [k: string]: string;
              };
            };
            name?: string;
            requeueAfterSeconds?: number;
            template?: {
              metadata: {
                annotations?: {
                  [k: string]: string;
                };
                finalizers?: string[];
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
              };
              spec: {
                destination: {
                  name?: string;
                  namespace?: string;
                  server?: string;
                };
                ignoreDifferences?: {
                  group?: string;
                  jqPathExpressions?: string[];
                  jsonPointers?: string[];
                  kind: string;
                  managedFieldsManagers?: string[];
                  name?: string;
                  namespace?: string;
                }[];
                info?: {
                  name: string;
                  value: string;
                }[];
                project: string;
                revisionHistoryLimit?: number;
                source?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                };
                sources?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                }[];
                syncPolicy?: {
                  automated?: {
                    allowEmpty?: boolean;
                    prune?: boolean;
                    selfHeal?: boolean;
                  };
                  managedNamespaceMetadata?: {
                    annotations?: {
                      [k: string]: string;
                    };
                    labels?: {
                      [k: string]: string;
                    };
                  };
                  retry?: {
                    backoff?: {
                      duration?: string;
                      factor?: number;
                      maxDuration?: string;
                    };
                    limit?: number;
                  };
                  syncOptions?: string[];
                };
              };
            };
            values?: {
              [k: string]: string;
            };
          };
          clusters?: {
            selector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [k: string]: string;
              };
            };
            template?: {
              metadata: {
                annotations?: {
                  [k: string]: string;
                };
                finalizers?: string[];
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
              };
              spec: {
                destination: {
                  name?: string;
                  namespace?: string;
                  server?: string;
                };
                ignoreDifferences?: {
                  group?: string;
                  jqPathExpressions?: string[];
                  jsonPointers?: string[];
                  kind: string;
                  managedFieldsManagers?: string[];
                  name?: string;
                  namespace?: string;
                }[];
                info?: {
                  name: string;
                  value: string;
                }[];
                project: string;
                revisionHistoryLimit?: number;
                source?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                };
                sources?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                }[];
                syncPolicy?: {
                  automated?: {
                    allowEmpty?: boolean;
                    prune?: boolean;
                    selfHeal?: boolean;
                  };
                  managedNamespaceMetadata?: {
                    annotations?: {
                      [k: string]: string;
                    };
                    labels?: {
                      [k: string]: string;
                    };
                  };
                  retry?: {
                    backoff?: {
                      duration?: string;
                      factor?: number;
                      maxDuration?: string;
                    };
                    limit?: number;
                  };
                  syncOptions?: string[];
                };
              };
            };
            values?: {
              [k: string]: string;
            };
          };
          git?: {
            directories?: {
              exclude?: boolean;
              path: string;
            }[];
            files?: {
              path: string;
            }[];
            pathParamPrefix?: string;
            repoURL: string;
            requeueAfterSeconds?: number;
            revision: string;
            template?: {
              metadata: {
                annotations?: {
                  [k: string]: string;
                };
                finalizers?: string[];
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
              };
              spec: {
                destination: {
                  name?: string;
                  namespace?: string;
                  server?: string;
                };
                ignoreDifferences?: {
                  group?: string;
                  jqPathExpressions?: string[];
                  jsonPointers?: string[];
                  kind: string;
                  managedFieldsManagers?: string[];
                  name?: string;
                  namespace?: string;
                }[];
                info?: {
                  name: string;
                  value: string;
                }[];
                project: string;
                revisionHistoryLimit?: number;
                source?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                };
                sources?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                }[];
                syncPolicy?: {
                  automated?: {
                    allowEmpty?: boolean;
                    prune?: boolean;
                    selfHeal?: boolean;
                  };
                  managedNamespaceMetadata?: {
                    annotations?: {
                      [k: string]: string;
                    };
                    labels?: {
                      [k: string]: string;
                    };
                  };
                  retry?: {
                    backoff?: {
                      duration?: string;
                      factor?: number;
                      maxDuration?: string;
                    };
                    limit?: number;
                  };
                  syncOptions?: string[];
                };
              };
            };
            values?: {
              [k: string]: string;
            };
          };
          list?: {
            elements?: {
              [k: string]: unknown;
            }[];
            elementsYaml?: string;
            template?: {
              metadata: {
                annotations?: {
                  [k: string]: string;
                };
                finalizers?: string[];
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
              };
              spec: {
                destination: {
                  name?: string;
                  namespace?: string;
                  server?: string;
                };
                ignoreDifferences?: {
                  group?: string;
                  jqPathExpressions?: string[];
                  jsonPointers?: string[];
                  kind: string;
                  managedFieldsManagers?: string[];
                  name?: string;
                  namespace?: string;
                }[];
                info?: {
                  name: string;
                  value: string;
                }[];
                project: string;
                revisionHistoryLimit?: number;
                source?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                };
                sources?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                }[];
                syncPolicy?: {
                  automated?: {
                    allowEmpty?: boolean;
                    prune?: boolean;
                    selfHeal?: boolean;
                  };
                  managedNamespaceMetadata?: {
                    annotations?: {
                      [k: string]: string;
                    };
                    labels?: {
                      [k: string]: string;
                    };
                  };
                  retry?: {
                    backoff?: {
                      duration?: string;
                      factor?: number;
                      maxDuration?: string;
                    };
                    limit?: number;
                  };
                  syncOptions?: string[];
                };
              };
            };
          };
          matrix?: {
            [k: string]: unknown;
          };
          merge?: {
            [k: string]: unknown;
          };
          plugin?: {
            configMapRef: {
              name: string;
            };
            input?: {
              parameters?: {
                [k: string]: {
                  [k: string]: unknown;
                };
              };
            };
            requeueAfterSeconds?: number;
            template?: {
              metadata: {
                annotations?: {
                  [k: string]: string;
                };
                finalizers?: string[];
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
              };
              spec: {
                destination: {
                  name?: string;
                  namespace?: string;
                  server?: string;
                };
                ignoreDifferences?: {
                  group?: string;
                  jqPathExpressions?: string[];
                  jsonPointers?: string[];
                  kind: string;
                  managedFieldsManagers?: string[];
                  name?: string;
                  namespace?: string;
                }[];
                info?: {
                  name: string;
                  value: string;
                }[];
                project: string;
                revisionHistoryLimit?: number;
                source?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                };
                sources?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                }[];
                syncPolicy?: {
                  automated?: {
                    allowEmpty?: boolean;
                    prune?: boolean;
                    selfHeal?: boolean;
                  };
                  managedNamespaceMetadata?: {
                    annotations?: {
                      [k: string]: string;
                    };
                    labels?: {
                      [k: string]: string;
                    };
                  };
                  retry?: {
                    backoff?: {
                      duration?: string;
                      factor?: number;
                      maxDuration?: string;
                    };
                    limit?: number;
                  };
                  syncOptions?: string[];
                };
              };
            };
            values?: {
              [k: string]: string;
            };
          };
          pullRequest?: {
            azuredevops?: {
              api?: string;
              labels?: string[];
              organization: string;
              project: string;
              repo: string;
              tokenRef?: {
                key: string;
                secretName: string;
              };
            };
            bitbucket?: {
              api?: string;
              basicAuth?: {
                passwordRef: {
                  key: string;
                  secretName: string;
                };
                username: string;
              };
              bearerToken?: {
                tokenRef: {
                  key: string;
                  secretName: string;
                };
              };
              owner: string;
              repo: string;
            };
            bitbucketServer?: {
              api: string;
              basicAuth?: {
                passwordRef: {
                  key: string;
                  secretName: string;
                };
                username: string;
              };
              bearerToken?: {
                tokenRef: {
                  key: string;
                  secretName: string;
                };
              };
              caRef?: {
                configMapName: string;
                key: string;
              };
              insecure?: boolean;
              project: string;
              repo: string;
            };
            filters?: {
              branchMatch?: string;
              targetBranchMatch?: string;
            }[];
            gitea?: {
              api: string;
              insecure?: boolean;
              owner: string;
              repo: string;
              tokenRef?: {
                key: string;
                secretName: string;
              };
            };
            github?: {
              api?: string;
              appSecretName?: string;
              labels?: string[];
              owner: string;
              repo: string;
              tokenRef?: {
                key: string;
                secretName: string;
              };
            };
            gitlab?: {
              api?: string;
              caRef?: {
                configMapName: string;
                key: string;
              };
              insecure?: boolean;
              labels?: string[];
              project: string;
              pullRequestState?: string;
              tokenRef?: {
                key: string;
                secretName: string;
              };
            };
            requeueAfterSeconds?: number;
            template?: {
              metadata: {
                annotations?: {
                  [k: string]: string;
                };
                finalizers?: string[];
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
              };
              spec: {
                destination: {
                  name?: string;
                  namespace?: string;
                  server?: string;
                };
                ignoreDifferences?: {
                  group?: string;
                  jqPathExpressions?: string[];
                  jsonPointers?: string[];
                  kind: string;
                  managedFieldsManagers?: string[];
                  name?: string;
                  namespace?: string;
                }[];
                info?: {
                  name: string;
                  value: string;
                }[];
                project: string;
                revisionHistoryLimit?: number;
                source?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                };
                sources?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                }[];
                syncPolicy?: {
                  automated?: {
                    allowEmpty?: boolean;
                    prune?: boolean;
                    selfHeal?: boolean;
                  };
                  managedNamespaceMetadata?: {
                    annotations?: {
                      [k: string]: string;
                    };
                    labels?: {
                      [k: string]: string;
                    };
                  };
                  retry?: {
                    backoff?: {
                      duration?: string;
                      factor?: number;
                      maxDuration?: string;
                    };
                    limit?: number;
                  };
                  syncOptions?: string[];
                };
              };
            };
          };
          scmProvider?: {
            awsCodeCommit?: {
              allBranches?: boolean;
              region?: string;
              role?: string;
              tagFilters?: {
                key: string;
                value?: string;
              }[];
            };
            azureDevOps?: {
              accessTokenRef: {
                key: string;
                secretName: string;
              };
              allBranches?: boolean;
              api?: string;
              organization: string;
              teamProject: string;
            };
            bitbucket?: {
              allBranches?: boolean;
              appPasswordRef: {
                key: string;
                secretName: string;
              };
              owner: string;
              user: string;
            };
            bitbucketServer?: {
              allBranches?: boolean;
              api: string;
              basicAuth?: {
                passwordRef: {
                  key: string;
                  secretName: string;
                };
                username: string;
              };
              bearerToken?: {
                tokenRef: {
                  key: string;
                  secretName: string;
                };
              };
              caRef?: {
                configMapName: string;
                key: string;
              };
              insecure?: boolean;
              project: string;
            };
            cloneProtocol?: string;
            filters?: {
              branchMatch?: string;
              labelMatch?: string;
              pathsDoNotExist?: string[];
              pathsExist?: string[];
              repositoryMatch?: string;
            }[];
            gitea?: {
              allBranches?: boolean;
              api: string;
              insecure?: boolean;
              owner: string;
              tokenRef?: {
                key: string;
                secretName: string;
              };
            };
            github?: {
              allBranches?: boolean;
              api?: string;
              appSecretName?: string;
              organization: string;
              tokenRef?: {
                key: string;
                secretName: string;
              };
            };
            gitlab?: {
              allBranches?: boolean;
              api?: string;
              caRef?: {
                configMapName: string;
                key: string;
              };
              group: string;
              includeSharedProjects?: boolean;
              includeSubgroups?: boolean;
              insecure?: boolean;
              tokenRef?: {
                key: string;
                secretName: string;
              };
              topic?: string;
            };
            requeueAfterSeconds?: number;
            template?: {
              metadata: {
                annotations?: {
                  [k: string]: string;
                };
                finalizers?: string[];
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
              };
              spec: {
                destination: {
                  name?: string;
                  namespace?: string;
                  server?: string;
                };
                ignoreDifferences?: {
                  group?: string;
                  jqPathExpressions?: string[];
                  jsonPointers?: string[];
                  kind: string;
                  managedFieldsManagers?: string[];
                  name?: string;
                  namespace?: string;
                }[];
                info?: {
                  name: string;
                  value: string;
                }[];
                project: string;
                revisionHistoryLimit?: number;
                source?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                };
                sources?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                }[];
                syncPolicy?: {
                  automated?: {
                    allowEmpty?: boolean;
                    prune?: boolean;
                    selfHeal?: boolean;
                  };
                  managedNamespaceMetadata?: {
                    annotations?: {
                      [k: string]: string;
                    };
                    labels?: {
                      [k: string]: string;
                    };
                  };
                  retry?: {
                    backoff?: {
                      duration?: string;
                      factor?: number;
                      maxDuration?: string;
                    };
                    limit?: number;
                  };
                  syncOptions?: string[];
                };
              };
            };
            values?: {
              [k: string]: string;
            };
          };
          selector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
            }[];
            matchLabels?: {
              [k: string]: string;
            };
          };
        }[];
        template?: {
          metadata: {
            annotations?: {
              [k: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [k: string]: string;
            };
            name?: string;
            namespace?: string;
          };
          spec: {
            destination: {
              name?: string;
              namespace?: string;
              server?: string;
            };
            ignoreDifferences?: {
              group?: string;
              jqPathExpressions?: string[];
              jsonPointers?: string[];
              kind: string;
              managedFieldsManagers?: string[];
              name?: string;
              namespace?: string;
            }[];
            info?: {
              name: string;
              value: string;
            }[];
            project: string;
            revisionHistoryLimit?: number;
            source?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            };
            sources?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            }[];
            syncPolicy?: {
              automated?: {
                allowEmpty?: boolean;
                prune?: boolean;
                selfHeal?: boolean;
              };
              managedNamespaceMetadata?: {
                annotations?: {
                  [k: string]: string;
                };
                labels?: {
                  [k: string]: string;
                };
              };
              retry?: {
                backoff?: {
                  duration?: string;
                  factor?: number;
                  maxDuration?: string;
                };
                limit?: number;
              };
              syncOptions?: string[];
            };
          };
        };
      };
      merge?: {
        generators: {
          clusterDecisionResource?: {
            configMapRef: string;
            labelSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [k: string]: string;
              };
            };
            name?: string;
            requeueAfterSeconds?: number;
            template?: {
              metadata: {
                annotations?: {
                  [k: string]: string;
                };
                finalizers?: string[];
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
              };
              spec: {
                destination: {
                  name?: string;
                  namespace?: string;
                  server?: string;
                };
                ignoreDifferences?: {
                  group?: string;
                  jqPathExpressions?: string[];
                  jsonPointers?: string[];
                  kind: string;
                  managedFieldsManagers?: string[];
                  name?: string;
                  namespace?: string;
                }[];
                info?: {
                  name: string;
                  value: string;
                }[];
                project: string;
                revisionHistoryLimit?: number;
                source?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                };
                sources?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                }[];
                syncPolicy?: {
                  automated?: {
                    allowEmpty?: boolean;
                    prune?: boolean;
                    selfHeal?: boolean;
                  };
                  managedNamespaceMetadata?: {
                    annotations?: {
                      [k: string]: string;
                    };
                    labels?: {
                      [k: string]: string;
                    };
                  };
                  retry?: {
                    backoff?: {
                      duration?: string;
                      factor?: number;
                      maxDuration?: string;
                    };
                    limit?: number;
                  };
                  syncOptions?: string[];
                };
              };
            };
            values?: {
              [k: string]: string;
            };
          };
          clusters?: {
            selector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [k: string]: string;
              };
            };
            template?: {
              metadata: {
                annotations?: {
                  [k: string]: string;
                };
                finalizers?: string[];
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
              };
              spec: {
                destination: {
                  name?: string;
                  namespace?: string;
                  server?: string;
                };
                ignoreDifferences?: {
                  group?: string;
                  jqPathExpressions?: string[];
                  jsonPointers?: string[];
                  kind: string;
                  managedFieldsManagers?: string[];
                  name?: string;
                  namespace?: string;
                }[];
                info?: {
                  name: string;
                  value: string;
                }[];
                project: string;
                revisionHistoryLimit?: number;
                source?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                };
                sources?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                }[];
                syncPolicy?: {
                  automated?: {
                    allowEmpty?: boolean;
                    prune?: boolean;
                    selfHeal?: boolean;
                  };
                  managedNamespaceMetadata?: {
                    annotations?: {
                      [k: string]: string;
                    };
                    labels?: {
                      [k: string]: string;
                    };
                  };
                  retry?: {
                    backoff?: {
                      duration?: string;
                      factor?: number;
                      maxDuration?: string;
                    };
                    limit?: number;
                  };
                  syncOptions?: string[];
                };
              };
            };
            values?: {
              [k: string]: string;
            };
          };
          git?: {
            directories?: {
              exclude?: boolean;
              path: string;
            }[];
            files?: {
              path: string;
            }[];
            pathParamPrefix?: string;
            repoURL: string;
            requeueAfterSeconds?: number;
            revision: string;
            template?: {
              metadata: {
                annotations?: {
                  [k: string]: string;
                };
                finalizers?: string[];
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
              };
              spec: {
                destination: {
                  name?: string;
                  namespace?: string;
                  server?: string;
                };
                ignoreDifferences?: {
                  group?: string;
                  jqPathExpressions?: string[];
                  jsonPointers?: string[];
                  kind: string;
                  managedFieldsManagers?: string[];
                  name?: string;
                  namespace?: string;
                }[];
                info?: {
                  name: string;
                  value: string;
                }[];
                project: string;
                revisionHistoryLimit?: number;
                source?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                };
                sources?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                }[];
                syncPolicy?: {
                  automated?: {
                    allowEmpty?: boolean;
                    prune?: boolean;
                    selfHeal?: boolean;
                  };
                  managedNamespaceMetadata?: {
                    annotations?: {
                      [k: string]: string;
                    };
                    labels?: {
                      [k: string]: string;
                    };
                  };
                  retry?: {
                    backoff?: {
                      duration?: string;
                      factor?: number;
                      maxDuration?: string;
                    };
                    limit?: number;
                  };
                  syncOptions?: string[];
                };
              };
            };
            values?: {
              [k: string]: string;
            };
          };
          list?: {
            elements?: {
              [k: string]: unknown;
            }[];
            elementsYaml?: string;
            template?: {
              metadata: {
                annotations?: {
                  [k: string]: string;
                };
                finalizers?: string[];
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
              };
              spec: {
                destination: {
                  name?: string;
                  namespace?: string;
                  server?: string;
                };
                ignoreDifferences?: {
                  group?: string;
                  jqPathExpressions?: string[];
                  jsonPointers?: string[];
                  kind: string;
                  managedFieldsManagers?: string[];
                  name?: string;
                  namespace?: string;
                }[];
                info?: {
                  name: string;
                  value: string;
                }[];
                project: string;
                revisionHistoryLimit?: number;
                source?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                };
                sources?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                }[];
                syncPolicy?: {
                  automated?: {
                    allowEmpty?: boolean;
                    prune?: boolean;
                    selfHeal?: boolean;
                  };
                  managedNamespaceMetadata?: {
                    annotations?: {
                      [k: string]: string;
                    };
                    labels?: {
                      [k: string]: string;
                    };
                  };
                  retry?: {
                    backoff?: {
                      duration?: string;
                      factor?: number;
                      maxDuration?: string;
                    };
                    limit?: number;
                  };
                  syncOptions?: string[];
                };
              };
            };
          };
          matrix?: {
            [k: string]: unknown;
          };
          merge?: {
            [k: string]: unknown;
          };
          plugin?: {
            configMapRef: {
              name: string;
            };
            input?: {
              parameters?: {
                [k: string]: {
                  [k: string]: unknown;
                };
              };
            };
            requeueAfterSeconds?: number;
            template?: {
              metadata: {
                annotations?: {
                  [k: string]: string;
                };
                finalizers?: string[];
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
              };
              spec: {
                destination: {
                  name?: string;
                  namespace?: string;
                  server?: string;
                };
                ignoreDifferences?: {
                  group?: string;
                  jqPathExpressions?: string[];
                  jsonPointers?: string[];
                  kind: string;
                  managedFieldsManagers?: string[];
                  name?: string;
                  namespace?: string;
                }[];
                info?: {
                  name: string;
                  value: string;
                }[];
                project: string;
                revisionHistoryLimit?: number;
                source?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                };
                sources?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                }[];
                syncPolicy?: {
                  automated?: {
                    allowEmpty?: boolean;
                    prune?: boolean;
                    selfHeal?: boolean;
                  };
                  managedNamespaceMetadata?: {
                    annotations?: {
                      [k: string]: string;
                    };
                    labels?: {
                      [k: string]: string;
                    };
                  };
                  retry?: {
                    backoff?: {
                      duration?: string;
                      factor?: number;
                      maxDuration?: string;
                    };
                    limit?: number;
                  };
                  syncOptions?: string[];
                };
              };
            };
            values?: {
              [k: string]: string;
            };
          };
          pullRequest?: {
            azuredevops?: {
              api?: string;
              labels?: string[];
              organization: string;
              project: string;
              repo: string;
              tokenRef?: {
                key: string;
                secretName: string;
              };
            };
            bitbucket?: {
              api?: string;
              basicAuth?: {
                passwordRef: {
                  key: string;
                  secretName: string;
                };
                username: string;
              };
              bearerToken?: {
                tokenRef: {
                  key: string;
                  secretName: string;
                };
              };
              owner: string;
              repo: string;
            };
            bitbucketServer?: {
              api: string;
              basicAuth?: {
                passwordRef: {
                  key: string;
                  secretName: string;
                };
                username: string;
              };
              bearerToken?: {
                tokenRef: {
                  key: string;
                  secretName: string;
                };
              };
              caRef?: {
                configMapName: string;
                key: string;
              };
              insecure?: boolean;
              project: string;
              repo: string;
            };
            filters?: {
              branchMatch?: string;
              targetBranchMatch?: string;
            }[];
            gitea?: {
              api: string;
              insecure?: boolean;
              owner: string;
              repo: string;
              tokenRef?: {
                key: string;
                secretName: string;
              };
            };
            github?: {
              api?: string;
              appSecretName?: string;
              labels?: string[];
              owner: string;
              repo: string;
              tokenRef?: {
                key: string;
                secretName: string;
              };
            };
            gitlab?: {
              api?: string;
              caRef?: {
                configMapName: string;
                key: string;
              };
              insecure?: boolean;
              labels?: string[];
              project: string;
              pullRequestState?: string;
              tokenRef?: {
                key: string;
                secretName: string;
              };
            };
            requeueAfterSeconds?: number;
            template?: {
              metadata: {
                annotations?: {
                  [k: string]: string;
                };
                finalizers?: string[];
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
              };
              spec: {
                destination: {
                  name?: string;
                  namespace?: string;
                  server?: string;
                };
                ignoreDifferences?: {
                  group?: string;
                  jqPathExpressions?: string[];
                  jsonPointers?: string[];
                  kind: string;
                  managedFieldsManagers?: string[];
                  name?: string;
                  namespace?: string;
                }[];
                info?: {
                  name: string;
                  value: string;
                }[];
                project: string;
                revisionHistoryLimit?: number;
                source?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                };
                sources?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                }[];
                syncPolicy?: {
                  automated?: {
                    allowEmpty?: boolean;
                    prune?: boolean;
                    selfHeal?: boolean;
                  };
                  managedNamespaceMetadata?: {
                    annotations?: {
                      [k: string]: string;
                    };
                    labels?: {
                      [k: string]: string;
                    };
                  };
                  retry?: {
                    backoff?: {
                      duration?: string;
                      factor?: number;
                      maxDuration?: string;
                    };
                    limit?: number;
                  };
                  syncOptions?: string[];
                };
              };
            };
          };
          scmProvider?: {
            awsCodeCommit?: {
              allBranches?: boolean;
              region?: string;
              role?: string;
              tagFilters?: {
                key: string;
                value?: string;
              }[];
            };
            azureDevOps?: {
              accessTokenRef: {
                key: string;
                secretName: string;
              };
              allBranches?: boolean;
              api?: string;
              organization: string;
              teamProject: string;
            };
            bitbucket?: {
              allBranches?: boolean;
              appPasswordRef: {
                key: string;
                secretName: string;
              };
              owner: string;
              user: string;
            };
            bitbucketServer?: {
              allBranches?: boolean;
              api: string;
              basicAuth?: {
                passwordRef: {
                  key: string;
                  secretName: string;
                };
                username: string;
              };
              bearerToken?: {
                tokenRef: {
                  key: string;
                  secretName: string;
                };
              };
              caRef?: {
                configMapName: string;
                key: string;
              };
              insecure?: boolean;
              project: string;
            };
            cloneProtocol?: string;
            filters?: {
              branchMatch?: string;
              labelMatch?: string;
              pathsDoNotExist?: string[];
              pathsExist?: string[];
              repositoryMatch?: string;
            }[];
            gitea?: {
              allBranches?: boolean;
              api: string;
              insecure?: boolean;
              owner: string;
              tokenRef?: {
                key: string;
                secretName: string;
              };
            };
            github?: {
              allBranches?: boolean;
              api?: string;
              appSecretName?: string;
              organization: string;
              tokenRef?: {
                key: string;
                secretName: string;
              };
            };
            gitlab?: {
              allBranches?: boolean;
              api?: string;
              caRef?: {
                configMapName: string;
                key: string;
              };
              group: string;
              includeSharedProjects?: boolean;
              includeSubgroups?: boolean;
              insecure?: boolean;
              tokenRef?: {
                key: string;
                secretName: string;
              };
              topic?: string;
            };
            requeueAfterSeconds?: number;
            template?: {
              metadata: {
                annotations?: {
                  [k: string]: string;
                };
                finalizers?: string[];
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
              };
              spec: {
                destination: {
                  name?: string;
                  namespace?: string;
                  server?: string;
                };
                ignoreDifferences?: {
                  group?: string;
                  jqPathExpressions?: string[];
                  jsonPointers?: string[];
                  kind: string;
                  managedFieldsManagers?: string[];
                  name?: string;
                  namespace?: string;
                }[];
                info?: {
                  name: string;
                  value: string;
                }[];
                project: string;
                revisionHistoryLimit?: number;
                source?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                };
                sources?: {
                  chart?: string;
                  directory?: {
                    exclude?: string;
                    include?: string;
                    jsonnet?: {
                      extVars?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                      libs?: string[];
                      tlas?: {
                        code?: boolean;
                        name: string;
                        value: string;
                      }[];
                    };
                    recurse?: boolean;
                  };
                  helm?: {
                    apiVersions?: string[];
                    fileParameters?: {
                      name?: string;
                      path?: string;
                    }[];
                    ignoreMissingValueFiles?: boolean;
                    kubeVersion?: string;
                    namespace?: string;
                    parameters?: {
                      forceString?: boolean;
                      name?: string;
                      value?: string;
                    }[];
                    passCredentials?: boolean;
                    releaseName?: string;
                    skipCrds?: boolean;
                    valueFiles?: string[];
                    values?: string;
                    valuesObject?: {};
                    version?: string;
                  };
                  kustomize?: {
                    apiVersions?: string[];
                    commonAnnotations?: {
                      [k: string]: string;
                    };
                    commonAnnotationsEnvsubst?: boolean;
                    commonLabels?: {
                      [k: string]: string;
                    };
                    components?: string[];
                    forceCommonAnnotations?: boolean;
                    forceCommonLabels?: boolean;
                    images?: string[];
                    kubeVersion?: string;
                    labelWithoutSelector?: boolean;
                    namePrefix?: string;
                    nameSuffix?: string;
                    namespace?: string;
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
                    replicas?: {
                      count: number | string;
                      name: string;
                    }[];
                    version?: string;
                  };
                  path?: string;
                  plugin?: {
                    env?: {
                      name: string;
                      value: string;
                    }[];
                    name?: string;
                    parameters?: {
                      array?: string[];
                      map?: {
                        [k: string]: string;
                      };
                      name?: string;
                      string?: string;
                    }[];
                  };
                  ref?: string;
                  repoURL: string;
                  targetRevision?: string;
                }[];
                syncPolicy?: {
                  automated?: {
                    allowEmpty?: boolean;
                    prune?: boolean;
                    selfHeal?: boolean;
                  };
                  managedNamespaceMetadata?: {
                    annotations?: {
                      [k: string]: string;
                    };
                    labels?: {
                      [k: string]: string;
                    };
                  };
                  retry?: {
                    backoff?: {
                      duration?: string;
                      factor?: number;
                      maxDuration?: string;
                    };
                    limit?: number;
                  };
                  syncOptions?: string[];
                };
              };
            };
            values?: {
              [k: string]: string;
            };
          };
          selector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
            }[];
            matchLabels?: {
              [k: string]: string;
            };
          };
        }[];
        mergeKeys: string[];
        template?: {
          metadata: {
            annotations?: {
              [k: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [k: string]: string;
            };
            name?: string;
            namespace?: string;
          };
          spec: {
            destination: {
              name?: string;
              namespace?: string;
              server?: string;
            };
            ignoreDifferences?: {
              group?: string;
              jqPathExpressions?: string[];
              jsonPointers?: string[];
              kind: string;
              managedFieldsManagers?: string[];
              name?: string;
              namespace?: string;
            }[];
            info?: {
              name: string;
              value: string;
            }[];
            project: string;
            revisionHistoryLimit?: number;
            source?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            };
            sources?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            }[];
            syncPolicy?: {
              automated?: {
                allowEmpty?: boolean;
                prune?: boolean;
                selfHeal?: boolean;
              };
              managedNamespaceMetadata?: {
                annotations?: {
                  [k: string]: string;
                };
                labels?: {
                  [k: string]: string;
                };
              };
              retry?: {
                backoff?: {
                  duration?: string;
                  factor?: number;
                  maxDuration?: string;
                };
                limit?: number;
              };
              syncOptions?: string[];
            };
          };
        };
      };
      plugin?: {
        configMapRef: {
          name: string;
        };
        input?: {
          parameters?: {
            [k: string]: {
              [k: string]: unknown;
            };
          };
        };
        requeueAfterSeconds?: number;
        template?: {
          metadata: {
            annotations?: {
              [k: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [k: string]: string;
            };
            name?: string;
            namespace?: string;
          };
          spec: {
            destination: {
              name?: string;
              namespace?: string;
              server?: string;
            };
            ignoreDifferences?: {
              group?: string;
              jqPathExpressions?: string[];
              jsonPointers?: string[];
              kind: string;
              managedFieldsManagers?: string[];
              name?: string;
              namespace?: string;
            }[];
            info?: {
              name: string;
              value: string;
            }[];
            project: string;
            revisionHistoryLimit?: number;
            source?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            };
            sources?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            }[];
            syncPolicy?: {
              automated?: {
                allowEmpty?: boolean;
                prune?: boolean;
                selfHeal?: boolean;
              };
              managedNamespaceMetadata?: {
                annotations?: {
                  [k: string]: string;
                };
                labels?: {
                  [k: string]: string;
                };
              };
              retry?: {
                backoff?: {
                  duration?: string;
                  factor?: number;
                  maxDuration?: string;
                };
                limit?: number;
              };
              syncOptions?: string[];
            };
          };
        };
        values?: {
          [k: string]: string;
        };
      };
      pullRequest?: {
        azuredevops?: {
          api?: string;
          labels?: string[];
          organization: string;
          project: string;
          repo: string;
          tokenRef?: {
            key: string;
            secretName: string;
          };
        };
        bitbucket?: {
          api?: string;
          basicAuth?: {
            passwordRef: {
              key: string;
              secretName: string;
            };
            username: string;
          };
          bearerToken?: {
            tokenRef: {
              key: string;
              secretName: string;
            };
          };
          owner: string;
          repo: string;
        };
        bitbucketServer?: {
          api: string;
          basicAuth?: {
            passwordRef: {
              key: string;
              secretName: string;
            };
            username: string;
          };
          bearerToken?: {
            tokenRef: {
              key: string;
              secretName: string;
            };
          };
          caRef?: {
            configMapName: string;
            key: string;
          };
          insecure?: boolean;
          project: string;
          repo: string;
        };
        filters?: {
          branchMatch?: string;
          targetBranchMatch?: string;
        }[];
        gitea?: {
          api: string;
          insecure?: boolean;
          owner: string;
          repo: string;
          tokenRef?: {
            key: string;
            secretName: string;
          };
        };
        github?: {
          api?: string;
          appSecretName?: string;
          labels?: string[];
          owner: string;
          repo: string;
          tokenRef?: {
            key: string;
            secretName: string;
          };
        };
        gitlab?: {
          api?: string;
          caRef?: {
            configMapName: string;
            key: string;
          };
          insecure?: boolean;
          labels?: string[];
          project: string;
          pullRequestState?: string;
          tokenRef?: {
            key: string;
            secretName: string;
          };
        };
        requeueAfterSeconds?: number;
        template?: {
          metadata: {
            annotations?: {
              [k: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [k: string]: string;
            };
            name?: string;
            namespace?: string;
          };
          spec: {
            destination: {
              name?: string;
              namespace?: string;
              server?: string;
            };
            ignoreDifferences?: {
              group?: string;
              jqPathExpressions?: string[];
              jsonPointers?: string[];
              kind: string;
              managedFieldsManagers?: string[];
              name?: string;
              namespace?: string;
            }[];
            info?: {
              name: string;
              value: string;
            }[];
            project: string;
            revisionHistoryLimit?: number;
            source?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            };
            sources?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            }[];
            syncPolicy?: {
              automated?: {
                allowEmpty?: boolean;
                prune?: boolean;
                selfHeal?: boolean;
              };
              managedNamespaceMetadata?: {
                annotations?: {
                  [k: string]: string;
                };
                labels?: {
                  [k: string]: string;
                };
              };
              retry?: {
                backoff?: {
                  duration?: string;
                  factor?: number;
                  maxDuration?: string;
                };
                limit?: number;
              };
              syncOptions?: string[];
            };
          };
        };
      };
      scmProvider?: {
        awsCodeCommit?: {
          allBranches?: boolean;
          region?: string;
          role?: string;
          tagFilters?: {
            key: string;
            value?: string;
          }[];
        };
        azureDevOps?: {
          accessTokenRef: {
            key: string;
            secretName: string;
          };
          allBranches?: boolean;
          api?: string;
          organization: string;
          teamProject: string;
        };
        bitbucket?: {
          allBranches?: boolean;
          appPasswordRef: {
            key: string;
            secretName: string;
          };
          owner: string;
          user: string;
        };
        bitbucketServer?: {
          allBranches?: boolean;
          api: string;
          basicAuth?: {
            passwordRef: {
              key: string;
              secretName: string;
            };
            username: string;
          };
          bearerToken?: {
            tokenRef: {
              key: string;
              secretName: string;
            };
          };
          caRef?: {
            configMapName: string;
            key: string;
          };
          insecure?: boolean;
          project: string;
        };
        cloneProtocol?: string;
        filters?: {
          branchMatch?: string;
          labelMatch?: string;
          pathsDoNotExist?: string[];
          pathsExist?: string[];
          repositoryMatch?: string;
        }[];
        gitea?: {
          allBranches?: boolean;
          api: string;
          insecure?: boolean;
          owner: string;
          tokenRef?: {
            key: string;
            secretName: string;
          };
        };
        github?: {
          allBranches?: boolean;
          api?: string;
          appSecretName?: string;
          organization: string;
          tokenRef?: {
            key: string;
            secretName: string;
          };
        };
        gitlab?: {
          allBranches?: boolean;
          api?: string;
          caRef?: {
            configMapName: string;
            key: string;
          };
          group: string;
          includeSharedProjects?: boolean;
          includeSubgroups?: boolean;
          insecure?: boolean;
          tokenRef?: {
            key: string;
            secretName: string;
          };
          topic?: string;
        };
        requeueAfterSeconds?: number;
        template?: {
          metadata: {
            annotations?: {
              [k: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [k: string]: string;
            };
            name?: string;
            namespace?: string;
          };
          spec: {
            destination: {
              name?: string;
              namespace?: string;
              server?: string;
            };
            ignoreDifferences?: {
              group?: string;
              jqPathExpressions?: string[];
              jsonPointers?: string[];
              kind: string;
              managedFieldsManagers?: string[];
              name?: string;
              namespace?: string;
            }[];
            info?: {
              name: string;
              value: string;
            }[];
            project: string;
            revisionHistoryLimit?: number;
            source?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            };
            sources?: {
              chart?: string;
              directory?: {
                exclude?: string;
                include?: string;
                jsonnet?: {
                  extVars?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                  libs?: string[];
                  tlas?: {
                    code?: boolean;
                    name: string;
                    value: string;
                  }[];
                };
                recurse?: boolean;
              };
              helm?: {
                apiVersions?: string[];
                fileParameters?: {
                  name?: string;
                  path?: string;
                }[];
                ignoreMissingValueFiles?: boolean;
                kubeVersion?: string;
                namespace?: string;
                parameters?: {
                  forceString?: boolean;
                  name?: string;
                  value?: string;
                }[];
                passCredentials?: boolean;
                releaseName?: string;
                skipCrds?: boolean;
                valueFiles?: string[];
                values?: string;
                valuesObject?: {};
                version?: string;
              };
              kustomize?: {
                apiVersions?: string[];
                commonAnnotations?: {
                  [k: string]: string;
                };
                commonAnnotationsEnvsubst?: boolean;
                commonLabels?: {
                  [k: string]: string;
                };
                components?: string[];
                forceCommonAnnotations?: boolean;
                forceCommonLabels?: boolean;
                images?: string[];
                kubeVersion?: string;
                labelWithoutSelector?: boolean;
                namePrefix?: string;
                nameSuffix?: string;
                namespace?: string;
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
                replicas?: {
                  count: number | string;
                  name: string;
                }[];
                version?: string;
              };
              path?: string;
              plugin?: {
                env?: {
                  name: string;
                  value: string;
                }[];
                name?: string;
                parameters?: {
                  array?: string[];
                  map?: {
                    [k: string]: string;
                  };
                  name?: string;
                  string?: string;
                }[];
              };
              ref?: string;
              repoURL: string;
              targetRevision?: string;
            }[];
            syncPolicy?: {
              automated?: {
                allowEmpty?: boolean;
                prune?: boolean;
                selfHeal?: boolean;
              };
              managedNamespaceMetadata?: {
                annotations?: {
                  [k: string]: string;
                };
                labels?: {
                  [k: string]: string;
                };
              };
              retry?: {
                backoff?: {
                  duration?: string;
                  factor?: number;
                  maxDuration?: string;
                };
                limit?: number;
              };
              syncOptions?: string[];
            };
          };
        };
        values?: {
          [k: string]: string;
        };
      };
      selector?: {
        matchExpressions?: {
          key: string;
          operator: string;
          values?: string[];
        }[];
        matchLabels?: {
          [k: string]: string;
        };
      };
    }[];
    goTemplate?: boolean;
    goTemplateOptions?: string[];
    ignoreApplicationDifferences?: {
      jqPathExpressions?: string[];
      jsonPointers?: string[];
      name?: string;
    }[];
    preservedFields?: {
      annotations?: string[];
      labels?: string[];
    };
    strategy?: {
      rollingSync?: {
        steps?: {
          matchExpressions?: {
            key?: string;
            operator?: string;
            values?: string[];
          }[];
          maxUpdate?: number | string;
        }[];
      };
      type?: string;
    };
    syncPolicy?: {
      applicationsSync?: 'create-only' | 'create-update' | 'create-delete' | 'sync';
      preserveResourcesOnDeletion?: boolean;
    };
    template: {
      metadata: {
        annotations?: {
          [k: string]: string;
        };
        finalizers?: string[];
        labels?: {
          [k: string]: string;
        };
        name?: string;
        namespace?: string;
      };
      spec: {
        destination: {
          name?: string;
          namespace?: string;
          server?: string;
        };
        ignoreDifferences?: {
          group?: string;
          jqPathExpressions?: string[];
          jsonPointers?: string[];
          kind: string;
          managedFieldsManagers?: string[];
          name?: string;
          namespace?: string;
        }[];
        info?: {
          name: string;
          value: string;
        }[];
        project: string;
        revisionHistoryLimit?: number;
        source?: {
          chart?: string;
          directory?: {
            exclude?: string;
            include?: string;
            jsonnet?: {
              extVars?: {
                code?: boolean;
                name: string;
                value: string;
              }[];
              libs?: string[];
              tlas?: {
                code?: boolean;
                name: string;
                value: string;
              }[];
            };
            recurse?: boolean;
          };
          helm?: {
            apiVersions?: string[];
            fileParameters?: {
              name?: string;
              path?: string;
            }[];
            ignoreMissingValueFiles?: boolean;
            kubeVersion?: string;
            namespace?: string;
            parameters?: {
              forceString?: boolean;
              name?: string;
              value?: string;
            }[];
            passCredentials?: boolean;
            releaseName?: string;
            skipCrds?: boolean;
            valueFiles?: string[];
            values?: string;
            valuesObject?: {};
            version?: string;
          };
          kustomize?: {
            apiVersions?: string[];
            commonAnnotations?: {
              [k: string]: string;
            };
            commonAnnotationsEnvsubst?: boolean;
            commonLabels?: {
              [k: string]: string;
            };
            components?: string[];
            forceCommonAnnotations?: boolean;
            forceCommonLabels?: boolean;
            images?: string[];
            kubeVersion?: string;
            labelWithoutSelector?: boolean;
            namePrefix?: string;
            nameSuffix?: string;
            namespace?: string;
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
            replicas?: {
              count: number | string;
              name: string;
            }[];
            version?: string;
          };
          path?: string;
          plugin?: {
            env?: {
              name: string;
              value: string;
            }[];
            name?: string;
            parameters?: {
              array?: string[];
              map?: {
                [k: string]: string;
              };
              name?: string;
              string?: string;
            }[];
          };
          ref?: string;
          repoURL: string;
          targetRevision?: string;
        };
        sources?: {
          chart?: string;
          directory?: {
            exclude?: string;
            include?: string;
            jsonnet?: {
              extVars?: {
                code?: boolean;
                name: string;
                value: string;
              }[];
              libs?: string[];
              tlas?: {
                code?: boolean;
                name: string;
                value: string;
              }[];
            };
            recurse?: boolean;
          };
          helm?: {
            apiVersions?: string[];
            fileParameters?: {
              name?: string;
              path?: string;
            }[];
            ignoreMissingValueFiles?: boolean;
            kubeVersion?: string;
            namespace?: string;
            parameters?: {
              forceString?: boolean;
              name?: string;
              value?: string;
            }[];
            passCredentials?: boolean;
            releaseName?: string;
            skipCrds?: boolean;
            valueFiles?: string[];
            values?: string;
            valuesObject?: {};
            version?: string;
          };
          kustomize?: {
            apiVersions?: string[];
            commonAnnotations?: {
              [k: string]: string;
            };
            commonAnnotationsEnvsubst?: boolean;
            commonLabels?: {
              [k: string]: string;
            };
            components?: string[];
            forceCommonAnnotations?: boolean;
            forceCommonLabels?: boolean;
            images?: string[];
            kubeVersion?: string;
            labelWithoutSelector?: boolean;
            namePrefix?: string;
            nameSuffix?: string;
            namespace?: string;
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
            replicas?: {
              count: number | string;
              name: string;
            }[];
            version?: string;
          };
          path?: string;
          plugin?: {
            env?: {
              name: string;
              value: string;
            }[];
            name?: string;
            parameters?: {
              array?: string[];
              map?: {
                [k: string]: string;
              };
              name?: string;
              string?: string;
            }[];
          };
          ref?: string;
          repoURL: string;
          targetRevision?: string;
        }[];
        syncPolicy?: {
          automated?: {
            allowEmpty?: boolean;
            prune?: boolean;
            selfHeal?: boolean;
          };
          managedNamespaceMetadata?: {
            annotations?: {
              [k: string]: string;
            };
            labels?: {
              [k: string]: string;
            };
          };
          retry?: {
            backoff?: {
              duration?: string;
              factor?: number;
              maxDuration?: string;
            };
            limit?: number;
          };
          syncOptions?: string[];
        };
      };
    };
    templatePatch?: string;
  };
}

export class ApplicationSet extends NamespacedApiObject {
  readonly apiVersion = 'argoproj.io/v1alpha1';
  readonly kind = 'ApplicationSet';
  readonly metadata: NamespacedObjectMeta;
  readonly spec: ApplicationSetArgs['spec'];

  constructor(app: K8sApp, name: string, args: ApplicationSetArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
