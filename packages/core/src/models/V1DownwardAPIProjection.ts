import { V1DownwardAPIVolumeFile } from './V1DownwardAPIVolumeFile.js';

/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
export interface V1DownwardAPIProjection {
  /**
   * Items is a list of DownwardAPIVolume file
   */
  items?: Array<V1DownwardAPIVolumeFile>;
}
