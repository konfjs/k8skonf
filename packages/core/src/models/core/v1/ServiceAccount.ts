import type { LocalObjectReference } from './types/LocalObjectReference.ts';
import type { ObjectReference } from './types/ObjectReference.ts';
import type { K8sApp } from '../../../K8sApp.ts';
import { type NamespacedObjectMeta, NamespacedApiObject } from '../../../ApiObject.ts';

export interface ServiceAccountArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly automountServiceAccountToken?: boolean;
  readonly imagePullSecrets?: Array<LocalObjectReference>;
  readonly secrets?: Array<ObjectReference>;
}

/**
 * ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
 */
export class ServiceAccount extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ServiceAccount';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: NamespacedObjectMeta;
  /**
   * AutomountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. Can be overridden at the pod level.
   */
  readonly automountServiceAccountToken?: boolean;
  /**
   * ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
   */
  readonly imagePullSecrets?: Array<LocalObjectReference>;
  /**
   * Secrets is a list of the secrets in the same namespace that pods running using this ServiceAccount are allowed to use. Pods are only limited to this list if this service account has a \"kubernetes.io/enforce-mountable-secrets\" annotation set to \"true\". The \"kubernetes.io/enforce-mountable-secrets\" annotation is deprecated since v1.32. Prefer separate namespaces to isolate access to mounted secrets. This field should not be used to find auto-generated service account token secrets for use outside of pods. Instead, tokens can be requested directly using the TokenRequest API, or service account token secrets can be manually created. More info: https://kubernetes.io/docs/concepts/configuration/secret
   */
  readonly secrets?: Array<ObjectReference>;

  constructor(app: K8sApp, name: string, args: ServiceAccountArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.automountServiceAccountToken = args.automountServiceAccountToken;
    this.imagePullSecrets = args.imagePullSecrets;
    this.secrets = args.secrets;
    app.addResource(this);
  }
}
