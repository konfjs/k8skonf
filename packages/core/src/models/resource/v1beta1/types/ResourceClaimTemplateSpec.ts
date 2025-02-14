import { ResourceClaimSpec } from './ResourceClaimSpec.ts';
import { ObjectMeta } from '../../../meta/v1/types/ObjectMeta.ts';

/**
 * ResourceClaimTemplateSpec contains the metadata and fields for a ResourceClaim.
 */
export interface ResourceClaimTemplateSpec {
  /**
   * ObjectMeta may contain labels and annotations that will be copied into the ResourceClaim when creating it. No other fields are allowed and will be rejected during validation.
   */
  metadata?: ObjectMeta;
  /**
   * Spec for the ResourceClaim. The entire content is copied unchanged into the ResourceClaim that gets created from this template. The same fields as in a ResourceClaim are also valid here.
   */
  spec: ResourceClaimSpec;
}
