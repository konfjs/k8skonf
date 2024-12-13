/**
 * CertificateSigningRequestCondition describes a condition of a CertificateSigningRequest object
 */
export interface CertificateSigningRequestConditionv1 {
  /**
   * lastTransitionTime is the time the condition last transitioned from one status to another. If unset, when a new condition type is added or an existing condition\'s status is changed, the server defaults this to the current time.
   */
  lastTransitionTime?: Date;
  /**
   * lastUpdateTime is the time of the last update to this condition
   */
  lastUpdateTime?: Date;
  /**
   * message contains a human readable message with details about the request state
   */
  message?: string;
  /**
   * reason indicates a brief reason for the request state
   */
  reason?: string;
  /**
   * type of the condition. Known conditions are \"Approved\", \"Denied\", and \"Failed\".  An \"Approved\" condition is added via the /approval subresource, indicating the request was approved and should be issued by the signer.  A \"Denied\" condition is added via the /approval subresource, indicating the request was denied and should not be issued by the signer.  A \"Failed\" condition is added via the /status subresource, indicating the signer failed to issue the certificate.  Approved and Denied conditions are mutually exclusive. Approved, Denied, and Failed conditions cannot be removed once added.  Only one condition of a given type is allowed.
   */
  type: string;
}
