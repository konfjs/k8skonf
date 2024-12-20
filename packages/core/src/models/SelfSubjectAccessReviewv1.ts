import { ObjectMetav1 } from './ObjectMetav1.js';
import { SelfSubjectAccessReviewSpecv1 } from './SelfSubjectAccessReviewSpecv1.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface SelfSubjectAccessReviewv1Args {
  readonly metadata?: ObjectMetav1;
  readonly spec: SelfSubjectAccessReviewSpecv1;
}

/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means \"in all namespaces\".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export class SelfSubjectAccessReviewv1 extends ApiObject {
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
  readonly metadata: ObjectMetav1;
  /**
   * Spec holds information about the request being evaluated.  user and groups must be empty
   */
  readonly spec: SelfSubjectAccessReviewSpecv1;

  constructor(app: K8sApp, name: string, args: SelfSubjectAccessReviewv1Args) {
    super(args.metadata?.name || name);
    this.metadata = args.metadata || { name };
    this.metadata.name ??= name;
    this.spec = args.spec;
    app.addResource(this);
  }
}
