import { V1RollingUpdateDeployment } from './V1RollingUpdateDeployment.js';

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export interface V1DeploymentStrategy {
  /**
   * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
   */
  rollingUpdate?: V1RollingUpdateDeployment;
  /**
   * Type of deployment. Can be \"Recreate\" or \"RollingUpdate\". Default is RollingUpdate.
   */
  type?: string;
}
