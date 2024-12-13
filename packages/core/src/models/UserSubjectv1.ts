/**
 * UserSubject holds detailed information for user-kind subject.
 */
export interface UserSubjectv1 {
  /**
   * `name` is the username that matches, or \"*\" to match all usernames. Required.
   */
  name: string;
}
