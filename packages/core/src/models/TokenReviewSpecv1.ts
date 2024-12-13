/**
 * TokenReviewSpec is a description of the token authentication request.
 */
export interface TokenReviewSpecv1 {
  /**
   * Audiences is a list of the identifiers that the resource server presented with the token identifies as. Audience-aware token authenticators will verify that the token was intended for at least one of the audiences in this list. If no audiences are provided, the audience will default to the audience of the Kubernetes apiserver.
   */
  audiences?: Array<string>;
  /**
   * Token is the opaque bearer token.
   */
  token?: string;
}
