import { DeviceClassSpec } from '../../resource/v1alpha3/DeviceClassSpec';
import { ObjectMeta } from '../../meta/v1/ObjectMeta';
import { K8sApp } from '../../../K8sApp';
import { ApiObject } from '../../../ApiObject';

export interface DeviceClassArgs {
  readonly metadata?: ApiObject;
  readonly spec: DeviceClassSpec;
}

/**
 * DeviceClass is a vendor- or admin-provided resource that contains device configuration and selectors. It can be referenced in the device requests of a claim to apply these presets. Cluster scoped.  This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export class DeviceClass extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'resource.k8s.io/v1alpha3';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'DeviceClass';
  /**
   * Standard object metadata
   */
  readonly metadata: ObjectMeta;
  /**
   * Spec defines what can be allocated and how to configure it.  This is mutable. Consumers have to be prepared for classes changing at any time, either because they get updated or replaced. Claim allocations are done once based on whatever was set in classes at the time of allocation.  Changing the spec automatically increments the metadata.generation number.
   */
  readonly spec: DeviceClassSpec;

  constructor(app: K8sApp, name: string, args: DeviceClassArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
