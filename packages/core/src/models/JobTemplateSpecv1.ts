import { JobSpecv1 } from './JobSpecv1.js';
import { ObjectMetav1 } from './ObjectMetav1.js';

/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
export interface JobTemplateSpecv1 {
  /**
   * Standard object\'s metadata of the jobs created from this template. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: ObjectMetav1;
  /**
   * Specification of the desired behavior of the job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  spec?: JobSpecv1;
}
