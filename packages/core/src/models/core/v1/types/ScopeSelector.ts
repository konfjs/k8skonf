import type { ScopedResourceSelectorRequirement } from './ScopedResourceSelectorRequirement.ts';

/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 */
export interface ScopeSelector {
  /**
   * A list of scope selector requirements by scope of the resources.
   */
  matchExpressions?: Array<ScopedResourceSelectorRequirement>;
}
