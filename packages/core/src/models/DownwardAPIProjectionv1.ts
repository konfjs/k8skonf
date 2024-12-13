import { DownwardAPIVolumeFilev1 } from './DownwardAPIVolumeFilev1.js';

/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
export interface DownwardAPIProjectionv1 {
  /**
   * Items is a list of DownwardAPIVolume file
   */
  items?: Array<DownwardAPIVolumeFilev1>;
}
