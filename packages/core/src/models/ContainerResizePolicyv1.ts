/**
 * ContainerResizePolicy represents resource resize policy for the container.
 */
export interface ContainerResizePolicyv1 {
  /**
   * Name of the resource to which this resource resize policy applies. Supported values: cpu, memory.
   */
  resourceName: string;
  /**
   * Restart policy to apply when specified resource is resized. If not specified, it defaults to NotRequired.
   */
  restartPolicy: string;
}
