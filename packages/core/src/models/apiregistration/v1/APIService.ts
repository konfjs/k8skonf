import { ObjectMeta } from '../../meta/v1/types/ObjectMeta.ts';
import { APIServiceSpec } from './types/APIServiceSpec.ts';
import { K8sApp } from '../../../K8sApp.ts';
import { ApiObject } from '../../../ApiObject.ts';

export interface APIServiceArgs {
  readonly metadata?: ObjectMeta;
  readonly spec?: APIServiceSpec;
}

/**
 * APIService represents a server for a particular GroupVersion. Name must be \"version.group\".
 */
export class APIService extends ApiObject {
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
  readonly metadata: ObjectMeta;
  /**
   * Spec contains information for locating and communicating with a server
   */
  readonly spec?: APIServiceSpec;

  constructor(app: K8sApp, name: string, args: APIServiceArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
