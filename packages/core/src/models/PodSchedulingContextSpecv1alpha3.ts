/**
 * PodSchedulingContextSpec describes where resources for the Pod are needed.
 */
export interface PodSchedulingContextSpecv1alpha3 {
  /**
   * PotentialNodes lists nodes where the Pod might be able to run.  The size of this field is limited to 128. This is large enough for many clusters. Larger clusters may need more attempts to find a node that suits all pending resources. This may get increased in the future, but not reduced.
   */
  potentialNodes?: Array<string>;
  /**
   * SelectedNode is the node for which allocation of ResourceClaims that are referenced by the Pod and that use \"WaitForFirstConsumer\" allocation is to be attempted.
   */
  selectedNode?: string;
}