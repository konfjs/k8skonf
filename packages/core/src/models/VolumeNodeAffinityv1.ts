import { NodeSelectorv1 } from './NodeSelectorv1.js';

/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 */
export interface VolumeNodeAffinityv1 {
  /**
   * required specifies hard node constraints that must be met.
   */
  required?: NodeSelectorv1;
}
