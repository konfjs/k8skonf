/**
 * TokenRequest contains parameters of a service account token.
 */
export interface StorageTokenRequestv1 {
  /**
   * audience is the intended audience of the token in \"TokenRequestSpec\". It will default to the audiences of kube apiserver.
   */
  audience: string;
  /**
   * expirationSeconds is the duration of validity of the token in \"TokenRequestSpec\". It has the same default value of \"ExpirationSeconds\" in \"TokenRequestSpec\".
   */
  expirationSeconds?: number;
}
