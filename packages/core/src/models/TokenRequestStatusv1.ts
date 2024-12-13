/**
 * TokenRequestStatus is the result of a token request.
 */
export interface TokenRequestStatusv1 {
  /**
   * ExpirationTimestamp is the time of expiration of the returned token.
   */
  expirationTimestamp: Date;
  /**
   * Token is the opaque bearer token.
   */
  token: string;
}
