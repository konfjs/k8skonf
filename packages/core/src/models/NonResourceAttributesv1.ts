/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export interface NonResourceAttributesv1 {
  /**
   * Path is the URL path of the request
   */
  path?: string;
  /**
   * Verb is the standard HTTP verb
   */
  verb?: string;
}
