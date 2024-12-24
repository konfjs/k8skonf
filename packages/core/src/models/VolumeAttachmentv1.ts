import { ObjectMetav1 } from './ObjectMetav1.js';
import { VolumeAttachmentSpecv1 } from './VolumeAttachmentSpecv1.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface VolumeAttachmentv1Args {
  readonly metadata?: ObjectMetav1;
  readonly spec: VolumeAttachmentSpecv1;
}

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.  VolumeAttachment objects are non-namespaced.
 */
export class VolumeAttachmentv1 extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'storage.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'VolumeAttachment';
  /**
   * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: ObjectMetav1;
  /**
   * spec represents specification of the desired attach/detach volume behavior. Populated by the Kubernetes system.
   */
  readonly spec: VolumeAttachmentSpecv1;

  constructor(app: K8sApp, name: string, args: VolumeAttachmentv1Args) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
