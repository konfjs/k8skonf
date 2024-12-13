import { ObjectMetav1 } from './ObjectMetav1.js';
import { PersistentVolumeClaimSpecv1 } from './PersistentVolumeClaimSpecv1.js';

/**
 * PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.
 */
export interface PersistentVolumeClaimTemplatev1 {
  /**
   * May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
   */
  metadata?: ObjectMetav1;
  /**
   * The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
   */
  spec: PersistentVolumeClaimSpecv1;
}
