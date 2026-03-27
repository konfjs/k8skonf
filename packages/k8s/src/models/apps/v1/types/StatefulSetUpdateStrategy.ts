import type { RollingUpdateStatefulSetStrategy } from './RollingUpdateStatefulSetStrategy.ts';

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export interface StatefulSetUpdateStrategy {
  /**
   * RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
   */
  rollingUpdate?: RollingUpdateStatefulSetStrategy;
  /**
   * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
   */
  type?: string;
}
