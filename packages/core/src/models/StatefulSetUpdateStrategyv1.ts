import { RollingUpdateStatefulSetStrategyv1 } from './RollingUpdateStatefulSetStrategyv1.js';

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export interface StatefulSetUpdateStrategyv1 {
  /**
   * RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
   */
  rollingUpdate?: RollingUpdateStatefulSetStrategyv1;
  /**
   * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
   */
  type?: string;
}
