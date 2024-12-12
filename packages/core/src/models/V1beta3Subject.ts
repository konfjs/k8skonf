import { V1beta3GroupSubject } from './V1beta3GroupSubject.js';
import { V1beta3ServiceAccountSubject } from './V1beta3ServiceAccountSubject.js';
import { V1beta3UserSubject } from './V1beta3UserSubject.js';

/**
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 */
export interface V1beta3Subject {
  /**
   * `group` matches based on user group name.
   */
  group?: V1beta3GroupSubject;
  /**
   * `kind` indicates which one of the other fields is non-empty. Required
   */
  kind: string;
  /**
   * `serviceAccount` matches ServiceAccounts.
   */
  serviceAccount?: V1beta3ServiceAccountSubject;
  /**
   * `user` matches based on username.
   */
  user?: V1beta3UserSubject;
}
