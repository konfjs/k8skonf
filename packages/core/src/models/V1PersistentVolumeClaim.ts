import { V1PersistentVolumeClaimSpec } from './V1PersistentVolumeClaimSpec.js';
import { K8sApp } from '../K8sApp.js';
import { V1NamespacedObjectMeta, NamespacedApiObject } from '../ApiObject.js';

export interface V1PersistentVolumeClaimArgs {
  readonly metadata?: V1NamespacedObjectMeta;
  readonly spec?: V1PersistentVolumeClaimSpec;
}

/**
 * PersistentVolumeClaim is a user\'s request for and claim to a persistent volume
 */
export class V1PersistentVolumeClaim extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'PersistentVolumeClaim';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: V1NamespacedObjectMeta;
  /**
   * spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   */
  readonly spec?: V1PersistentVolumeClaimSpec;

  constructor(app: K8sApp, name: string, args: V1PersistentVolumeClaimArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
