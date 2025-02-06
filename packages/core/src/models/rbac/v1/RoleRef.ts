/**
 * RoleRef contains information that points to the role being used
 */
export interface RoleRef {
  /**
   * APIGroup is the group for the resource being referenced
   */
  apiGroup: string;
  /**
   * Kind is the type of resource being referenced
   */
  kind: string;
  /**
   * Name is the name of resource being referenced
   */
  name: string;
}
