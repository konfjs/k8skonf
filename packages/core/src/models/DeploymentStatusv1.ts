import { DeploymentConditionv1 } from './DeploymentConditionv1.js';

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export interface DeploymentStatusv1 {
  /**
   * Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
   */
  availableReplicas?: number;
  /**
   * Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
   */
  collisionCount?: number;
  /**
   * Represents the latest available observations of a deployment\'s current state.
   */
  conditions?: Array<DeploymentConditionv1>;
  /**
   * The generation observed by the deployment controller.
   */
  observedGeneration?: number;
  /**
   * readyReplicas is the number of pods targeted by this Deployment with a Ready Condition.
   */
  readyReplicas?: number;
  /**
   * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
   */
  replicas?: number;
  /**
   * Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
   */
  unavailableReplicas?: number;
  /**
   * Total number of non-terminated pods targeted by this deployment that have the desired template spec.
   */
  updatedReplicas?: number;
}
