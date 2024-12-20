import { ObjectMetav1 } from './ObjectMetav1.js';
import { Overheadv1 } from './Overheadv1.js';
import { Schedulingv1 } from './Schedulingv1.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface RuntimeClassv1Args {
  readonly handler: string;
  readonly metadata?: ObjectMetav1;
  readonly overhead?: Overheadv1;
  readonly scheduling?: Schedulingv1;
}

/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://kubernetes.io/docs/concepts/containers/runtime-class/
 */
export class RuntimeClassv1 extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'node.k8s.io/v1';
  /**
   * handler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called \"runc\" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The Handler must be lowercase, conform to the DNS Label (RFC 1123) requirements, and is immutable.
   */
  readonly handler: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'RuntimeClass';
  /**
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: ObjectMetav1;
  /**
   * overhead represents the resource overhead associated with running a pod for a given RuntimeClass. For more details, see  https://kubernetes.io/docs/concepts/scheduling-eviction/pod-overhead/
   */
  readonly overhead?: Overheadv1;
  /**
   * scheduling holds the scheduling constraints to ensure that pods running with this RuntimeClass are scheduled to nodes that support it. If scheduling is nil, this RuntimeClass is assumed to be supported by all nodes.
   */
  readonly scheduling?: Schedulingv1;

  constructor(app: K8sApp, name: string, args: RuntimeClassv1Args) {
    super(args.metadata?.name || name);
    this.handler = args.handler;
    this.metadata = args.metadata || { name };
    this.metadata.name ??= name;
    this.overhead = args.overhead;
    this.scheduling = args.scheduling;
    app.addResource(this);
  }
}
