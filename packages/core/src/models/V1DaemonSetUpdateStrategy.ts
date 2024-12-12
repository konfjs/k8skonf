import { V1RollingUpdateDaemonSet } from './V1RollingUpdateDaemonSet.js';

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export interface V1DaemonSetUpdateStrategy {
  /**
   * Rolling update config params. Present only if type = \"RollingUpdate\".
   */
  rollingUpdate?: V1RollingUpdateDaemonSet;
  /**
   * Type of daemon set update. Can be \"RollingUpdate\" or \"OnDelete\". Default is RollingUpdate.
   */
  type?: string;
}
