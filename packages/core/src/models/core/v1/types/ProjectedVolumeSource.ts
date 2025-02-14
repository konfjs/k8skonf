import type { VolumeProjection } from './VolumeProjection.ts';

/**
 * Represents a projected volume source
 */
export interface ProjectedVolumeSource {
  /**
   * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   */
  defaultMode?: number;
  /**
   * sources is the list of volume projections. Each entry in this list handles one source.
   */
  sources?: Array<VolumeProjection>;
}
