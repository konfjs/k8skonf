import { PersistentVolumeClaimSpec } from './types/PersistentVolumeClaimSpec.ts';
import { K8sApp } from '../../../K8sApp.ts';
import { NamespacedObjectMeta, NamespacedApiObject } from '../../../ApiObject.ts';

export interface PersistentVolumeClaimArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly spec?: PersistentVolumeClaimSpec;
}

/**
 * PersistentVolumeClaim is a user\'s request for and claim to a persistent volume
 */
export class PersistentVolumeClaim extends NamespacedApiObject {
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
  readonly metadata: NamespacedObjectMeta;
  /**
   * spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   */
  readonly spec?: PersistentVolumeClaimSpec;

  constructor(app: K8sApp, name: string, args: PersistentVolumeClaimArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
