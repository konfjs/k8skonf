/**
 * PodSchedulingGate is associated to a Pod to guard its scheduling.
 */
export interface PodSchedulingGatev1 {
  /**
   * Name of the scheduling gate. Each scheduling gate must have a unique name field.
   */
  name: string;
}
