import { V1APIServiceSpec } from './V1APIServiceSpec.js';
import { V1ObjectMeta } from './V1ObjectMeta.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface V1APIServiceArgs {
  readonly metadata?: V1ObjectMeta;
  readonly spec?: V1APIServiceSpec;
}

/**
 * APIService represents a server for a particular GroupVersion. Name must be \"version.group\".
 */
export class V1APIService extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'apiregistration.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'APIService';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: V1ObjectMeta;
  /**
   * Spec contains information for locating and communicating with a server
   */
  readonly spec?: V1APIServiceSpec;

  constructor(app: K8sApp, name: string, args: V1APIServiceArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
