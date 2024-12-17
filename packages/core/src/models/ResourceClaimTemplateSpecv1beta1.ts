import { ObjectMetav1 } from './ObjectMetav1.js';
import { ResourceClaimSpecv1beta1 } from './ResourceClaimSpecv1beta1.js';

/**
 * ResourceClaimTemplateSpec contains the metadata and fields for a ResourceClaim.
 */
export interface ResourceClaimTemplateSpecv1beta1 {
  /**
   * ObjectMeta may contain labels and annotations that will be copied into the ResourceClaim when creating it. No other fields are allowed and will be rejected during validation.
   */
  metadata?: ObjectMetav1;
  /**
   * Spec for the ResourceClaim. The entire content is copied unchanged into the ResourceClaim that gets created from this template. The same fields as in a ResourceClaim are also valid here.
   */
  spec: ResourceClaimSpecv1beta1;
}
