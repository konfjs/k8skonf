import { PolicyRule } from './types/PolicyRule';
import { K8sApp } from '../../../K8sApp';
import { NamespacedObjectMeta, NamespacedApiObject } from '../../../ApiObject';

export interface RoleArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly rules?: Array<PolicyRule>;
}

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
export class Role extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'rbac.authorization.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'Role';
  /**
   * Standard object\'s metadata.
   */
  readonly metadata: NamespacedObjectMeta;
  /**
   * Rules holds all the PolicyRules for this Role
   */
  readonly rules?: Array<PolicyRule>;

  constructor(app: K8sApp, name: string, args: RoleArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.rules = args.rules;
    app.addResource(this);
  }
}
