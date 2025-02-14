import type { PodSpec } from './PodSpec.ts';
import type { ObjectMeta } from '../../../meta/v1/types/ObjectMeta.ts';

/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 */
export interface PodTemplateSpec {
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMeta;
  /**
   * Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  spec?: PodSpec;
}
