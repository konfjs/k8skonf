import { RollingUpdateDaemonSetv1 } from './RollingUpdateDaemonSetv1.js';

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export interface DaemonSetUpdateStrategyv1 {
  /**
   * Rolling update config params. Present only if type = \"RollingUpdate\".
   */
  rollingUpdate?: RollingUpdateDaemonSetv1;
  /**
   * Type of daemon set update. Can be \"RollingUpdate\" or \"OnDelete\". Default is RollingUpdate.
   */
  type?: string;
}
