import { V1GroupSubject } from './V1GroupSubject.js';
import { V1ServiceAccountSubject } from './V1ServiceAccountSubject.js';
import { V1UserSubject } from './V1UserSubject.js';

/**
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 */
export interface V1Subject {
  /**
   * `group` matches based on user group name.
   */
  group?: V1GroupSubject;
  /**
   * `kind` indicates which one of the other fields is non-empty. Required
   */
  kind: string;
  /**
   * `serviceAccount` matches ServiceAccounts.
   */
  serviceAccount?: V1ServiceAccountSubject;
  /**
   * `user` matches based on username.
   */
  user?: V1UserSubject;
}
