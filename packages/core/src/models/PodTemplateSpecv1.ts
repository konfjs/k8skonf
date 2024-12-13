import { ObjectMetav1 } from './ObjectMetav1.js';
import { PodSpecv1 } from './PodSpecv1.js';

/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 */
export interface PodTemplateSpecv1 {
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMetav1;
  /**
   * Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  spec?: PodSpecv1;
}
