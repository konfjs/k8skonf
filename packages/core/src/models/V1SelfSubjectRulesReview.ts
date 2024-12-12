import { V1ObjectMeta } from './V1ObjectMeta.js';
import { V1SelfSubjectRulesReviewSpec } from './V1SelfSubjectRulesReviewSpec.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface V1SelfSubjectRulesReviewArgs {
  readonly metadata?: V1ObjectMeta;
  readonly spec: V1SelfSubjectRulesReviewSpec;
}

/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server\'s authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
export class V1SelfSubjectRulesReview extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'authorization.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'SelfSubjectRulesReview';
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: V1ObjectMeta;
  /**
   * Spec holds information about the request being evaluated.
   */
  readonly spec: V1SelfSubjectRulesReviewSpec;

  constructor(app: K8sApp, name: string, args: V1SelfSubjectRulesReviewArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
