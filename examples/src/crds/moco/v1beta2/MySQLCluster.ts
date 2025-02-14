import type { K8sApp } from '@k8skonf/core';
import { NamespacedApiObject, type NamespacedObjectMeta } from '@k8skonf/core';

/**
 * MySQLCluster is the Schema for the mysqlclusters A
 */
export interface MySQLClusterArgs {
  readonly metadata?: NamespacedObjectMeta;
  /**
   * MySQLClusterSpec defines the desired state of MySQ
   */
  readonly spec?: {
    /**
     * AgentUseLocalhost configures the mysqld interface
     */
    agentUseLocalhost?: boolean;
    /**
     * The name of BackupPolicy custom resource in the sa
     */
    backupPolicyName?: string;
    /**
     * Collectors is the list of collector flag names of
     */
    collectors?: string[];
    /**
     * DisableSlowQueryLogContainer controls whether to a
     */
    disableSlowQueryLogContainer?: boolean;
    /**
     * LogRotationSchedule specifies the schedule to rota
     */
    logRotationSchedule?: string;
    /**
     * LogRotationSize specifies the size to rotate MySQL
     */
    logRotationSize?: number;
    /**
     * MaxDelaySeconds configures the readiness probe of
     */
    maxDelaySeconds?: number;
    /**
     * MaxDelaySecondsForPodDeletion configures the maxim
     */
    maxDelaySecondsForPodDeletion?: number;
    /**
     * MySQLConfigMapName is a `ConfigMap` name of MySQL
     */
    mysqlConfigMapName?: string;
    /**
     * Offline sets the cluster offline, releasing comput
     */
    offline?: boolean;
    /**
     * PodTemplate is a `Pod` template for MySQL server c
     */
    podTemplate: {
      /**
       * Standard object's metadata.
       */
      metadata?: {
        /**
         * Annotations is a map of string keys and values.
         */
        annotations?: {
          [k: string]: string;
        };
        /**
         * Labels is a map of string keys and values.
         */
        labels?: {
          [k: string]: string;
        };
        /**
         * Name is the name of the object.
         */
        name?: string;
      };
      /**
       * OverwriteContainers overwrites the container defin
       */
      overwriteContainers?: {
        /**
         * Name of the container to overwrite.
         */
        name: 'agent' | 'moco-init' | 'slow-log' | 'mysqld-exporter';
        /**
         * Resources is the container resource to be overwrit
         */
        resources?: {
          claims?: {
            name?: string;
            request?: string;
          }[];
          /**
           * ResourceList is a set of (resource name, quantity)
           */
          limits?: {
            [k: string]: number | string;
          };
          /**
           * ResourceList is a set of (resource name, quantity)
           */
          requests?: {
            [k: string]: number | string;
          };
        };
      }[];
      /**
       * Specification of the desired behavior of the pod.
       */
      spec: {
        activeDeadlineSeconds?: number;
        /**
         * AffinityApplyConfiguration represents a declarativ
         */
        affinity?: {
          /**
           * NodeAffinityApplyConfiguration represents a declar
           */
          nodeAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              /**
               * NodeSelectorTermApplyConfiguration represents a de
               */
              preference?: {
                matchExpressions?: {
                  key?: string;
                  /**
                   * A node selector operator is the set of operators t
                   */
                  operator?: string;
                  values?: string[];
                }[];
                matchFields?: {
                  key?: string;
                  /**
                   * A node selector operator is the set of operators t
                   */
                  operator?: string;
                  values?: string[];
                }[];
              };
              weight?: number;
            }[];
            /**
             * NodeSelectorApplyConfiguration represents a declar
             */
            requiredDuringSchedulingIgnoredDuringExecution?: {
              nodeSelectorTerms?: {
                matchExpressions?: {
                  key?: string;
                  /**
                   * A node selector operator is the set of operators t
                   */
                  operator?: string;
                  values?: string[];
                }[];
                matchFields?: {
                  key?: string;
                  /**
                   * A node selector operator is the set of operators t
                   */
                  operator?: string;
                  values?: string[];
                }[];
              }[];
            };
          };
          /**
           * PodAffinityApplyConfiguration represents a declara
           */
          podAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              /**
               * PodAffinityTermApplyConfiguration represents a dec
               */
              podAffinityTerm?: {
                /**
                 * LabelSelectorApplyConfiguration represents a decla
                 */
                labelSelector?: {
                  matchExpressions?: {
                    key?: string;
                    /**
                     * A label selector operator is the set of operators
                     */
                    operator?: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                };
                matchLabelKeys?: string[];
                mismatchLabelKeys?: string[];
                /**
                 * LabelSelectorApplyConfiguration represents a decla
                 */
                namespaceSelector?: {
                  matchExpressions?: {
                    key?: string;
                    /**
                     * A label selector operator is the set of operators
                     */
                    operator?: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                };
                namespaces?: string[];
                topologyKey?: string;
              };
              weight?: number;
            }[];
            requiredDuringSchedulingIgnoredDuringExecution?: {
              /**
               * LabelSelectorApplyConfiguration represents a decla
               */
              labelSelector?: {
                matchExpressions?: {
                  key?: string;
                  /**
                   * A label selector operator is the set of operators
                   */
                  operator?: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              /**
               * LabelSelectorApplyConfiguration represents a decla
               */
              namespaceSelector?: {
                matchExpressions?: {
                  key?: string;
                  /**
                   * A label selector operator is the set of operators
                   */
                  operator?: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
              };
              namespaces?: string[];
              topologyKey?: string;
            }[];
          };
          /**
           * PodAntiAffinityApplyConfiguration represents a dec
           */
          podAntiAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              /**
               * PodAffinityTermApplyConfiguration represents a dec
               */
              podAffinityTerm?: {
                /**
                 * LabelSelectorApplyConfiguration represents a decla
                 */
                labelSelector?: {
                  matchExpressions?: {
                    key?: string;
                    /**
                     * A label selector operator is the set of operators
                     */
                    operator?: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                };
                matchLabelKeys?: string[];
                mismatchLabelKeys?: string[];
                /**
                 * LabelSelectorApplyConfiguration represents a decla
                 */
                namespaceSelector?: {
                  matchExpressions?: {
                    key?: string;
                    /**
                     * A label selector operator is the set of operators
                     */
                    operator?: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                };
                namespaces?: string[];
                topologyKey?: string;
              };
              weight?: number;
            }[];
            requiredDuringSchedulingIgnoredDuringExecution?: {
              /**
               * LabelSelectorApplyConfiguration represents a decla
               */
              labelSelector?: {
                matchExpressions?: {
                  key?: string;
                  /**
                   * A label selector operator is the set of operators
                   */
                  operator?: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              /**
               * LabelSelectorApplyConfiguration represents a decla
               */
              namespaceSelector?: {
                matchExpressions?: {
                  key?: string;
                  /**
                   * A label selector operator is the set of operators
                   */
                  operator?: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
              };
              namespaces?: string[];
              topologyKey?: string;
            }[];
          };
        };
        automountServiceAccountToken?: boolean;
        containers?: {
          args?: string[];
          command?: string[];
          env?: {
            name?: string;
            value?: string;
            /**
             * EnvVarSourceApplyConfiguration represents a declar
             */
            valueFrom?: {
              /**
               * ConfigMapKeySelectorApplyConfiguration represents
               */
              configMapKeyRef?: {
                key?: string;
                name?: string;
                optional?: boolean;
              };
              /**
               * ObjectFieldSelectorApplyConfiguration represents a
               */
              fieldRef?: {
                apiVersion?: string;
                fieldPath?: string;
              };
              /**
               * ResourceFieldSelectorApplyConfiguration represents
               */
              resourceFieldRef?: {
                containerName?: string;
                divisor?: number | string;
                resource?: string;
              };
              /**
               * SecretKeySelectorApplyConfiguration represents a d
               */
              secretKeyRef?: {
                key?: string;
                name?: string;
                optional?: boolean;
              };
            };
          }[];
          envFrom?: {
            /**
             * ConfigMapEnvSourceApplyConfiguration represents a
             */
            configMapRef?: {
              name?: string;
              optional?: boolean;
            };
            prefix?: string;
            /**
             * SecretEnvSourceApplyConfiguration represents a dec
             */
            secretRef?: {
              name?: string;
              optional?: boolean;
            };
          }[];
          image?: string;
          /**
           * PullPolicy describes a policy for if/when to pull
           */
          imagePullPolicy?: string;
          /**
           * LifecycleApplyConfiguration represents a declarati
           */
          lifecycle?: {
            /**
             * LifecycleHandlerApplyConfiguration represents a de
             */
            postStart?: {
              /**
               * ExecActionApplyConfiguration represents a declarat
               */
              exec?: {
                command?: string[];
              };
              /**
               * HTTPGetActionApplyConfiguration represents a decla
               */
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name?: string;
                  value?: string;
                }[];
                path?: string;
                port?: number | string;
                /**
                 * URIScheme identifies the scheme used for connectio
                 */
                scheme?: string;
              };
              /**
               * SleepActionApplyConfiguration represents a declara
               */
              sleep?: {
                seconds?: number;
              };
              /**
               * TCPSocketActionApplyConfiguration represents a dec
               */
              tcpSocket?: {
                host?: string;
                port?: number | string;
              };
            };
            /**
             * LifecycleHandlerApplyConfiguration represents a de
             */
            preStop?: {
              /**
               * ExecActionApplyConfiguration represents a declarat
               */
              exec?: {
                command?: string[];
              };
              /**
               * HTTPGetActionApplyConfiguration represents a decla
               */
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name?: string;
                  value?: string;
                }[];
                path?: string;
                port?: number | string;
                /**
                 * URIScheme identifies the scheme used for connectio
                 */
                scheme?: string;
              };
              /**
               * SleepActionApplyConfiguration represents a declara
               */
              sleep?: {
                seconds?: number;
              };
              /**
               * TCPSocketActionApplyConfiguration represents a dec
               */
              tcpSocket?: {
                host?: string;
                port?: number | string;
              };
            };
          };
          /**
           * ProbeApplyConfiguration represents a declarative c
           */
          livenessProbe?: {
            /**
             * ExecActionApplyConfiguration represents a declarat
             */
            exec?: {
              command?: string[];
            };
            failureThreshold?: number;
            /**
             * GRPCActionApplyConfiguration represents a declarat
             */
            grpc?: {
              port?: number;
              service?: string;
            };
            /**
             * HTTPGetActionApplyConfiguration represents a decla
             */
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name?: string;
                value?: string;
              }[];
              path?: string;
              port?: number | string;
              /**
               * URIScheme identifies the scheme used for connectio
               */
              scheme?: string;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            /**
             * TCPSocketActionApplyConfiguration represents a dec
             */
            tcpSocket?: {
              host?: string;
              port?: number | string;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
          };
          name?: string;
          ports?: {
            containerPort?: number;
            hostIP?: string;
            hostPort?: number;
            name?: string;
            /**
             * Protocol defines network protocols supported for t
             */
            protocol?: string;
          }[];
          /**
           * ProbeApplyConfiguration represents a declarative c
           */
          readinessProbe?: {
            /**
             * ExecActionApplyConfiguration represents a declarat
             */
            exec?: {
              command?: string[];
            };
            failureThreshold?: number;
            /**
             * GRPCActionApplyConfiguration represents a declarat
             */
            grpc?: {
              port?: number;
              service?: string;
            };
            /**
             * HTTPGetActionApplyConfiguration represents a decla
             */
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name?: string;
                value?: string;
              }[];
              path?: string;
              port?: number | string;
              /**
               * URIScheme identifies the scheme used for connectio
               */
              scheme?: string;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            /**
             * TCPSocketActionApplyConfiguration represents a dec
             */
            tcpSocket?: {
              host?: string;
              port?: number | string;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
          };
          resizePolicy?: {
            /**
             * ResourceName is the name identifying various resou
             */
            resourceName?: string;
            /**
             * ResourceResizeRestartPolicy specifies how to handl
             */
            restartPolicy?: string;
          }[];
          /**
           * ResourceRequirementsApplyConfiguration represents
           */
          resources?: {
            claims?: {
              name?: string;
              request?: string;
            }[];
            /**
             * ResourceList is a set of (resource name, quantity)
             */
            limits?: {
              [k: string]: number | string;
            };
            /**
             * ResourceList is a set of (resource name, quantity)
             */
            requests?: {
              [k: string]: number | string;
            };
          };
          /**
           * ContainerRestartPolicy is the restart policy for a
           */
          restartPolicy?: string;
          /**
           * SecurityContextApplyConfiguration represents a dec
           */
          securityContext?: {
            allowPrivilegeEscalation?: boolean;
            /**
             * AppArmorProfileApplyConfiguration represents a dec
             */
            appArmorProfile?: {
              localhostProfile?: string;
              type?: string;
            };
            /**
             * CapabilitiesApplyConfiguration represents a declar
             */
            capabilities?: {
              add?: string[];
              drop?: string[];
            };
            privileged?: boolean;
            procMount?: string;
            readOnlyRootFilesystem?: boolean;
            runAsGroup?: number;
            runAsNonRoot?: boolean;
            runAsUser?: number;
            /**
             * SELinuxOptionsApplyConfiguration represents a decl
             */
            seLinuxOptions?: {
              level?: string;
              role?: string;
              type?: string;
              user?: string;
            };
            /**
             * SeccompProfileApplyConfiguration represents a decl
             */
            seccompProfile?: {
              localhostProfile?: string;
              /**
               * SeccompProfileType defines the supported seccomp p
               */
              type?: string;
            };
            /**
             * WindowsSecurityContextOptionsApplyConfiguration re
             */
            windowsOptions?: {
              gmsaCredentialSpec?: string;
              gmsaCredentialSpecName?: string;
              hostProcess?: boolean;
              runAsUserName?: string;
            };
          };
          /**
           * ProbeApplyConfiguration represents a declarative c
           */
          startupProbe?: {
            /**
             * ExecActionApplyConfiguration represents a declarat
             */
            exec?: {
              command?: string[];
            };
            failureThreshold?: number;
            /**
             * GRPCActionApplyConfiguration represents a declarat
             */
            grpc?: {
              port?: number;
              service?: string;
            };
            /**
             * HTTPGetActionApplyConfiguration represents a decla
             */
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name?: string;
                value?: string;
              }[];
              path?: string;
              port?: number | string;
              /**
               * URIScheme identifies the scheme used for connectio
               */
              scheme?: string;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            /**
             * TCPSocketActionApplyConfiguration represents a dec
             */
            tcpSocket?: {
              host?: string;
              port?: number | string;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
          };
          stdin?: boolean;
          stdinOnce?: boolean;
          terminationMessagePath?: string;
          /**
           * TerminationMessagePolicy describes how termination
           */
          terminationMessagePolicy?: string;
          tty?: boolean;
          volumeDevices?: {
            devicePath?: string;
            name?: string;
          }[];
          volumeMounts?: {
            mountPath?: string;
            /**
             * MountPropagationMode describes mount propagation.
             */
            mountPropagation?: string;
            name?: string;
            readOnly?: boolean;
            /**
             * RecursiveReadOnlyMode describes recursive-readonly
             */
            recursiveReadOnly?: string;
            subPath?: string;
            subPathExpr?: string;
          }[];
          workingDir?: string;
        }[];
        /**
         * PodDNSConfigApplyConfiguration represents a declar
         */
        dnsConfig?: {
          nameservers?: string[];
          options?: {
            name?: string;
            value?: string;
          }[];
          searches?: string[];
        };
        /**
         * DNSPolicy defines how a pod's DNS will be configur
         */
        dnsPolicy?: string;
        enableServiceLinks?: boolean;
        ephemeralContainers?: {
          args?: string[];
          command?: string[];
          env?: {
            name?: string;
            value?: string;
            /**
             * EnvVarSourceApplyConfiguration represents a declar
             */
            valueFrom?: {
              /**
               * ConfigMapKeySelectorApplyConfiguration represents
               */
              configMapKeyRef?: {
                key?: string;
                name?: string;
                optional?: boolean;
              };
              /**
               * ObjectFieldSelectorApplyConfiguration represents a
               */
              fieldRef?: {
                apiVersion?: string;
                fieldPath?: string;
              };
              /**
               * ResourceFieldSelectorApplyConfiguration represents
               */
              resourceFieldRef?: {
                containerName?: string;
                divisor?: number | string;
                resource?: string;
              };
              /**
               * SecretKeySelectorApplyConfiguration represents a d
               */
              secretKeyRef?: {
                key?: string;
                name?: string;
                optional?: boolean;
              };
            };
          }[];
          envFrom?: {
            /**
             * ConfigMapEnvSourceApplyConfiguration represents a
             */
            configMapRef?: {
              name?: string;
              optional?: boolean;
            };
            prefix?: string;
            /**
             * SecretEnvSourceApplyConfiguration represents a dec
             */
            secretRef?: {
              name?: string;
              optional?: boolean;
            };
          }[];
          image?: string;
          /**
           * PullPolicy describes a policy for if/when to pull
           */
          imagePullPolicy?: string;
          /**
           * LifecycleApplyConfiguration represents a declarati
           */
          lifecycle?: {
            /**
             * LifecycleHandlerApplyConfiguration represents a de
             */
            postStart?: {
              /**
               * ExecActionApplyConfiguration represents a declarat
               */
              exec?: {
                command?: string[];
              };
              /**
               * HTTPGetActionApplyConfiguration represents a decla
               */
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name?: string;
                  value?: string;
                }[];
                path?: string;
                port?: number | string;
                /**
                 * URIScheme identifies the scheme used for connectio
                 */
                scheme?: string;
              };
              /**
               * SleepActionApplyConfiguration represents a declara
               */
              sleep?: {
                seconds?: number;
              };
              /**
               * TCPSocketActionApplyConfiguration represents a dec
               */
              tcpSocket?: {
                host?: string;
                port?: number | string;
              };
            };
            /**
             * LifecycleHandlerApplyConfiguration represents a de
             */
            preStop?: {
              /**
               * ExecActionApplyConfiguration represents a declarat
               */
              exec?: {
                command?: string[];
              };
              /**
               * HTTPGetActionApplyConfiguration represents a decla
               */
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name?: string;
                  value?: string;
                }[];
                path?: string;
                port?: number | string;
                /**
                 * URIScheme identifies the scheme used for connectio
                 */
                scheme?: string;
              };
              /**
               * SleepActionApplyConfiguration represents a declara
               */
              sleep?: {
                seconds?: number;
              };
              /**
               * TCPSocketActionApplyConfiguration represents a dec
               */
              tcpSocket?: {
                host?: string;
                port?: number | string;
              };
            };
          };
          /**
           * ProbeApplyConfiguration represents a declarative c
           */
          livenessProbe?: {
            /**
             * ExecActionApplyConfiguration represents a declarat
             */
            exec?: {
              command?: string[];
            };
            failureThreshold?: number;
            /**
             * GRPCActionApplyConfiguration represents a declarat
             */
            grpc?: {
              port?: number;
              service?: string;
            };
            /**
             * HTTPGetActionApplyConfiguration represents a decla
             */
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name?: string;
                value?: string;
              }[];
              path?: string;
              port?: number | string;
              /**
               * URIScheme identifies the scheme used for connectio
               */
              scheme?: string;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            /**
             * TCPSocketActionApplyConfiguration represents a dec
             */
            tcpSocket?: {
              host?: string;
              port?: number | string;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
          };
          name?: string;
          ports?: {
            containerPort?: number;
            hostIP?: string;
            hostPort?: number;
            name?: string;
            /**
             * Protocol defines network protocols supported for t
             */
            protocol?: string;
          }[];
          /**
           * ProbeApplyConfiguration represents a declarative c
           */
          readinessProbe?: {
            /**
             * ExecActionApplyConfiguration represents a declarat
             */
            exec?: {
              command?: string[];
            };
            failureThreshold?: number;
            /**
             * GRPCActionApplyConfiguration represents a declarat
             */
            grpc?: {
              port?: number;
              service?: string;
            };
            /**
             * HTTPGetActionApplyConfiguration represents a decla
             */
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name?: string;
                value?: string;
              }[];
              path?: string;
              port?: number | string;
              /**
               * URIScheme identifies the scheme used for connectio
               */
              scheme?: string;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            /**
             * TCPSocketActionApplyConfiguration represents a dec
             */
            tcpSocket?: {
              host?: string;
              port?: number | string;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
          };
          resizePolicy?: {
            /**
             * ResourceName is the name identifying various resou
             */
            resourceName?: string;
            /**
             * ResourceResizeRestartPolicy specifies how to handl
             */
            restartPolicy?: string;
          }[];
          /**
           * ResourceRequirementsApplyConfiguration represents
           */
          resources?: {
            claims?: {
              name?: string;
              request?: string;
            }[];
            /**
             * ResourceList is a set of (resource name, quantity)
             */
            limits?: {
              [k: string]: number | string;
            };
            /**
             * ResourceList is a set of (resource name, quantity)
             */
            requests?: {
              [k: string]: number | string;
            };
          };
          /**
           * ContainerRestartPolicy is the restart policy for a
           */
          restartPolicy?: string;
          /**
           * SecurityContextApplyConfiguration represents a dec
           */
          securityContext?: {
            allowPrivilegeEscalation?: boolean;
            /**
             * AppArmorProfileApplyConfiguration represents a dec
             */
            appArmorProfile?: {
              localhostProfile?: string;
              type?: string;
            };
            /**
             * CapabilitiesApplyConfiguration represents a declar
             */
            capabilities?: {
              add?: string[];
              drop?: string[];
            };
            privileged?: boolean;
            procMount?: string;
            readOnlyRootFilesystem?: boolean;
            runAsGroup?: number;
            runAsNonRoot?: boolean;
            runAsUser?: number;
            /**
             * SELinuxOptionsApplyConfiguration represents a decl
             */
            seLinuxOptions?: {
              level?: string;
              role?: string;
              type?: string;
              user?: string;
            };
            /**
             * SeccompProfileApplyConfiguration represents a decl
             */
            seccompProfile?: {
              localhostProfile?: string;
              /**
               * SeccompProfileType defines the supported seccomp p
               */
              type?: string;
            };
            /**
             * WindowsSecurityContextOptionsApplyConfiguration re
             */
            windowsOptions?: {
              gmsaCredentialSpec?: string;
              gmsaCredentialSpecName?: string;
              hostProcess?: boolean;
              runAsUserName?: string;
            };
          };
          /**
           * ProbeApplyConfiguration represents a declarative c
           */
          startupProbe?: {
            /**
             * ExecActionApplyConfiguration represents a declarat
             */
            exec?: {
              command?: string[];
            };
            failureThreshold?: number;
            /**
             * GRPCActionApplyConfiguration represents a declarat
             */
            grpc?: {
              port?: number;
              service?: string;
            };
            /**
             * HTTPGetActionApplyConfiguration represents a decla
             */
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name?: string;
                value?: string;
              }[];
              path?: string;
              port?: number | string;
              /**
               * URIScheme identifies the scheme used for connectio
               */
              scheme?: string;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            /**
             * TCPSocketActionApplyConfiguration represents a dec
             */
            tcpSocket?: {
              host?: string;
              port?: number | string;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
          };
          stdin?: boolean;
          stdinOnce?: boolean;
          targetContainerName?: string;
          terminationMessagePath?: string;
          /**
           * TerminationMessagePolicy describes how termination
           */
          terminationMessagePolicy?: string;
          tty?: boolean;
          volumeDevices?: {
            devicePath?: string;
            name?: string;
          }[];
          volumeMounts?: {
            mountPath?: string;
            /**
             * MountPropagationMode describes mount propagation.
             */
            mountPropagation?: string;
            name?: string;
            readOnly?: boolean;
            /**
             * RecursiveReadOnlyMode describes recursive-readonly
             */
            recursiveReadOnly?: string;
            subPath?: string;
            subPathExpr?: string;
          }[];
          workingDir?: string;
        }[];
        hostAliases?: {
          hostnames?: string[];
          ip?: string;
        }[];
        hostIPC?: boolean;
        hostNetwork?: boolean;
        hostPID?: boolean;
        hostUsers?: boolean;
        hostname?: string;
        imagePullSecrets?: {
          name?: string;
        }[];
        initContainers?: {
          args?: string[];
          command?: string[];
          env?: {
            name?: string;
            value?: string;
            /**
             * EnvVarSourceApplyConfiguration represents a declar
             */
            valueFrom?: {
              /**
               * ConfigMapKeySelectorApplyConfiguration represents
               */
              configMapKeyRef?: {
                key?: string;
                name?: string;
                optional?: boolean;
              };
              /**
               * ObjectFieldSelectorApplyConfiguration represents a
               */
              fieldRef?: {
                apiVersion?: string;
                fieldPath?: string;
              };
              /**
               * ResourceFieldSelectorApplyConfiguration represents
               */
              resourceFieldRef?: {
                containerName?: string;
                divisor?: number | string;
                resource?: string;
              };
              /**
               * SecretKeySelectorApplyConfiguration represents a d
               */
              secretKeyRef?: {
                key?: string;
                name?: string;
                optional?: boolean;
              };
            };
          }[];
          envFrom?: {
            /**
             * ConfigMapEnvSourceApplyConfiguration represents a
             */
            configMapRef?: {
              name?: string;
              optional?: boolean;
            };
            prefix?: string;
            /**
             * SecretEnvSourceApplyConfiguration represents a dec
             */
            secretRef?: {
              name?: string;
              optional?: boolean;
            };
          }[];
          image?: string;
          /**
           * PullPolicy describes a policy for if/when to pull
           */
          imagePullPolicy?: string;
          /**
           * LifecycleApplyConfiguration represents a declarati
           */
          lifecycle?: {
            /**
             * LifecycleHandlerApplyConfiguration represents a de
             */
            postStart?: {
              /**
               * ExecActionApplyConfiguration represents a declarat
               */
              exec?: {
                command?: string[];
              };
              /**
               * HTTPGetActionApplyConfiguration represents a decla
               */
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name?: string;
                  value?: string;
                }[];
                path?: string;
                port?: number | string;
                /**
                 * URIScheme identifies the scheme used for connectio
                 */
                scheme?: string;
              };
              /**
               * SleepActionApplyConfiguration represents a declara
               */
              sleep?: {
                seconds?: number;
              };
              /**
               * TCPSocketActionApplyConfiguration represents a dec
               */
              tcpSocket?: {
                host?: string;
                port?: number | string;
              };
            };
            /**
             * LifecycleHandlerApplyConfiguration represents a de
             */
            preStop?: {
              /**
               * ExecActionApplyConfiguration represents a declarat
               */
              exec?: {
                command?: string[];
              };
              /**
               * HTTPGetActionApplyConfiguration represents a decla
               */
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name?: string;
                  value?: string;
                }[];
                path?: string;
                port?: number | string;
                /**
                 * URIScheme identifies the scheme used for connectio
                 */
                scheme?: string;
              };
              /**
               * SleepActionApplyConfiguration represents a declara
               */
              sleep?: {
                seconds?: number;
              };
              /**
               * TCPSocketActionApplyConfiguration represents a dec
               */
              tcpSocket?: {
                host?: string;
                port?: number | string;
              };
            };
          };
          /**
           * ProbeApplyConfiguration represents a declarative c
           */
          livenessProbe?: {
            /**
             * ExecActionApplyConfiguration represents a declarat
             */
            exec?: {
              command?: string[];
            };
            failureThreshold?: number;
            /**
             * GRPCActionApplyConfiguration represents a declarat
             */
            grpc?: {
              port?: number;
              service?: string;
            };
            /**
             * HTTPGetActionApplyConfiguration represents a decla
             */
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name?: string;
                value?: string;
              }[];
              path?: string;
              port?: number | string;
              /**
               * URIScheme identifies the scheme used for connectio
               */
              scheme?: string;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            /**
             * TCPSocketActionApplyConfiguration represents a dec
             */
            tcpSocket?: {
              host?: string;
              port?: number | string;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
          };
          name?: string;
          ports?: {
            containerPort?: number;
            hostIP?: string;
            hostPort?: number;
            name?: string;
            /**
             * Protocol defines network protocols supported for t
             */
            protocol?: string;
          }[];
          /**
           * ProbeApplyConfiguration represents a declarative c
           */
          readinessProbe?: {
            /**
             * ExecActionApplyConfiguration represents a declarat
             */
            exec?: {
              command?: string[];
            };
            failureThreshold?: number;
            /**
             * GRPCActionApplyConfiguration represents a declarat
             */
            grpc?: {
              port?: number;
              service?: string;
            };
            /**
             * HTTPGetActionApplyConfiguration represents a decla
             */
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name?: string;
                value?: string;
              }[];
              path?: string;
              port?: number | string;
              /**
               * URIScheme identifies the scheme used for connectio
               */
              scheme?: string;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            /**
             * TCPSocketActionApplyConfiguration represents a dec
             */
            tcpSocket?: {
              host?: string;
              port?: number | string;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
          };
          resizePolicy?: {
            /**
             * ResourceName is the name identifying various resou
             */
            resourceName?: string;
            /**
             * ResourceResizeRestartPolicy specifies how to handl
             */
            restartPolicy?: string;
          }[];
          /**
           * ResourceRequirementsApplyConfiguration represents
           */
          resources?: {
            claims?: {
              name?: string;
              request?: string;
            }[];
            /**
             * ResourceList is a set of (resource name, quantity)
             */
            limits?: {
              [k: string]: number | string;
            };
            /**
             * ResourceList is a set of (resource name, quantity)
             */
            requests?: {
              [k: string]: number | string;
            };
          };
          /**
           * ContainerRestartPolicy is the restart policy for a
           */
          restartPolicy?: string;
          /**
           * SecurityContextApplyConfiguration represents a dec
           */
          securityContext?: {
            allowPrivilegeEscalation?: boolean;
            /**
             * AppArmorProfileApplyConfiguration represents a dec
             */
            appArmorProfile?: {
              localhostProfile?: string;
              type?: string;
            };
            /**
             * CapabilitiesApplyConfiguration represents a declar
             */
            capabilities?: {
              add?: string[];
              drop?: string[];
            };
            privileged?: boolean;
            procMount?: string;
            readOnlyRootFilesystem?: boolean;
            runAsGroup?: number;
            runAsNonRoot?: boolean;
            runAsUser?: number;
            /**
             * SELinuxOptionsApplyConfiguration represents a decl
             */
            seLinuxOptions?: {
              level?: string;
              role?: string;
              type?: string;
              user?: string;
            };
            /**
             * SeccompProfileApplyConfiguration represents a decl
             */
            seccompProfile?: {
              localhostProfile?: string;
              /**
               * SeccompProfileType defines the supported seccomp p
               */
              type?: string;
            };
            /**
             * WindowsSecurityContextOptionsApplyConfiguration re
             */
            windowsOptions?: {
              gmsaCredentialSpec?: string;
              gmsaCredentialSpecName?: string;
              hostProcess?: boolean;
              runAsUserName?: string;
            };
          };
          /**
           * ProbeApplyConfiguration represents a declarative c
           */
          startupProbe?: {
            /**
             * ExecActionApplyConfiguration represents a declarat
             */
            exec?: {
              command?: string[];
            };
            failureThreshold?: number;
            /**
             * GRPCActionApplyConfiguration represents a declarat
             */
            grpc?: {
              port?: number;
              service?: string;
            };
            /**
             * HTTPGetActionApplyConfiguration represents a decla
             */
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name?: string;
                value?: string;
              }[];
              path?: string;
              port?: number | string;
              /**
               * URIScheme identifies the scheme used for connectio
               */
              scheme?: string;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            /**
             * TCPSocketActionApplyConfiguration represents a dec
             */
            tcpSocket?: {
              host?: string;
              port?: number | string;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
          };
          stdin?: boolean;
          stdinOnce?: boolean;
          terminationMessagePath?: string;
          /**
           * TerminationMessagePolicy describes how termination
           */
          terminationMessagePolicy?: string;
          tty?: boolean;
          volumeDevices?: {
            devicePath?: string;
            name?: string;
          }[];
          volumeMounts?: {
            mountPath?: string;
            /**
             * MountPropagationMode describes mount propagation.
             */
            mountPropagation?: string;
            name?: string;
            readOnly?: boolean;
            /**
             * RecursiveReadOnlyMode describes recursive-readonly
             */
            recursiveReadOnly?: string;
            subPath?: string;
            subPathExpr?: string;
          }[];
          workingDir?: string;
        }[];
        nodeName?: string;
        nodeSelector?: {
          [k: string]: string;
        };
        /**
         * PodOSApplyConfiguration represents a declarative c
         */
        os?: {
          /**
           * OSName is the set of OS'es that can be used in OS.
           */
          name?: string;
        };
        /**
         * ResourceList is a set of (resource name, quantity)
         */
        overhead?: {
          [k: string]: number | string;
        };
        /**
         * PreemptionPolicy describes a policy for if/when to
         */
        preemptionPolicy?: string;
        priority?: number;
        priorityClassName?: string;
        readinessGates?: {
          /**
           * PodConditionType is a valid value for PodCondition
           */
          conditionType?: string;
        }[];
        resourceClaims?: {
          name?: string;
          resourceClaimName?: string;
          resourceClaimTemplateName?: string;
        }[];
        /**
         * RestartPolicy describes how the container should b
         */
        restartPolicy?: string;
        runtimeClassName?: string;
        schedulerName?: string;
        schedulingGates?: {
          name?: string;
        }[];
        /**
         * PodSecurityContextApplyConfiguration represents a
         */
        securityContext?: {
          /**
           * AppArmorProfileApplyConfiguration represents a dec
           */
          appArmorProfile?: {
            localhostProfile?: string;
            type?: string;
          };
          fsGroup?: number;
          /**
           * PodFSGroupChangePolicy holds policies that will be
           */
          fsGroupChangePolicy?: string;
          runAsGroup?: number;
          runAsNonRoot?: boolean;
          runAsUser?: number;
          /**
           * SELinuxOptionsApplyConfiguration represents a decl
           */
          seLinuxOptions?: {
            level?: string;
            role?: string;
            type?: string;
            user?: string;
          };
          /**
           * SeccompProfileApplyConfiguration represents a decl
           */
          seccompProfile?: {
            localhostProfile?: string;
            /**
             * SeccompProfileType defines the supported seccomp p
             */
            type?: string;
          };
          supplementalGroups?: number[];
          /**
           * SupplementalGroupsPolicy defines how supplemental
           */
          supplementalGroupsPolicy?: string;
          sysctls?: {
            name?: string;
            value?: string;
          }[];
          /**
           * WindowsSecurityContextOptionsApplyConfiguration re
           */
          windowsOptions?: {
            gmsaCredentialSpec?: string;
            gmsaCredentialSpecName?: string;
            hostProcess?: boolean;
            runAsUserName?: string;
          };
        };
        serviceAccount?: string;
        serviceAccountName?: string;
        setHostnameAsFQDN?: boolean;
        shareProcessNamespace?: boolean;
        subdomain?: string;
        terminationGracePeriodSeconds?: number;
        tolerations?: {
          effect?: string;
          key?: string;
          /**
           * A toleration operator is the set of operators that
           */
          operator?: string;
          tolerationSeconds?: number;
          value?: string;
        }[];
        topologySpreadConstraints?: {
          /**
           * LabelSelectorApplyConfiguration represents a decla
           */
          labelSelector?: {
            matchExpressions?: {
              key?: string;
              /**
               * A label selector operator is the set of operators
               */
              operator?: string;
              values?: string[];
            }[];
            matchLabels?: {
              [k: string]: string;
            };
          };
          matchLabelKeys?: string[];
          maxSkew?: number;
          minDomains?: number;
          /**
           * NodeInclusionPolicy defines the type of node inclu
           */
          nodeAffinityPolicy?: string;
          /**
           * NodeInclusionPolicy defines the type of node inclu
           */
          nodeTaintsPolicy?: string;
          topologyKey?: string;
          whenUnsatisfiable?: string;
        }[];
        volumes?: {
          /**
           * AWSElasticBlockStoreVolumeSourceApplyConfiguration
           */
          awsElasticBlockStore?: {
            fsType?: string;
            partition?: number;
            readOnly?: boolean;
            volumeID?: string;
          };
          /**
           * AzureDiskVolumeSourceApplyConfiguration represents
           */
          azureDisk?: {
            cachingMode?: string;
            diskName?: string;
            diskURI?: string;
            fsType?: string;
            kind?: string;
            readOnly?: boolean;
          };
          /**
           * AzureFileVolumeSourceApplyConfiguration represents
           */
          azureFile?: {
            readOnly?: boolean;
            secretName?: string;
            shareName?: string;
          };
          /**
           * CephFSVolumeSourceApplyConfiguration represents a
           */
          cephfs?: {
            monitors?: string[];
            path?: string;
            readOnly?: boolean;
            secretFile?: string;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            user?: string;
          };
          /**
           * CinderVolumeSourceApplyConfiguration represents a
           */
          cinder?: {
            fsType?: string;
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            volumeID?: string;
          };
          /**
           * ConfigMapVolumeSourceApplyConfiguration represents
           */
          configMap?: {
            defaultMode?: number;
            items?: {
              key?: string;
              mode?: number;
              path?: string;
            }[];
            name?: string;
            optional?: boolean;
          };
          /**
           * CSIVolumeSourceApplyConfiguration represents a dec
           */
          csi?: {
            driver?: string;
            fsType?: string;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            nodePublishSecretRef?: {
              name?: string;
            };
            readOnly?: boolean;
            volumeAttributes?: {
              [k: string]: string;
            };
          };
          /**
           * DownwardAPIVolumeSourceApplyConfiguration represen
           */
          downwardAPI?: {
            defaultMode?: number;
            items?: {
              /**
               * ObjectFieldSelectorApplyConfiguration represents a
               */
              fieldRef?: {
                apiVersion?: string;
                fieldPath?: string;
              };
              mode?: number;
              path?: string;
              /**
               * ResourceFieldSelectorApplyConfiguration represents
               */
              resourceFieldRef?: {
                containerName?: string;
                divisor?: number | string;
                resource?: string;
              };
            }[];
          };
          /**
           * EmptyDirVolumeSourceApplyConfiguration represents
           */
          emptyDir?: {
            /**
             * StorageMedium defines ways that storage can be all
             */
            medium?: string;
            sizeLimit?: number | string;
          };
          /**
           * EphemeralVolumeSourceApplyConfiguration represents
           */
          ephemeral?: {
            /**
             * PersistentVolumeClaimTemplateApplyConfiguration re
             */
            volumeClaimTemplate?: {
              /**
               * ObjectMetaApplyConfiguration represents a declarat
               */
              metadata?: {
                annotations?: {
                  [k: string]: string;
                };
                creationTimestamp?: string;
                deletionGracePeriodSeconds?: number;
                deletionTimestamp?: string;
                finalizers?: string[];
                generateName?: string;
                generation?: number;
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
                ownerReferences?: {
                  apiVersion?: string;
                  blockOwnerDeletion?: boolean;
                  controller?: boolean;
                  kind?: string;
                  name?: string;
                  /**
                   * UID is a type that holds unique ID values, includi
                   */
                  uid?: string;
                }[];
                resourceVersion?: string;
                /**
                 * UID is a type that holds unique ID values, includi
                 */
                uid?: string;
              };
              /**
               * PersistentVolumeClaimSpecApplyConfiguration repres
               */
              spec?: {
                accessModes?: string[];
                /**
                 * TypedLocalObjectReferenceApplyConfiguration repres
                 */
                dataSource?: {
                  apiGroup?: string;
                  kind?: string;
                  name?: string;
                };
                /**
                 * TypedObjectReferenceApplyConfiguration represents
                 */
                dataSourceRef?: {
                  apiGroup?: string;
                  kind?: string;
                  name?: string;
                  namespace?: string;
                };
                /**
                 * VolumeResourceRequirementsApplyConfiguration repre
                 */
                resources?: {
                  /**
                   * ResourceList is a set of (resource name, quantity)
                   */
                  limits?: {
                    [k: string]: number | string;
                  };
                  /**
                   * ResourceList is a set of (resource name, quantity)
                   */
                  requests?: {
                    [k: string]: number | string;
                  };
                };
                /**
                 * LabelSelectorApplyConfiguration represents a decla
                 */
                selector?: {
                  matchExpressions?: {
                    key?: string;
                    /**
                     * A label selector operator is the set of operators
                     */
                    operator?: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                };
                storageClassName?: string;
                volumeAttributesClassName?: string;
                /**
                 * PersistentVolumeMode describes how a volume is int
                 */
                volumeMode?: string;
                volumeName?: string;
              };
            };
          };
          /**
           * FCVolumeSourceApplyConfiguration represents a decl
           */
          fc?: {
            fsType?: string;
            lun?: number;
            readOnly?: boolean;
            targetWWNs?: string[];
            wwids?: string[];
          };
          /**
           * FlexVolumeSourceApplyConfiguration represents a de
           */
          flexVolume?: {
            driver?: string;
            fsType?: string;
            options?: {
              [k: string]: string;
            };
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
          };
          /**
           * FlockerVolumeSourceApplyConfiguration represents a
           */
          flocker?: {
            datasetName?: string;
            datasetUUID?: string;
          };
          /**
           * GCEPersistentDiskVolumeSourceApplyConfiguration re
           */
          gcePersistentDisk?: {
            fsType?: string;
            partition?: number;
            pdName?: string;
            readOnly?: boolean;
          };
          /**
           * GitRepoVolumeSourceApplyConfiguration represents a
           */
          gitRepo?: {
            directory?: string;
            repository?: string;
            revision?: string;
          };
          /**
           * GlusterfsVolumeSourceApplyConfiguration represents
           */
          glusterfs?: {
            endpoints?: string;
            path?: string;
            readOnly?: boolean;
          };
          /**
           * HostPathVolumeSourceApplyConfiguration represents
           */
          hostPath?: {
            path?: string;
            type?: string;
          };
          /**
           * ImageVolumeSourceApplyConfiguration represents a d
           */
          image?: {
            /**
             * PullPolicy describes a policy for if/when to pull
             */
            pullPolicy?: string;
            reference?: string;
          };
          /**
           * ISCSIVolumeSourceApplyConfiguration represents a d
           */
          iscsi?: {
            chapAuthDiscovery?: boolean;
            chapAuthSession?: boolean;
            fsType?: string;
            initiatorName?: string;
            iqn?: string;
            iscsiInterface?: string;
            lun?: number;
            portals?: string[];
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            targetPortal?: string;
          };
          name?: string;
          /**
           * NFSVolumeSourceApplyConfiguration represents a dec
           */
          nfs?: {
            path?: string;
            readOnly?: boolean;
            server?: string;
          };
          /**
           * PersistentVolumeClaimVolumeSourceApplyConfiguratio
           */
          persistentVolumeClaim?: {
            claimName?: string;
            readOnly?: boolean;
          };
          /**
           * PhotonPersistentDiskVolumeSourceApplyConfiguration
           */
          photonPersistentDisk?: {
            fsType?: string;
            pdID?: string;
          };
          /**
           * PortworxVolumeSourceApplyConfiguration represents
           */
          portworxVolume?: {
            fsType?: string;
            readOnly?: boolean;
            volumeID?: string;
          };
          /**
           * ProjectedVolumeSourceApplyConfiguration represents
           */
          projected?: {
            defaultMode?: number;
            sources?: {
              /**
               * ClusterTrustBundleProjectionApplyConfiguration rep
               */
              clusterTrustBundle?: {
                /**
                 * LabelSelectorApplyConfiguration represents a decla
                 */
                labelSelector?: {
                  matchExpressions?: {
                    key?: string;
                    /**
                     * A label selector operator is the set of operators
                     */
                    operator?: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                };
                name?: string;
                optional?: boolean;
                path?: string;
                signerName?: string;
              };
              /**
               * ConfigMapProjectionApplyConfiguration represents a
               */
              configMap?: {
                items?: {
                  key?: string;
                  mode?: number;
                  path?: string;
                }[];
                name?: string;
                optional?: boolean;
              };
              /**
               * DownwardAPIProjectionApplyConfiguration represents
               */
              downwardAPI?: {
                items?: {
                  /**
                   * ObjectFieldSelectorApplyConfiguration represents a
                   */
                  fieldRef?: {
                    apiVersion?: string;
                    fieldPath?: string;
                  };
                  mode?: number;
                  path?: string;
                  /**
                   * ResourceFieldSelectorApplyConfiguration represents
                   */
                  resourceFieldRef?: {
                    containerName?: string;
                    divisor?: number | string;
                    resource?: string;
                  };
                }[];
              };
              /**
               * SecretProjectionApplyConfiguration represents a de
               */
              secret?: {
                items?: {
                  key?: string;
                  mode?: number;
                  path?: string;
                }[];
                name?: string;
                optional?: boolean;
              };
              /**
               * ServiceAccountTokenProjectionApplyConfiguration re
               */
              serviceAccountToken?: {
                audience?: string;
                expirationSeconds?: number;
                path?: string;
              };
            }[];
          };
          /**
           * QuobyteVolumeSourceApplyConfiguration represents a
           */
          quobyte?: {
            group?: string;
            readOnly?: boolean;
            registry?: string;
            tenant?: string;
            user?: string;
            volume?: string;
          };
          /**
           * RBDVolumeSourceApplyConfiguration represents a dec
           */
          rbd?: {
            fsType?: string;
            image?: string;
            keyring?: string;
            monitors?: string[];
            pool?: string;
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            user?: string;
          };
          /**
           * ScaleIOVolumeSourceApplyConfiguration represents a
           */
          scaleIO?: {
            fsType?: string;
            gateway?: string;
            protectionDomain?: string;
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            sslEnabled?: boolean;
            storageMode?: string;
            storagePool?: string;
            system?: string;
            volumeName?: string;
          };
          /**
           * SecretVolumeSourceApplyConfiguration represents a
           */
          secret?: {
            defaultMode?: number;
            items?: {
              key?: string;
              mode?: number;
              path?: string;
            }[];
            optional?: boolean;
            secretName?: string;
          };
          /**
           * StorageOSVolumeSourceApplyConfiguration represents
           */
          storageos?: {
            fsType?: string;
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            volumeName?: string;
            volumeNamespace?: string;
          };
          /**
           * VsphereVirtualDiskVolumeSourceApplyConfiguration r
           */
          vsphereVolume?: {
            fsType?: string;
            storagePolicyID?: string;
            storagePolicyName?: string;
            volumePath?: string;
          };
        }[];
      };
    };
    /**
     * PrimaryServiceTemplate is a `Service` template for
     */
    primaryServiceTemplate?: {
      /**
       * Standard object's metadata.
       */
      metadata?: {
        /**
         * Annotations is a map of string keys and values.
         */
        annotations?: {
          [k: string]: string;
        };
        /**
         * Labels is a map of string keys and values.
         */
        labels?: {
          [k: string]: string;
        };
        /**
         * Name is the name of the object.
         */
        name?: string;
      };
      /**
       * Spec is the ServiceSpec
       */
      spec?: {
        allocateLoadBalancerNodePorts?: boolean;
        clusterIP?: string;
        clusterIPs?: string[];
        externalIPs?: string[];
        externalName?: string;
        /**
         * ServiceExternalTrafficPolicy describes how nodes d
         */
        externalTrafficPolicy?: string;
        healthCheckNodePort?: number;
        /**
         * ServiceInternalTrafficPolicy describes how nodes d
         */
        internalTrafficPolicy?: string;
        ipFamilies?: string[];
        /**
         * IPFamilyPolicy represents the dual-stack-ness requ
         */
        ipFamilyPolicy?: string;
        loadBalancerClass?: string;
        loadBalancerIP?: string;
        loadBalancerSourceRanges?: string[];
        ports?: {
          appProtocol?: string;
          name?: string;
          nodePort?: number;
          port?: number;
          /**
           * Protocol defines network protocols supported for t
           */
          protocol?: string;
          targetPort?: number | string;
        }[];
        publishNotReadyAddresses?: boolean;
        selector?: {
          [k: string]: string;
        };
        /**
         * Session Affinity Type string
         */
        sessionAffinity?: string;
        /**
         * SessionAffinityConfigApplyConfiguration represents
         */
        sessionAffinityConfig?: {
          /**
           * ClientIPConfigApplyConfiguration represents a decl
           */
          clientIP?: {
            timeoutSeconds?: number;
          };
        };
        trafficDistribution?: string;
        /**
         * Service Type string describes ingress methods for
         */
        type?: string;
      };
    };
    /**
     * ReplicaServiceTemplate is a `Service` template for
     */
    replicaServiceTemplate?: {
      /**
       * Standard object's metadata.
       */
      metadata?: {
        /**
         * Annotations is a map of string keys and values.
         */
        annotations?: {
          [k: string]: string;
        };
        /**
         * Labels is a map of string keys and values.
         */
        labels?: {
          [k: string]: string;
        };
        /**
         * Name is the name of the object.
         */
        name?: string;
      };
      /**
       * Spec is the ServiceSpec
       */
      spec?: {
        allocateLoadBalancerNodePorts?: boolean;
        clusterIP?: string;
        clusterIPs?: string[];
        externalIPs?: string[];
        externalName?: string;
        /**
         * ServiceExternalTrafficPolicy describes how nodes d
         */
        externalTrafficPolicy?: string;
        healthCheckNodePort?: number;
        /**
         * ServiceInternalTrafficPolicy describes how nodes d
         */
        internalTrafficPolicy?: string;
        ipFamilies?: string[];
        /**
         * IPFamilyPolicy represents the dual-stack-ness requ
         */
        ipFamilyPolicy?: string;
        loadBalancerClass?: string;
        loadBalancerIP?: string;
        loadBalancerSourceRanges?: string[];
        ports?: {
          appProtocol?: string;
          name?: string;
          nodePort?: number;
          port?: number;
          /**
           * Protocol defines network protocols supported for t
           */
          protocol?: string;
          targetPort?: number | string;
        }[];
        publishNotReadyAddresses?: boolean;
        selector?: {
          [k: string]: string;
        };
        /**
         * Session Affinity Type string
         */
        sessionAffinity?: string;
        /**
         * SessionAffinityConfigApplyConfiguration represents
         */
        sessionAffinityConfig?: {
          /**
           * ClientIPConfigApplyConfiguration represents a decl
           */
          clientIP?: {
            timeoutSeconds?: number;
          };
        };
        trafficDistribution?: string;
        /**
         * Service Type string describes ingress methods for
         */
        type?: string;
      };
    };
    /**
     * Replicas is the number of instances.
     */
    replicas?: number;
    /**
     * ReplicationSourceSecretName is a `Secret` name whi
     */
    replicationSourceSecretName?: string;
    /**
     * Restore is the specification to perform Point-in-T
     */
    restore?: {
      /**
       * Specifies parameters for restore Pod.
       */
      jobConfig: {
        /**
         * If specified, the pod's scheduling constraints.
         */
        affinity?: {
          /**
           * NodeAffinityApplyConfiguration represents a declar
           */
          nodeAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              /**
               * NodeSelectorTermApplyConfiguration represents a de
               */
              preference?: {
                matchExpressions?: {
                  key?: string;
                  /**
                   * A node selector operator is the set of operators t
                   */
                  operator?: string;
                  values?: string[];
                }[];
                matchFields?: {
                  key?: string;
                  /**
                   * A node selector operator is the set of operators t
                   */
                  operator?: string;
                  values?: string[];
                }[];
              };
              weight?: number;
            }[];
            /**
             * NodeSelectorApplyConfiguration represents a declar
             */
            requiredDuringSchedulingIgnoredDuringExecution?: {
              nodeSelectorTerms?: {
                matchExpressions?: {
                  key?: string;
                  /**
                   * A node selector operator is the set of operators t
                   */
                  operator?: string;
                  values?: string[];
                }[];
                matchFields?: {
                  key?: string;
                  /**
                   * A node selector operator is the set of operators t
                   */
                  operator?: string;
                  values?: string[];
                }[];
              }[];
            };
          };
          /**
           * PodAffinityApplyConfiguration represents a declara
           */
          podAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              /**
               * PodAffinityTermApplyConfiguration represents a dec
               */
              podAffinityTerm?: {
                /**
                 * LabelSelectorApplyConfiguration represents a decla
                 */
                labelSelector?: {
                  matchExpressions?: {
                    key?: string;
                    /**
                     * A label selector operator is the set of operators
                     */
                    operator?: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                };
                matchLabelKeys?: string[];
                mismatchLabelKeys?: string[];
                /**
                 * LabelSelectorApplyConfiguration represents a decla
                 */
                namespaceSelector?: {
                  matchExpressions?: {
                    key?: string;
                    /**
                     * A label selector operator is the set of operators
                     */
                    operator?: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                };
                namespaces?: string[];
                topologyKey?: string;
              };
              weight?: number;
            }[];
            requiredDuringSchedulingIgnoredDuringExecution?: {
              /**
               * LabelSelectorApplyConfiguration represents a decla
               */
              labelSelector?: {
                matchExpressions?: {
                  key?: string;
                  /**
                   * A label selector operator is the set of operators
                   */
                  operator?: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              /**
               * LabelSelectorApplyConfiguration represents a decla
               */
              namespaceSelector?: {
                matchExpressions?: {
                  key?: string;
                  /**
                   * A label selector operator is the set of operators
                   */
                  operator?: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
              };
              namespaces?: string[];
              topologyKey?: string;
            }[];
          };
          /**
           * PodAntiAffinityApplyConfiguration represents a dec
           */
          podAntiAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              /**
               * PodAffinityTermApplyConfiguration represents a dec
               */
              podAffinityTerm?: {
                /**
                 * LabelSelectorApplyConfiguration represents a decla
                 */
                labelSelector?: {
                  matchExpressions?: {
                    key?: string;
                    /**
                     * A label selector operator is the set of operators
                     */
                    operator?: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                };
                matchLabelKeys?: string[];
                mismatchLabelKeys?: string[];
                /**
                 * LabelSelectorApplyConfiguration represents a decla
                 */
                namespaceSelector?: {
                  matchExpressions?: {
                    key?: string;
                    /**
                     * A label selector operator is the set of operators
                     */
                    operator?: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                };
                namespaces?: string[];
                topologyKey?: string;
              };
              weight?: number;
            }[];
            requiredDuringSchedulingIgnoredDuringExecution?: {
              /**
               * LabelSelectorApplyConfiguration represents a decla
               */
              labelSelector?: {
                matchExpressions?: {
                  key?: string;
                  /**
                   * A label selector operator is the set of operators
                   */
                  operator?: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              /**
               * LabelSelectorApplyConfiguration represents a decla
               */
              namespaceSelector?: {
                matchExpressions?: {
                  key?: string;
                  /**
                   * A label selector operator is the set of operators
                   */
                  operator?: string;
                  values?: string[];
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
              };
              namespaces?: string[];
              topologyKey?: string;
            }[];
          };
        };
        /**
         * Specifies how to access an object storage bucket.
         */
        bucketConfig: {
          /**
           * BackendType is an identifier for the object storag
           */
          backendType?: 's3' | 'gcs';
          /**
           * The name of the bucket
           */
          bucketName: string;
          /**
           * Path to SSL CA certificate file used in addition t
           */
          caCert?: string;
          /**
           * The API endpoint URL.
           */
          endpointURL?: string;
          /**
           * The region of the bucket.
           */
          region?: string;
          /**
           * Allows you to enable the client to use path-style
           */
          usePathStyle?: boolean;
        };
        /**
         * CPU is the amount of CPU requested for the Pod.
         */
        cpu?: number | string;
        /**
         * List of environment variables to set in the contai
         */
        env?: {
          name?: string;
          value?: string;
          /**
           * EnvVarSourceApplyConfiguration represents a declar
           */
          valueFrom?: {
            /**
             * ConfigMapKeySelectorApplyConfiguration represents
             */
            configMapKeyRef?: {
              key?: string;
              name?: string;
              optional?: boolean;
            };
            /**
             * ObjectFieldSelectorApplyConfiguration represents a
             */
            fieldRef?: {
              apiVersion?: string;
              fieldPath?: string;
            };
            /**
             * ResourceFieldSelectorApplyConfiguration represents
             */
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource?: string;
            };
            /**
             * SecretKeySelectorApplyConfiguration represents a d
             */
            secretKeyRef?: {
              key?: string;
              name?: string;
              optional?: boolean;
            };
          };
        }[];
        /**
         * List of sources to populate environment variables
         */
        envFrom?: {
          /**
           * ConfigMapEnvSourceApplyConfiguration represents a
           */
          configMapRef?: {
            name?: string;
            optional?: boolean;
          };
          prefix?: string;
          /**
           * SecretEnvSourceApplyConfiguration represents a dec
           */
          secretRef?: {
            name?: string;
            optional?: boolean;
          };
        }[];
        /**
         * MaxCPU is the amount of maximum CPU for the Pod.
         */
        maxCpu?: number | string;
        /**
         * MaxMemory is the amount of maximum memory for the
         */
        maxMemory?: number | string;
        /**
         * Memory is the amount of memory requested for the P
         */
        memory?: number | string;
        /**
         * ServiceAccountName specifies the ServiceAccount to
         */
        serviceAccountName: string;
        /**
         * Threads is the number of threads used for backup o
         */
        threads?: number;
        /**
         * VolumeMounts describes a list of volume mounts tha
         */
        volumeMounts?: {
          mountPath?: string;
          /**
           * MountPropagationMode describes mount propagation.
           */
          mountPropagation?: string;
          name?: string;
          readOnly?: boolean;
          /**
           * RecursiveReadOnlyMode describes recursive-readonly
           */
          recursiveReadOnly?: string;
          subPath?: string;
          subPathExpr?: string;
        }[];
        /**
         * Volumes defines the list of volumes that can be mo
         */
        volumes?: {
          /**
           * AWSElasticBlockStoreVolumeSourceApplyConfiguration
           */
          awsElasticBlockStore?: {
            fsType?: string;
            partition?: number;
            readOnly?: boolean;
            volumeID?: string;
          };
          /**
           * AzureDiskVolumeSourceApplyConfiguration represents
           */
          azureDisk?: {
            cachingMode?: string;
            diskName?: string;
            diskURI?: string;
            fsType?: string;
            kind?: string;
            readOnly?: boolean;
          };
          /**
           * AzureFileVolumeSourceApplyConfiguration represents
           */
          azureFile?: {
            readOnly?: boolean;
            secretName?: string;
            shareName?: string;
          };
          /**
           * CephFSVolumeSourceApplyConfiguration represents a
           */
          cephfs?: {
            monitors?: string[];
            path?: string;
            readOnly?: boolean;
            secretFile?: string;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            user?: string;
          };
          /**
           * CinderVolumeSourceApplyConfiguration represents a
           */
          cinder?: {
            fsType?: string;
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            volumeID?: string;
          };
          /**
           * ConfigMapVolumeSourceApplyConfiguration represents
           */
          configMap?: {
            defaultMode?: number;
            items?: {
              key?: string;
              mode?: number;
              path?: string;
            }[];
            name?: string;
            optional?: boolean;
          };
          /**
           * CSIVolumeSourceApplyConfiguration represents a dec
           */
          csi?: {
            driver?: string;
            fsType?: string;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            nodePublishSecretRef?: {
              name?: string;
            };
            readOnly?: boolean;
            volumeAttributes?: {
              [k: string]: string;
            };
          };
          /**
           * DownwardAPIVolumeSourceApplyConfiguration represen
           */
          downwardAPI?: {
            defaultMode?: number;
            items?: {
              /**
               * ObjectFieldSelectorApplyConfiguration represents a
               */
              fieldRef?: {
                apiVersion?: string;
                fieldPath?: string;
              };
              mode?: number;
              path?: string;
              /**
               * ResourceFieldSelectorApplyConfiguration represents
               */
              resourceFieldRef?: {
                containerName?: string;
                divisor?: number | string;
                resource?: string;
              };
            }[];
          };
          /**
           * EmptyDirVolumeSourceApplyConfiguration represents
           */
          emptyDir?: {
            /**
             * StorageMedium defines ways that storage can be all
             */
            medium?: string;
            sizeLimit?: number | string;
          };
          /**
           * EphemeralVolumeSourceApplyConfiguration represents
           */
          ephemeral?: {
            /**
             * PersistentVolumeClaimTemplateApplyConfiguration re
             */
            volumeClaimTemplate?: {
              /**
               * ObjectMetaApplyConfiguration represents a declarat
               */
              metadata?: {
                annotations?: {
                  [k: string]: string;
                };
                creationTimestamp?: string;
                deletionGracePeriodSeconds?: number;
                deletionTimestamp?: string;
                finalizers?: string[];
                generateName?: string;
                generation?: number;
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
                ownerReferences?: {
                  apiVersion?: string;
                  blockOwnerDeletion?: boolean;
                  controller?: boolean;
                  kind?: string;
                  name?: string;
                  /**
                   * UID is a type that holds unique ID values, includi
                   */
                  uid?: string;
                }[];
                resourceVersion?: string;
                /**
                 * UID is a type that holds unique ID values, includi
                 */
                uid?: string;
              };
              /**
               * PersistentVolumeClaimSpecApplyConfiguration repres
               */
              spec?: {
                accessModes?: string[];
                /**
                 * TypedLocalObjectReferenceApplyConfiguration repres
                 */
                dataSource?: {
                  apiGroup?: string;
                  kind?: string;
                  name?: string;
                };
                /**
                 * TypedObjectReferenceApplyConfiguration represents
                 */
                dataSourceRef?: {
                  apiGroup?: string;
                  kind?: string;
                  name?: string;
                  namespace?: string;
                };
                /**
                 * VolumeResourceRequirementsApplyConfiguration repre
                 */
                resources?: {
                  /**
                   * ResourceList is a set of (resource name, quantity)
                   */
                  limits?: {
                    [k: string]: number | string;
                  };
                  /**
                   * ResourceList is a set of (resource name, quantity)
                   */
                  requests?: {
                    [k: string]: number | string;
                  };
                };
                /**
                 * LabelSelectorApplyConfiguration represents a decla
                 */
                selector?: {
                  matchExpressions?: {
                    key?: string;
                    /**
                     * A label selector operator is the set of operators
                     */
                    operator?: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                };
                storageClassName?: string;
                volumeAttributesClassName?: string;
                /**
                 * PersistentVolumeMode describes how a volume is int
                 */
                volumeMode?: string;
                volumeName?: string;
              };
            };
          };
          /**
           * FCVolumeSourceApplyConfiguration represents a decl
           */
          fc?: {
            fsType?: string;
            lun?: number;
            readOnly?: boolean;
            targetWWNs?: string[];
            wwids?: string[];
          };
          /**
           * FlexVolumeSourceApplyConfiguration represents a de
           */
          flexVolume?: {
            driver?: string;
            fsType?: string;
            options?: {
              [k: string]: string;
            };
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
          };
          /**
           * FlockerVolumeSourceApplyConfiguration represents a
           */
          flocker?: {
            datasetName?: string;
            datasetUUID?: string;
          };
          /**
           * GCEPersistentDiskVolumeSourceApplyConfiguration re
           */
          gcePersistentDisk?: {
            fsType?: string;
            partition?: number;
            pdName?: string;
            readOnly?: boolean;
          };
          /**
           * GitRepoVolumeSourceApplyConfiguration represents a
           */
          gitRepo?: {
            directory?: string;
            repository?: string;
            revision?: string;
          };
          /**
           * GlusterfsVolumeSourceApplyConfiguration represents
           */
          glusterfs?: {
            endpoints?: string;
            path?: string;
            readOnly?: boolean;
          };
          /**
           * HostPathVolumeSourceApplyConfiguration represents
           */
          hostPath?: {
            path?: string;
            type?: string;
          };
          /**
           * ImageVolumeSourceApplyConfiguration represents a d
           */
          image?: {
            /**
             * PullPolicy describes a policy for if/when to pull
             */
            pullPolicy?: string;
            reference?: string;
          };
          /**
           * ISCSIVolumeSourceApplyConfiguration represents a d
           */
          iscsi?: {
            chapAuthDiscovery?: boolean;
            chapAuthSession?: boolean;
            fsType?: string;
            initiatorName?: string;
            iqn?: string;
            iscsiInterface?: string;
            lun?: number;
            portals?: string[];
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            targetPortal?: string;
          };
          name?: string;
          /**
           * NFSVolumeSourceApplyConfiguration represents a dec
           */
          nfs?: {
            path?: string;
            readOnly?: boolean;
            server?: string;
          };
          /**
           * PersistentVolumeClaimVolumeSourceApplyConfiguratio
           */
          persistentVolumeClaim?: {
            claimName?: string;
            readOnly?: boolean;
          };
          /**
           * PhotonPersistentDiskVolumeSourceApplyConfiguration
           */
          photonPersistentDisk?: {
            fsType?: string;
            pdID?: string;
          };
          /**
           * PortworxVolumeSourceApplyConfiguration represents
           */
          portworxVolume?: {
            fsType?: string;
            readOnly?: boolean;
            volumeID?: string;
          };
          /**
           * ProjectedVolumeSourceApplyConfiguration represents
           */
          projected?: {
            defaultMode?: number;
            sources?: {
              /**
               * ClusterTrustBundleProjectionApplyConfiguration rep
               */
              clusterTrustBundle?: {
                /**
                 * LabelSelectorApplyConfiguration represents a decla
                 */
                labelSelector?: {
                  matchExpressions?: {
                    key?: string;
                    /**
                     * A label selector operator is the set of operators
                     */
                    operator?: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                };
                name?: string;
                optional?: boolean;
                path?: string;
                signerName?: string;
              };
              /**
               * ConfigMapProjectionApplyConfiguration represents a
               */
              configMap?: {
                items?: {
                  key?: string;
                  mode?: number;
                  path?: string;
                }[];
                name?: string;
                optional?: boolean;
              };
              /**
               * DownwardAPIProjectionApplyConfiguration represents
               */
              downwardAPI?: {
                items?: {
                  /**
                   * ObjectFieldSelectorApplyConfiguration represents a
                   */
                  fieldRef?: {
                    apiVersion?: string;
                    fieldPath?: string;
                  };
                  mode?: number;
                  path?: string;
                  /**
                   * ResourceFieldSelectorApplyConfiguration represents
                   */
                  resourceFieldRef?: {
                    containerName?: string;
                    divisor?: number | string;
                    resource?: string;
                  };
                }[];
              };
              /**
               * SecretProjectionApplyConfiguration represents a de
               */
              secret?: {
                items?: {
                  key?: string;
                  mode?: number;
                  path?: string;
                }[];
                name?: string;
                optional?: boolean;
              };
              /**
               * ServiceAccountTokenProjectionApplyConfiguration re
               */
              serviceAccountToken?: {
                audience?: string;
                expirationSeconds?: number;
                path?: string;
              };
            }[];
          };
          /**
           * QuobyteVolumeSourceApplyConfiguration represents a
           */
          quobyte?: {
            group?: string;
            readOnly?: boolean;
            registry?: string;
            tenant?: string;
            user?: string;
            volume?: string;
          };
          /**
           * RBDVolumeSourceApplyConfiguration represents a dec
           */
          rbd?: {
            fsType?: string;
            image?: string;
            keyring?: string;
            monitors?: string[];
            pool?: string;
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            user?: string;
          };
          /**
           * ScaleIOVolumeSourceApplyConfiguration represents a
           */
          scaleIO?: {
            fsType?: string;
            gateway?: string;
            protectionDomain?: string;
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            sslEnabled?: boolean;
            storageMode?: string;
            storagePool?: string;
            system?: string;
            volumeName?: string;
          };
          /**
           * SecretVolumeSourceApplyConfiguration represents a
           */
          secret?: {
            defaultMode?: number;
            items?: {
              key?: string;
              mode?: number;
              path?: string;
            }[];
            optional?: boolean;
            secretName?: string;
          };
          /**
           * StorageOSVolumeSourceApplyConfiguration represents
           */
          storageos?: {
            fsType?: string;
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            volumeName?: string;
            volumeNamespace?: string;
          };
          /**
           * VsphereVirtualDiskVolumeSourceApplyConfiguration r
           */
          vsphereVolume?: {
            fsType?: string;
            storagePolicyID?: string;
            storagePolicyName?: string;
            volumePath?: string;
          };
        }[];
        /**
         * WorkVolume is the volume source for the working di
         */
        workVolume: {
          /**
           * AWSElasticBlockStoreVolumeSourceApplyConfiguration
           */
          awsElasticBlockStore?: {
            fsType?: string;
            partition?: number;
            readOnly?: boolean;
            volumeID?: string;
          };
          /**
           * AzureDiskVolumeSourceApplyConfiguration represents
           */
          azureDisk?: {
            cachingMode?: string;
            diskName?: string;
            diskURI?: string;
            fsType?: string;
            kind?: string;
            readOnly?: boolean;
          };
          /**
           * AzureFileVolumeSourceApplyConfiguration represents
           */
          azureFile?: {
            readOnly?: boolean;
            secretName?: string;
            shareName?: string;
          };
          /**
           * CephFSVolumeSourceApplyConfiguration represents a
           */
          cephfs?: {
            monitors?: string[];
            path?: string;
            readOnly?: boolean;
            secretFile?: string;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            user?: string;
          };
          /**
           * CinderVolumeSourceApplyConfiguration represents a
           */
          cinder?: {
            fsType?: string;
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            volumeID?: string;
          };
          /**
           * ConfigMapVolumeSourceApplyConfiguration represents
           */
          configMap?: {
            defaultMode?: number;
            items?: {
              key?: string;
              mode?: number;
              path?: string;
            }[];
            name?: string;
            optional?: boolean;
          };
          /**
           * CSIVolumeSourceApplyConfiguration represents a dec
           */
          csi?: {
            driver?: string;
            fsType?: string;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            nodePublishSecretRef?: {
              name?: string;
            };
            readOnly?: boolean;
            volumeAttributes?: {
              [k: string]: string;
            };
          };
          /**
           * DownwardAPIVolumeSourceApplyConfiguration represen
           */
          downwardAPI?: {
            defaultMode?: number;
            items?: {
              /**
               * ObjectFieldSelectorApplyConfiguration represents a
               */
              fieldRef?: {
                apiVersion?: string;
                fieldPath?: string;
              };
              mode?: number;
              path?: string;
              /**
               * ResourceFieldSelectorApplyConfiguration represents
               */
              resourceFieldRef?: {
                containerName?: string;
                divisor?: number | string;
                resource?: string;
              };
            }[];
          };
          /**
           * EmptyDirVolumeSourceApplyConfiguration represents
           */
          emptyDir?: {
            /**
             * StorageMedium defines ways that storage can be all
             */
            medium?: string;
            sizeLimit?: number | string;
          };
          /**
           * EphemeralVolumeSourceApplyConfiguration represents
           */
          ephemeral?: {
            /**
             * PersistentVolumeClaimTemplateApplyConfiguration re
             */
            volumeClaimTemplate?: {
              /**
               * ObjectMetaApplyConfiguration represents a declarat
               */
              metadata?: {
                annotations?: {
                  [k: string]: string;
                };
                creationTimestamp?: string;
                deletionGracePeriodSeconds?: number;
                deletionTimestamp?: string;
                finalizers?: string[];
                generateName?: string;
                generation?: number;
                labels?: {
                  [k: string]: string;
                };
                name?: string;
                namespace?: string;
                ownerReferences?: {
                  apiVersion?: string;
                  blockOwnerDeletion?: boolean;
                  controller?: boolean;
                  kind?: string;
                  name?: string;
                  /**
                   * UID is a type that holds unique ID values, includi
                   */
                  uid?: string;
                }[];
                resourceVersion?: string;
                /**
                 * UID is a type that holds unique ID values, includi
                 */
                uid?: string;
              };
              /**
               * PersistentVolumeClaimSpecApplyConfiguration repres
               */
              spec?: {
                accessModes?: string[];
                /**
                 * TypedLocalObjectReferenceApplyConfiguration repres
                 */
                dataSource?: {
                  apiGroup?: string;
                  kind?: string;
                  name?: string;
                };
                /**
                 * TypedObjectReferenceApplyConfiguration represents
                 */
                dataSourceRef?: {
                  apiGroup?: string;
                  kind?: string;
                  name?: string;
                  namespace?: string;
                };
                /**
                 * VolumeResourceRequirementsApplyConfiguration repre
                 */
                resources?: {
                  /**
                   * ResourceList is a set of (resource name, quantity)
                   */
                  limits?: {
                    [k: string]: number | string;
                  };
                  /**
                   * ResourceList is a set of (resource name, quantity)
                   */
                  requests?: {
                    [k: string]: number | string;
                  };
                };
                /**
                 * LabelSelectorApplyConfiguration represents a decla
                 */
                selector?: {
                  matchExpressions?: {
                    key?: string;
                    /**
                     * A label selector operator is the set of operators
                     */
                    operator?: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                };
                storageClassName?: string;
                volumeAttributesClassName?: string;
                /**
                 * PersistentVolumeMode describes how a volume is int
                 */
                volumeMode?: string;
                volumeName?: string;
              };
            };
          };
          /**
           * FCVolumeSourceApplyConfiguration represents a decl
           */
          fc?: {
            fsType?: string;
            lun?: number;
            readOnly?: boolean;
            targetWWNs?: string[];
            wwids?: string[];
          };
          /**
           * FlexVolumeSourceApplyConfiguration represents a de
           */
          flexVolume?: {
            driver?: string;
            fsType?: string;
            options?: {
              [k: string]: string;
            };
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
          };
          /**
           * FlockerVolumeSourceApplyConfiguration represents a
           */
          flocker?: {
            datasetName?: string;
            datasetUUID?: string;
          };
          /**
           * GCEPersistentDiskVolumeSourceApplyConfiguration re
           */
          gcePersistentDisk?: {
            fsType?: string;
            partition?: number;
            pdName?: string;
            readOnly?: boolean;
          };
          /**
           * GitRepoVolumeSourceApplyConfiguration represents a
           */
          gitRepo?: {
            directory?: string;
            repository?: string;
            revision?: string;
          };
          /**
           * GlusterfsVolumeSourceApplyConfiguration represents
           */
          glusterfs?: {
            endpoints?: string;
            path?: string;
            readOnly?: boolean;
          };
          /**
           * HostPathVolumeSourceApplyConfiguration represents
           */
          hostPath?: {
            path?: string;
            type?: string;
          };
          /**
           * ImageVolumeSourceApplyConfiguration represents a d
           */
          image?: {
            /**
             * PullPolicy describes a policy for if/when to pull
             */
            pullPolicy?: string;
            reference?: string;
          };
          /**
           * ISCSIVolumeSourceApplyConfiguration represents a d
           */
          iscsi?: {
            chapAuthDiscovery?: boolean;
            chapAuthSession?: boolean;
            fsType?: string;
            initiatorName?: string;
            iqn?: string;
            iscsiInterface?: string;
            lun?: number;
            portals?: string[];
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            targetPortal?: string;
          };
          /**
           * NFSVolumeSourceApplyConfiguration represents a dec
           */
          nfs?: {
            path?: string;
            readOnly?: boolean;
            server?: string;
          };
          /**
           * PersistentVolumeClaimVolumeSourceApplyConfiguratio
           */
          persistentVolumeClaim?: {
            claimName?: string;
            readOnly?: boolean;
          };
          /**
           * PhotonPersistentDiskVolumeSourceApplyConfiguration
           */
          photonPersistentDisk?: {
            fsType?: string;
            pdID?: string;
          };
          /**
           * PortworxVolumeSourceApplyConfiguration represents
           */
          portworxVolume?: {
            fsType?: string;
            readOnly?: boolean;
            volumeID?: string;
          };
          /**
           * ProjectedVolumeSourceApplyConfiguration represents
           */
          projected?: {
            defaultMode?: number;
            sources?: {
              /**
               * ClusterTrustBundleProjectionApplyConfiguration rep
               */
              clusterTrustBundle?: {
                /**
                 * LabelSelectorApplyConfiguration represents a decla
                 */
                labelSelector?: {
                  matchExpressions?: {
                    key?: string;
                    /**
                     * A label selector operator is the set of operators
                     */
                    operator?: string;
                    values?: string[];
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                };
                name?: string;
                optional?: boolean;
                path?: string;
                signerName?: string;
              };
              /**
               * ConfigMapProjectionApplyConfiguration represents a
               */
              configMap?: {
                items?: {
                  key?: string;
                  mode?: number;
                  path?: string;
                }[];
                name?: string;
                optional?: boolean;
              };
              /**
               * DownwardAPIProjectionApplyConfiguration represents
               */
              downwardAPI?: {
                items?: {
                  /**
                   * ObjectFieldSelectorApplyConfiguration represents a
                   */
                  fieldRef?: {
                    apiVersion?: string;
                    fieldPath?: string;
                  };
                  mode?: number;
                  path?: string;
                  /**
                   * ResourceFieldSelectorApplyConfiguration represents
                   */
                  resourceFieldRef?: {
                    containerName?: string;
                    divisor?: number | string;
                    resource?: string;
                  };
                }[];
              };
              /**
               * SecretProjectionApplyConfiguration represents a de
               */
              secret?: {
                items?: {
                  key?: string;
                  mode?: number;
                  path?: string;
                }[];
                name?: string;
                optional?: boolean;
              };
              /**
               * ServiceAccountTokenProjectionApplyConfiguration re
               */
              serviceAccountToken?: {
                audience?: string;
                expirationSeconds?: number;
                path?: string;
              };
            }[];
          };
          /**
           * QuobyteVolumeSourceApplyConfiguration represents a
           */
          quobyte?: {
            group?: string;
            readOnly?: boolean;
            registry?: string;
            tenant?: string;
            user?: string;
            volume?: string;
          };
          /**
           * RBDVolumeSourceApplyConfiguration represents a dec
           */
          rbd?: {
            fsType?: string;
            image?: string;
            keyring?: string;
            monitors?: string[];
            pool?: string;
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            user?: string;
          };
          /**
           * ScaleIOVolumeSourceApplyConfiguration represents a
           */
          scaleIO?: {
            fsType?: string;
            gateway?: string;
            protectionDomain?: string;
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            sslEnabled?: boolean;
            storageMode?: string;
            storagePool?: string;
            system?: string;
            volumeName?: string;
          };
          /**
           * SecretVolumeSourceApplyConfiguration represents a
           */
          secret?: {
            defaultMode?: number;
            items?: {
              key?: string;
              mode?: number;
              path?: string;
            }[];
            optional?: boolean;
            secretName?: string;
          };
          /**
           * StorageOSVolumeSourceApplyConfiguration represents
           */
          storageos?: {
            fsType?: string;
            readOnly?: boolean;
            /**
             * LocalObjectReferenceApplyConfiguration represents
             */
            secretRef?: {
              name?: string;
            };
            volumeName?: string;
            volumeNamespace?: string;
          };
          /**
           * VsphereVirtualDiskVolumeSourceApplyConfiguration r
           */
          vsphereVolume?: {
            fsType?: string;
            storagePolicyID?: string;
            storagePolicyName?: string;
            volumePath?: string;
          };
        };
      };
      /**
       * RestorePoint is the target date and time to restor
       */
      restorePoint: string;
      /**
       * Schema is the name of the schema to restore.
       */
      schema?: string;
      /**
       * SourceName is the name of the source `MySQLCluster
       */
      sourceName: string;
      /**
       * SourceNamespace is the namespace of the source `My
       */
      sourceNamespace: string;
    };
    /**
     * ServerIDBase, if set, will become the base number
     */
    serverIDBase?: number;
    /**
     * StartupWaitSeconds is the maximum duration to wait
     */
    startupWaitSeconds?: number;
    /**
     * VolumeClaimTemplates is a list of `PersistentVolum
     *
     * @minItems 1
     */
    volumeClaimTemplates: [
      {
        /**
         * Standard object's metadata.
         */
        metadata: {
          /**
           * Annotations is a map of string keys and values.
           */
          annotations?: {
            [k: string]: string;
          };
          /**
           * Labels is a map of string keys and values.
           */
          labels?: {
            [k: string]: string;
          };
          /**
           * Name is the name of the object.
           */
          name?: string;
        };
        /**
         * Spec defines the desired characteristics of a volu
         */
        spec: {
          accessModes?: string[];
          /**
           * TypedLocalObjectReferenceApplyConfiguration repres
           */
          dataSource?: {
            apiGroup?: string;
            kind?: string;
            name?: string;
          };
          /**
           * TypedObjectReferenceApplyConfiguration represents
           */
          dataSourceRef?: {
            apiGroup?: string;
            kind?: string;
            name?: string;
            namespace?: string;
          };
          /**
           * VolumeResourceRequirementsApplyConfiguration repre
           */
          resources?: {
            /**
             * ResourceList is a set of (resource name, quantity)
             */
            limits?: {
              [k: string]: number | string;
            };
            /**
             * ResourceList is a set of (resource name, quantity)
             */
            requests?: {
              [k: string]: number | string;
            };
          };
          /**
           * LabelSelectorApplyConfiguration represents a decla
           */
          selector?: {
            matchExpressions?: {
              key?: string;
              /**
               * A label selector operator is the set of operators
               */
              operator?: string;
              values?: string[];
            }[];
            matchLabels?: {
              [k: string]: string;
            };
          };
          storageClassName?: string;
          volumeAttributesClassName?: string;
          /**
           * PersistentVolumeMode describes how a volume is int
           */
          volumeMode?: string;
          volumeName?: string;
        };
      },
      ...{
        /**
         * Standard object's metadata.
         */
        metadata: {
          /**
           * Annotations is a map of string keys and values.
           */
          annotations?: {
            [k: string]: string;
          };
          /**
           * Labels is a map of string keys and values.
           */
          labels?: {
            [k: string]: string;
          };
          /**
           * Name is the name of the object.
           */
          name?: string;
        };
        /**
         * Spec defines the desired characteristics of a volu
         */
        spec: {
          accessModes?: string[];
          /**
           * TypedLocalObjectReferenceApplyConfiguration repres
           */
          dataSource?: {
            apiGroup?: string;
            kind?: string;
            name?: string;
          };
          /**
           * TypedObjectReferenceApplyConfiguration represents
           */
          dataSourceRef?: {
            apiGroup?: string;
            kind?: string;
            name?: string;
            namespace?: string;
          };
          /**
           * VolumeResourceRequirementsApplyConfiguration repre
           */
          resources?: {
            /**
             * ResourceList is a set of (resource name, quantity)
             */
            limits?: {
              [k: string]: number | string;
            };
            /**
             * ResourceList is a set of (resource name, quantity)
             */
            requests?: {
              [k: string]: number | string;
            };
          };
          /**
           * LabelSelectorApplyConfiguration represents a decla
           */
          selector?: {
            matchExpressions?: {
              key?: string;
              /**
               * A label selector operator is the set of operators
               */
              operator?: string;
              values?: string[];
            }[];
            matchLabels?: {
              [k: string]: string;
            };
          };
          storageClassName?: string;
          volumeAttributesClassName?: string;
          /**
           * PersistentVolumeMode describes how a volume is int
           */
          volumeMode?: string;
          volumeName?: string;
        };
      }[],
    ];
  };
}

export class MySQLCluster extends NamespacedApiObject {
  readonly apiVersion = 'moco.cybozu.com/v1beta2';
  readonly kind = 'MySQLCluster';
  readonly metadata: NamespacedObjectMeta;
  readonly spec: MySQLClusterArgs['spec'];

  constructor(app: K8sApp, name: string, args: MySQLClusterArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
