import { PersistentVolumeSpec } from './PersistentVolumeSpec';
import { ObjectMeta } from '../meta/v1/ObjectMeta';
import { K8sApp } from '../../K8sApp';
import { ApiObject } from '../../ApiObject';

export interface PersistentVolumeArgs {
  readonly metadata?: ApiObject;
  readonly spec?: PersistentVolumeSpec;
}

/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 */
export class PersistentVolume extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'PersistentVolume';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: ObjectMeta;
  /**
   * spec defines a specification of a persistent volume owned by the cluster. Provisioned by an administrator. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes
   */
  readonly spec?: PersistentVolumeSpec;

  constructor(app: K8sApp, name: string, args: PersistentVolumeArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
