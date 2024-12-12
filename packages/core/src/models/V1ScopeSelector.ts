import { V1ScopedResourceSelectorRequirement } from './V1ScopedResourceSelectorRequirement.js';

/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 */
export interface V1ScopeSelector {
  /**
   * A list of scope selector requirements by scope of the resources.
   */
  matchExpressions?: Array<V1ScopedResourceSelectorRequirement>;
}
