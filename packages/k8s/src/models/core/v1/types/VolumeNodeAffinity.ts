import type { NodeSelector } from './NodeSelector.ts';

/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 */
export interface VolumeNodeAffinity {
  /**
   * required specifies hard node constraints that must be met.
   */
  required?: NodeSelector;
}
