import { V1HTTPIngressPath } from './V1HTTPIngressPath.js';

/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last \'/\' and before the first \'?\' or \'#\'.
 */
export interface V1HTTPIngressRuleValue {
  /**
   * paths is a collection of paths that map requests to backends.
   */
  paths: Array<V1HTTPIngressPath>;
}
