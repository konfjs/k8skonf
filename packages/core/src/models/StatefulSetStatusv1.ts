import { StatefulSetConditionv1 } from './StatefulSetConditionv1.js';

/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export interface StatefulSetStatusv1 {
  /**
   * Total number of available pods (ready for at least minReadySeconds) targeted by this statefulset.
   */
  availableReplicas?: number;
  /**
   * collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
   */
  collisionCount?: number;
  /**
   * Represents the latest available observations of a statefulset\'s current state.
   */
  conditions?: Array<StatefulSetConditionv1>;
  /**
   * currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
   */
  currentReplicas?: number;
  /**
   * currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).
   */
  currentRevision?: string;
  /**
   * observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet\'s generation, which is updated on mutation by the API Server.
   */
  observedGeneration?: number;
  /**
   * readyReplicas is the number of pods created for this StatefulSet with a Ready Condition.
   */
  readyReplicas?: number;
  /**
   * replicas is the number of Pods created by the StatefulSet controller.
   */
  replicas: number;
  /**
   * updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)
   */
  updateRevision?: string;
  /**
   * updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
   */
  updatedReplicas?: number;
}
