/**
 * The node this Taint is attached to has the \"effect\" on any pod that does not tolerate the Taint.
 */
export interface V1Taint {
  /**
   * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
   */
  effect: string;
  /**
   * Required. The taint key to be applied to a node.
   */
  key: string;
  /**
   * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
   */
  timeAdded?: Date;
  /**
   * The taint value corresponding to the taint key.
   */
  value?: string;
}
