import { TokenRequestSpec } from '../../authentication/v1/TokenRequestSpec';
import { K8sApp } from '../../../K8sApp';
import { NamespacedObjectMeta, NamespacedApiObject } from '../../../ApiObject';

export interface TokenRequestArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly spec: TokenRequestSpec;
}

/**
 * TokenRequest requests a token for a given service account.
 */
export class TokenRequest extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'authentication.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'TokenRequest';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: NamespacedObjectMeta;
  /**
   * Spec holds information about the request being evaluated
   */
  readonly spec: TokenRequestSpec;

  constructor(app: K8sApp, name: string, args: TokenRequestArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
