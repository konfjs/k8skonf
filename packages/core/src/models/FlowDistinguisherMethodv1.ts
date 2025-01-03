/**
 * FlowDistinguisherMethod specifies the method of a flow distinguisher.
 */
export interface FlowDistinguisherMethodv1 {
  /**
   * `type` is the type of flow distinguisher method The supported types are \"ByUser\" and \"ByNamespace\". Required.
   */
  type: string;
}
