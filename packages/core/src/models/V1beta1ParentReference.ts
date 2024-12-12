/**
 * ParentReference describes a reference to a parent object.
 */
export interface V1beta1ParentReference {
  /**
   * Group is the group of the object being referenced.
   */
  group?: string;
  /**
   * Name is the name of the object being referenced.
   */
  name: string;
  /**
   * Namespace is the namespace of the object being referenced.
   */
  namespace?: string;
  /**
   * Resource is the resource of the object being referenced.
   */
  resource: string;
}
