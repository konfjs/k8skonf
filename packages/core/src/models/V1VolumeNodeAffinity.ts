import { V1NodeSelector } from './V1NodeSelector.js';

/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 */
export interface V1VolumeNodeAffinity {
  /**
   * required specifies hard node constraints that must be met.
   */
  required?: V1NodeSelector;
}
