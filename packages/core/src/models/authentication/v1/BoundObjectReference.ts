/**
 * BoundObjectReference is a reference to an object that a token is bound to.
 */
export interface BoundObjectReference {
  /**
   * API version of the referent.
   */
  apiVersion?: string;
  /**
   * Kind of the referent. Valid kinds are \'Pod\' and \'Secret\'.
   */
  kind?: string;
  /**
   * Name of the referent.
   */
  name?: string;
  /**
   * UID of the referent.
   */
  uid?: string;
}
