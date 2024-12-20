import { ObjectMetav1 } from './ObjectMetav1.js';
import { RbacSubjectv1 } from './RbacSubjectv1.js';
import { RoleRefv1 } from './RoleRefv1.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface ClusterRoleBindingv1Args {
  readonly metadata?: ObjectMetav1;
  readonly roleRef: RoleRefv1;
  readonly subjects?: Array<RbacSubjectv1>;
}

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export class ClusterRoleBindingv1 extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'rbac.authorization.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ClusterRoleBinding';
  /**
   * Standard object\'s metadata.
   */
  readonly metadata: ObjectMetav1;
  /**
   * RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error. This field is immutable.
   */
  readonly roleRef: RoleRefv1;
  /**
   * Subjects holds references to the objects the role applies to.
   */
  readonly subjects?: Array<RbacSubjectv1>;

  constructor(app: K8sApp, name: string, args: ClusterRoleBindingv1Args) {
    super(args.metadata?.name || name);
    this.metadata = args.metadata || { name };
    this.metadata.name ??= name;
    this.roleRef = args.roleRef;
    this.subjects = args.subjects;
    app.addResource(this);
  }
}
