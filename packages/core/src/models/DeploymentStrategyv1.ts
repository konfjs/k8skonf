import { RollingUpdateDeploymentv1 } from './RollingUpdateDeploymentv1.js';

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export interface DeploymentStrategyv1 {
  /**
   * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
   */
  rollingUpdate?: RollingUpdateDeploymentv1;
  /**
   * Type of deployment. Can be \"Recreate\" or \"RollingUpdate\". Default is RollingUpdate.
   */
  type?: string;
}
