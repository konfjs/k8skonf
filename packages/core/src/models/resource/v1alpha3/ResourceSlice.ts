import type { ResourceSliceSpec } from './types/ResourceSliceSpec.ts';
import type { ObjectMeta } from '../../meta/v1/types/ObjectMeta.ts';
import type { K8sApp } from '../../../K8sApp.ts';
import { ApiObject } from '../../../ApiObject.ts';

export interface ResourceSliceArgs {
  readonly metadata?: ObjectMeta;
  readonly spec: ResourceSliceSpec;
}

/**
 * ResourceSlice represents one or more resources in a pool of similar resources, managed by a common driver. A pool may span more than one ResourceSlice, and exactly how many ResourceSlices comprise a pool is determined by the driver.  At the moment, the only supported resources are devices with attributes and capacities. Each device in a given pool, regardless of how many ResourceSlices, must have a unique name. The ResourceSlice in which a device gets published may change over time. The unique identifier for a device is the tuple <driver name>, <pool name>, <device name>.  Whenever a driver needs to update a pool, it increments the pool.Spec.Pool.Generation number and updates all ResourceSlices with that new number and new resource definitions. A consumer must only use ResourceSlices with the highest generation number and ignore all others.  When allocating all resources in a pool matching certain criteria or when looking for the best solution among several different alternatives, a consumer should check the number of ResourceSlices in a pool (included in each ResourceSlice) to determine whether its view of a pool is complete and if not, should wait until the driver has completed updating the pool.  For resources that are not local to a node, the node name is not set. Instead, the driver may use a node selector to specify where the devices are available.  This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export class ResourceSlice extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'resource.k8s.io/v1alpha3';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ResourceSlice';
  /**
   * Standard object metadata
   */
  readonly metadata: ObjectMeta;
  /**
   * Contains the information published by the driver.  Changing the spec automatically increments the metadata.generation number.
   */
  readonly spec: ResourceSliceSpec;

  constructor(app: K8sApp, name: string, args: ResourceSliceArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
