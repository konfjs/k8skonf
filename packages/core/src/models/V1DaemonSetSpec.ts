import { V1DaemonSetUpdateStrategy } from './V1DaemonSetUpdateStrategy.js';
import { V1LabelSelector } from './V1LabelSelector.js';
import { V1PodTemplateSpec } from './V1PodTemplateSpec.js';

/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export interface V1DaemonSetSpec {
  /**
   * The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
   */
  minReadySeconds?: number;
  /**
   * The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
   */
  revisionHistoryLimit?: number;
  /**
   * A label query over pods that are managed by the daemon set. Must match in order to be controlled. It must match the pod template\'s labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
   */
  selector: V1LabelSelector;
  /**
   * An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template\'s node selector (or on every node if no node selector is specified). The only allowed template.spec.restartPolicy value is \"Always\". More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
   */
  template: V1PodTemplateSpec;
  /**
   * An update strategy to replace existing DaemonSet pods with new pods.
   */
  updateStrategy?: V1DaemonSetUpdateStrategy;
}
