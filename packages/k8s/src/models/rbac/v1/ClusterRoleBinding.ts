import type { RoleRef } from './types/RoleRef.ts';
import type { Subject } from './types/Subject.ts';
import type { ObjectMeta } from '../../meta/v1/types/ObjectMeta.ts';
import type { K8sApp } from '../../../K8sApp.ts';
import { ApiObject } from '../../../ApiObject.ts';

export interface ClusterRoleBindingArgs {
  readonly metadata?: ObjectMeta;
  readonly roleRef: RoleRef;
  readonly subjects?: Array<Subject>;
}

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export class ClusterRoleBinding extends ApiObject {
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
  readonly metadata: ObjectMeta;
  /**
   * RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error. This field is immutable.
   */
  readonly roleRef: RoleRef;
  /**
   * Subjects holds references to the objects the role applies to.
   */
  readonly subjects?: Array<Subject>;

  constructor(app: K8sApp, name: string, args: ClusterRoleBindingArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.roleRef = args.roleRef;
    this.subjects = args.subjects;
    app.addResource(this);
  }
}
