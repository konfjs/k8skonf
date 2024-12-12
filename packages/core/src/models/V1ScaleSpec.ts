/**
 * ScaleSpec describes the attributes of a scale subresource.
 */
export interface V1ScaleSpec {
  /**
   * replicas is the desired number of instances for the scaled object.
   */
  replicas?: number;
}
