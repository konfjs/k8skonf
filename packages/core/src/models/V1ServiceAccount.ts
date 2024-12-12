import { V1LocalObjectReference } from './V1LocalObjectReference.js';
import { V1ObjectReference } from './V1ObjectReference.js';
import { K8sApp } from '../K8sApp.js';
import { V1NamespacedObjectMeta, NamespacedApiObject } from '../ApiObject.js';

export interface V1ServiceAccountArgs {
  readonly automountServiceAccountToken?: boolean;
  readonly imagePullSecrets?: Array<V1LocalObjectReference>;
  readonly metadata?: V1NamespacedObjectMeta;
  readonly secrets?: Array<V1ObjectReference>;
}

/**
 * ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
 */
export class V1ServiceAccount extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'v1';
  /**
   * AutomountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. Can be overridden at the pod level.
   */
  readonly automountServiceAccountToken?: boolean;
  /**
   * ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
   */
  readonly imagePullSecrets?: Array<V1LocalObjectReference>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ServiceAccount';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: V1NamespacedObjectMeta;
  /**
   * Secrets is a list of the secrets in the same namespace that pods running using this ServiceAccount are allowed to use. Pods are only limited to this list if this service account has a \"kubernetes.io/enforce-mountable-secrets\" annotation set to \"true\". This field should not be used to find auto-generated service account token secrets for use outside of pods. Instead, tokens can be requested directly using the TokenRequest API, or service account token secrets can be manually created. More info: https://kubernetes.io/docs/concepts/configuration/secret
   */
  readonly secrets?: Array<V1ObjectReference>;

  constructor(app: K8sApp, name: string, args: V1ServiceAccountArgs) {
    super();
    this.automountServiceAccountToken = args.automountServiceAccountToken;
    this.imagePullSecrets = args.imagePullSecrets;
    this.metadata = args.metadata || { name };
    this.secrets = args.secrets;
    app.resources.push(this);
  }
}
