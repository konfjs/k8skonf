import { V1NodeSelector } from './V1NodeSelector.js';
import { V1alpha3Device } from './V1alpha3Device.js';
import { V1alpha3ResourcePool } from './V1alpha3ResourcePool.js';

/**
 * ResourceSliceSpec contains the information published by the driver in one ResourceSlice.
 */
export interface V1alpha3ResourceSliceSpec {
  /**
   * AllNodes indicates that all nodes have access to the resources in the pool.  Exactly one of NodeName, NodeSelector and AllNodes must be set.
   */
  allNodes?: boolean;
  /**
   * Devices lists some or all of the devices in this pool.  Must not have more than 128 entries.
   */
  devices?: Array<V1alpha3Device>;
  /**
   * Driver identifies the DRA driver providing the capacity information. A field selector can be used to list only ResourceSlice objects with a certain driver name.  Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver. This field is immutable.
   */
  driver: string;
  /**
   * NodeName identifies the node which provides the resources in this pool. A field selector can be used to list only ResourceSlice objects belonging to a certain node.  This field can be used to limit access from nodes to ResourceSlices with the same node name. It also indicates to autoscalers that adding new nodes of the same type as some old node might also make new resources available.  Exactly one of NodeName, NodeSelector and AllNodes must be set. This field is immutable.
   */
  nodeName?: string;
  /**
   * NodeSelector defines which nodes have access to the resources in the pool, when that pool is not limited to a single node.  Must use exactly one term.  Exactly one of NodeName, NodeSelector and AllNodes must be set.
   */
  nodeSelector?: V1NodeSelector;
  /**
   * Pool describes the pool that this ResourceSlice belongs to.
   */
  pool: V1alpha3ResourcePool;
}
