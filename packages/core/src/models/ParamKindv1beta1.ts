/**
 * ParamKind is a tuple of Group Kind and Version.
 */
export interface ParamKindv1beta1 {
  /**
   * APIVersion is the API group version the resources belong to. In format of \"group/version\". Required.
   */
  apiVersion?: string;
  /**
   * Kind is the API kind the resources belong to. Required.
   */
  kind?: string;
}