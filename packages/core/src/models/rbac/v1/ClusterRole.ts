import { AggregationRule } from './types/AggregationRule.ts';
import { PolicyRule } from './types/PolicyRule.ts';
import { ObjectMeta } from '../../meta/v1/types/ObjectMeta.ts';
import { K8sApp } from '../../../K8sApp.ts';
import { ApiObject } from '../../../ApiObject.ts';

export interface ClusterRoleArgs {
  readonly metadata?: ObjectMeta;
  readonly aggregationRule?: AggregationRule;
  readonly rules?: Array<PolicyRule>;
}

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export class ClusterRole extends ApiObject {
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
  readonly metadata: ObjectMeta;
  /**
   * AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
   */
  readonly aggregationRule?: AggregationRule;
  /**
   * Rules holds all the PolicyRules for this ClusterRole
   */
  readonly rules?: Array<PolicyRule>;

  constructor(app: K8sApp, name: string, args: ClusterRoleArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.aggregationRule = args.aggregationRule;
    this.rules = args.rules;
    app.addResource(this);
  }
}
