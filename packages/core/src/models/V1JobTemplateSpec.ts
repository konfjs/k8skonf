import { V1JobSpec } from './V1JobSpec.js';
import { V1ObjectMeta } from './V1ObjectMeta.js';

/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
export interface V1JobTemplateSpec {
  /**
   * Standard object\'s metadata of the jobs created from this template. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: V1ObjectMeta;
  /**
   * Specification of the desired behavior of the job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  spec?: V1JobSpec;
}
