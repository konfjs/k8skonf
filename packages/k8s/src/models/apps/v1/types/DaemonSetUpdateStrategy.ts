import type { RollingUpdateDaemonSet } from './RollingUpdateDaemonSet.ts';

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export interface DaemonSetUpdateStrategy {
  /**
   * Rolling update config params. Present only if type = \"RollingUpdate\".
   */
  rollingUpdate?: RollingUpdateDaemonSet;
  /**
   * Type of daemon set update. Can be \"RollingUpdate\" or \"OnDelete\". Default is RollingUpdate.
   */
  type?: string;
}
