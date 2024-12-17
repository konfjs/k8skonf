import { ObjectMetav1 } from './ObjectMetav1.js';
import { ResourceSliceSpecv1beta1 } from './ResourceSliceSpecv1beta1.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface ResourceSlicev1beta1Args {
  readonly metadata?: ObjectMetav1;
  readonly spec: ResourceSliceSpecv1beta1;
}

/**
 * ResourceSlice represents one or more resources in a pool of similar resources, managed by a common driver. A pool may span more than one ResourceSlice, and exactly how many ResourceSlices comprise a pool is determined by the driver.  At the moment, the only supported resources are devices with attributes and capacities. Each device in a given pool, regardless of how many ResourceSlices, must have a unique name. The ResourceSlice in which a device gets published may change over time. The unique identifier for a device is the tuple <driver name>, <pool name>, <device name>.  Whenever a driver needs to update a pool, it increments the pool.Spec.Pool.Generation number and updates all ResourceSlices with that new number and new resource definitions. A consumer must only use ResourceSlices with the highest generation number and ignore all others.  When allocating all resources in a pool matching certain criteria or when looking for the best solution among several different alternatives, a consumer should check the number of ResourceSlices in a pool (included in each ResourceSlice) to determine whether its view of a pool is complete and if not, should wait until the driver has completed updating the pool.  For resources that are not local to a node, the node name is not set. Instead, the driver may use a node selector to specify where the devices are available.  This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export class ResourceSlicev1beta1 extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'resource.k8s.io/v1beta1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ResourceSlice';
  /**
   * Standard object metadata
   */
  readonly metadata: ObjectMetav1;
  /**
   * Contains the information published by the driver.  Changing the spec automatically increments the metadata.generation number.
   */
  readonly spec: ResourceSliceSpecv1beta1;

  constructor(app: K8sApp, name: string, args: ResourceSlicev1beta1Args) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
