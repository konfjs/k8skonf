import { TokenReviewSpec } from '../../authentication/v1/TokenReviewSpec';
import { ObjectMeta } from '../../meta/v1/ObjectMeta';
import { K8sApp } from '../../../K8sApp';
import { ApiObject } from '../../../ApiObject';

export interface TokenReviewArgs {
  readonly metadata?: ApiObject;
  readonly spec: TokenReviewSpec;
}

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export class TokenReview extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'authentication.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'TokenReview';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: ObjectMeta;
  /**
   * Spec holds information about the request being evaluated
   */
  readonly spec: TokenReviewSpec;

  constructor(app: K8sApp, name: string, args: TokenReviewArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
