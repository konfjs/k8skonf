/**
 * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
 */
export interface Preconditionsv1 {
  /**
   * Specifies the target ResourceVersion
   */
  resourceVersion?: string;
  /**
   * Specifies the target UID.
   */
  uid?: string;
}
