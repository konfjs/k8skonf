import { V1RollingUpdateStatefulSetStrategy } from './V1RollingUpdateStatefulSetStrategy.js';

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export interface V1StatefulSetUpdateStrategy {
  /**
   * RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
   */
  rollingUpdate?: V1RollingUpdateStatefulSetStrategy;
  /**
   * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
   */
  type?: string;
}
