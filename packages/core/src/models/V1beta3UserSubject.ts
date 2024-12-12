/**
 * UserSubject holds detailed information for user-kind subject.
 */
export interface V1beta3UserSubject {
  /**
   * `name` is the username that matches, or \"*\" to match all usernames. Required.
   */
  name: string;
}
