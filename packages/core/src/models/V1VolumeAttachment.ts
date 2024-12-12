import { V1ObjectMeta } from './V1ObjectMeta.js';
import { V1VolumeAttachmentSpec } from './V1VolumeAttachmentSpec.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface V1VolumeAttachmentArgs {
  readonly metadata?: V1ObjectMeta;
  readonly spec: V1VolumeAttachmentSpec;
}

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.  VolumeAttachment objects are non-namespaced.
 */
export class V1VolumeAttachment extends ApiObject {
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
  readonly metadata: V1ObjectMeta;
  /**
   * spec represents specification of the desired attach/detach volume behavior. Populated by the Kubernetes system.
   */
  readonly spec: V1VolumeAttachmentSpec;

  constructor(app: K8sApp, name: string, args: V1VolumeAttachmentArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
