import { FlowSchemaConditionv1 } from './FlowSchemaConditionv1.js';

/**
 * FlowSchemaStatus represents the current state of a FlowSchema.
 */
export interface FlowSchemaStatusv1 {
  /**
   * `conditions` is a list of the current states of FlowSchema.
   */
  conditions?: Array<FlowSchemaConditionv1>;
}
