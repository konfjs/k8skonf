import { FlowSchemaConditionv1beta3 } from './FlowSchemaConditionv1beta3.js';

/**
 * FlowSchemaStatus represents the current state of a FlowSchema.
 */
export interface FlowSchemaStatusv1beta3 {
  /**
   * `conditions` is a list of the current states of FlowSchema.
   */
  conditions?: Array<FlowSchemaConditionv1beta3>;
}
