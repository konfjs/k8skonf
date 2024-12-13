import { ScopedResourceSelectorRequirementv1 } from './ScopedResourceSelectorRequirementv1.js';

/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 */
export interface ScopeSelectorv1 {
  /**
   * A list of scope selector requirements by scope of the resources.
   */
  matchExpressions?: Array<ScopedResourceSelectorRequirementv1>;
}
