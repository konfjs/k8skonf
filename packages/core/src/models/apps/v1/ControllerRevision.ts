import { K8sApp } from '../../../K8sApp';
import { NamespacedObjectMeta, NamespacedApiObject } from '../../../ApiObject';

export interface ControllerRevisionArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly data?: any;
  readonly revision: number;
}

/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export class ControllerRevision extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'apps/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ControllerRevision';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: NamespacedObjectMeta;
  /**
   * Data is the serialized representation of the state.
   */
  readonly data?: any;
  /**
   * Revision indicates the revision of the state represented by Data.
   */
  readonly revision: number;

  constructor(app: K8sApp, name: string, args: ControllerRevisionArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.data = args.data;
    this.revision = args.revision;
    app.addResource(this);
  }
}
