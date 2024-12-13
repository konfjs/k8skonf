import { CSINodeSpecv1 } from './CSINodeSpecv1.js';
import { ObjectMetav1 } from './ObjectMetav1.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface CSINodev1Args {
  readonly metadata?: ObjectMetav1;
  readonly spec: CSINodeSpecv1;
}

/**
 * CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn\'t create this object. CSINode has an OwnerReference that points to the corresponding node object.
 */
export class CSINodev1 extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'storage.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'CSINode';
  /**
   * Standard object\'s metadata. metadata.name must be the Kubernetes node name.
   */
  readonly metadata: ObjectMetav1;
  /**
   * spec is the specification of CSINode
   */
  readonly spec: CSINodeSpecv1;

  constructor(app: K8sApp, name: string, args: CSINodev1Args) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
