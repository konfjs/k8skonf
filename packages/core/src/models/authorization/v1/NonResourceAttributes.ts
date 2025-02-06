/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export interface NonResourceAttributes {
  /**
   * Path is the URL path of the request
   */
  path?: string;
  /**
   * Verb is the standard HTTP verb
   */
  verb?: string;
}
