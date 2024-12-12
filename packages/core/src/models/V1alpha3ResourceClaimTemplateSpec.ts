import { V1ObjectMeta } from './V1ObjectMeta.js';
import { V1alpha3ResourceClaimSpec } from './V1alpha3ResourceClaimSpec.js';

/**
 * ResourceClaimTemplateSpec contains the metadata and fields for a ResourceClaim.
 */
export interface V1alpha3ResourceClaimTemplateSpec {
  /**
   * ObjectMeta may contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
   */
  metadata?: V1ObjectMeta;
  /**
   * Spec for the ResourceClaim. The entire content is copied unchanged into the ResourceClaim that gets created from this template. The same fields as in a ResourceClaim are also valid here.
   */
  spec: V1alpha3ResourceClaimSpec;
}
