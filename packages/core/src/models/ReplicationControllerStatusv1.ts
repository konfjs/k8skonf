import { ReplicationControllerConditionv1 } from './ReplicationControllerConditionv1.js';

/**
 * ReplicationControllerStatus represents the current status of a replication controller.
 */
export interface ReplicationControllerStatusv1 {
  /**
   * The number of available replicas (ready for at least minReadySeconds) for this replication controller.
   */
  availableReplicas?: number;
  /**
   * Represents the latest available observations of a replication controller\'s current state.
   */
  conditions?: Array<ReplicationControllerConditionv1>;
  /**
   * The number of pods that have labels matching the labels of the pod template of the replication controller.
   */
  fullyLabeledReplicas?: number;
  /**
   * ObservedGeneration reflects the generation of the most recently observed replication controller.
   */
  observedGeneration?: number;
  /**
   * The number of ready replicas for this replication controller.
   */
  readyReplicas?: number;
  /**
   * Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
   */
  replicas: number;
}
