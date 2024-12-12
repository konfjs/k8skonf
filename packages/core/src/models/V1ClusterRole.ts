import { V1AggregationRule } from './V1AggregationRule.js';
import { V1ObjectMeta } from './V1ObjectMeta.js';
import { V1PolicyRule } from './V1PolicyRule.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface V1ClusterRoleArgs {
  readonly aggregationRule?: V1AggregationRule;
  readonly metadata?: V1ObjectMeta;
  readonly rules?: Array<V1PolicyRule>;
}

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export class V1ClusterRole extends ApiObject {
  /**
   * AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
   */
  readonly aggregationRule?: V1AggregationRule;
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'rbac.authorization.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ClusterRole';
  /**
   * Standard object\'s metadata.
   */
  readonly metadata: V1ObjectMeta;
  /**
   * Rules holds all the PolicyRules for this ClusterRole
   */
  readonly rules?: Array<V1PolicyRule>;

  constructor(app: K8sApp, name: string, args: V1ClusterRoleArgs) {
    super();
    this.aggregationRule = args.aggregationRule;
    this.metadata = args.metadata || { name };
    this.rules = args.rules;
    app.resources.push(this);
  }
}
