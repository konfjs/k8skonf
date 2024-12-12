import { V1ObjectMeta } from './V1ObjectMeta.js';
import { V1RoleRef } from './V1RoleRef.js';
import { V1Subject } from './V1Subject.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface V1ClusterRoleBindingArgs {
  readonly metadata?: V1ObjectMeta;
  readonly roleRef: V1RoleRef;
  readonly subjects?: Array<V1Subject>;
}

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export class V1ClusterRoleBinding extends ApiObject {
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
  readonly metadata: V1ObjectMeta;
  /**
   * RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error. This field is immutable.
   */
  readonly roleRef: V1RoleRef;
  /**
   * Subjects holds references to the objects the role applies to.
   */
  readonly subjects?: Array<V1Subject>;

  constructor(app: K8sApp, name: string, args: V1ClusterRoleBindingArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.roleRef = args.roleRef;
    this.subjects = args.subjects;
    app.resources.push(this);
  }
}
