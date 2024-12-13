import { ResourceHealthv1 } from './ResourceHealthv1.js';

/**
 *
 */
export interface ResourceStatusv1 {
  /**
   * Name of the resource. Must be unique within the pod and match one of the resources from the pod spec.
   */
  name: string;
  /**
   * List of unique Resources health. Each element in the list contains an unique resource ID and resource health. At a minimum, ResourceID must uniquely identify the Resource allocated to the Pod on the Node for the lifetime of a Pod. See ResourceID type for it\'s definition.
   */
  resources?: Array<ResourceHealthv1>;
}
