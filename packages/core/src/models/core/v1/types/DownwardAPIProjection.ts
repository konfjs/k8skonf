import type { DownwardAPIVolumeFile } from './DownwardAPIVolumeFile.ts';

/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
export interface DownwardAPIProjection {
  /**
   * Items is a list of DownwardAPIVolume file
   */
  items?: Array<DownwardAPIVolumeFile>;
}
