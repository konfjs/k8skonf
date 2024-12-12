import { V1ObjectMeta } from './V1ObjectMeta.js';
import { V1PodSpec } from './V1PodSpec.js';

/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 */
export interface V1PodTemplateSpec {
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: V1ObjectMeta;
  /**
   * Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  spec?: V1PodSpec;
}
