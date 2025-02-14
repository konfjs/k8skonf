import type { ServiceCIDRSpec } from './types/ServiceCIDRSpec.ts';
import type { ObjectMeta } from '../../meta/v1/types/ObjectMeta.ts';
import type { K8sApp } from '../../../K8sApp.ts';
import { ApiObject } from '../../../ApiObject.ts';

export interface ServiceCIDRArgs {
  readonly metadata?: ObjectMeta;
  readonly spec?: ServiceCIDRSpec;
}

/**
 * ServiceCIDR defines a range of IP addresses using CIDR format (e.g. 192.168.0.0/24 or 2001:db2::/64). This range is used to allocate ClusterIPs to Service objects.
 */
export class ServiceCIDR extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'networking.k8s.io/v1beta1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ServiceCIDR';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: ObjectMeta;
  /**
   * spec is the desired state of the ServiceCIDR. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  readonly spec?: ServiceCIDRSpec;

  constructor(app: K8sApp, name: string, args: ServiceCIDRArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
