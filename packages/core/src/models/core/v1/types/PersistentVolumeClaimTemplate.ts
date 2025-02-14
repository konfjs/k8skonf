import { PersistentVolumeClaimSpec } from './PersistentVolumeClaimSpec.ts';
import { ObjectMeta } from '../../../meta/v1/types/ObjectMeta.ts';

/**
 * PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.
 */
export interface PersistentVolumeClaimTemplate {
  /**
   * May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
   */
  metadata?: ObjectMeta;
  /**
   * The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
   */
  spec: PersistentVolumeClaimSpec;
}
