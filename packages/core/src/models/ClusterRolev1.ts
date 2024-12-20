import { AggregationRulev1 } from './AggregationRulev1.js';
import { ObjectMetav1 } from './ObjectMetav1.js';
import { PolicyRulev1 } from './PolicyRulev1.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface ClusterRolev1Args {
  readonly metadata?: ObjectMetav1;
  readonly aggregationRule?: AggregationRulev1;
  readonly rules?: Array<PolicyRulev1>;
}

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export class ClusterRolev1 extends ApiObject {
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
  readonly metadata: ObjectMetav1;
  /**
   * AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
   */
  readonly aggregationRule?: AggregationRulev1;
  /**
   * Rules holds all the PolicyRules for this ClusterRole
   */
  readonly rules?: Array<PolicyRulev1>;

  constructor(app: K8sApp, name: string, args: ClusterRolev1Args) {
    super(args.metadata?.name || name);
    this.metadata = args.metadata || { name };
    this.metadata.name ??= name;
    this.aggregationRule = args.aggregationRule;
    this.rules = args.rules;
    app.addResource(this);
  }
}
