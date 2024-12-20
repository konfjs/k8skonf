import { PolicyRulev1 } from './PolicyRulev1.js';
import { K8sApp } from '../K8sApp.js';
import { NamespacedObjectMetav1, NamespacedApiObject } from '../ApiObject.js';

export interface Rolev1Args {
  readonly metadata?: NamespacedObjectMetav1;
  readonly rules?: Array<PolicyRulev1>;
}

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
export class Rolev1 extends NamespacedApiObject {
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
  readonly metadata: NamespacedObjectMetav1;
  /**
   * Rules holds all the PolicyRules for this Role
   */
  readonly rules?: Array<PolicyRulev1>;

  constructor(app: K8sApp, name: string, args: Rolev1Args) {
    super();
    this.metadata = args.metadata || { name };
    this.metadata.name ??= name;
    this.rules = args.rules;
    app.addResource(this);
  }
}
