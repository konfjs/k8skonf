import { ObjectMetav1 } from './ObjectMetav1.js';
import { ResourceClaimSpecv1alpha3 } from './ResourceClaimSpecv1alpha3.js';

/**
 * ResourceClaimTemplateSpec contains the metadata and fields for a ResourceClaim.
 */
export interface ResourceClaimTemplateSpecv1alpha3 {
  /**
   * ObjectMeta may contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
   */
  metadata?: ObjectMetav1;
  /**
   * Spec for the ResourceClaim. The entire content is copied unchanged into the ResourceClaim that gets created from this template. The same fields as in a ResourceClaim are also valid here.
   */
  spec: ResourceClaimSpecv1alpha3;
}
