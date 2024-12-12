import { V1ObjectMeta } from './V1ObjectMeta.js';
import { V1SelfSubjectAccessReviewSpec } from './V1SelfSubjectAccessReviewSpec.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface V1SelfSubjectAccessReviewArgs {
  readonly metadata?: V1ObjectMeta;
  readonly spec: V1SelfSubjectAccessReviewSpec;
}

/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means \"in all namespaces\".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export class V1SelfSubjectAccessReview extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'authorization.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'SelfSubjectAccessReview';
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: V1ObjectMeta;
  /**
   * Spec holds information about the request being evaluated.  user and groups must be empty
   */
  readonly spec: V1SelfSubjectAccessReviewSpec;

  constructor(app: K8sApp, name: string, args: V1SelfSubjectAccessReviewArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
