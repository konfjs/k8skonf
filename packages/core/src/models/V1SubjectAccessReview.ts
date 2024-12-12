import { V1ObjectMeta } from './V1ObjectMeta.js';
import { V1SubjectAccessReviewSpec } from './V1SubjectAccessReviewSpec.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface V1SubjectAccessReviewArgs {
  readonly metadata?: V1ObjectMeta;
  readonly spec: V1SubjectAccessReviewSpec;
}

/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
export class V1SubjectAccessReview extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'authorization.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'SubjectAccessReview';
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: V1ObjectMeta;
  /**
   * Spec holds information about the request being evaluated
   */
  readonly spec: V1SubjectAccessReviewSpec;

  constructor(app: K8sApp, name: string, args: V1SubjectAccessReviewArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
