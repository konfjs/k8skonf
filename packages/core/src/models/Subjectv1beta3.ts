import { GroupSubjectv1beta3 } from './GroupSubjectv1beta3.js';
import { ServiceAccountSubjectv1beta3 } from './ServiceAccountSubjectv1beta3.js';
import { UserSubjectv1beta3 } from './UserSubjectv1beta3.js';

/**
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 */
export interface Subjectv1beta3 {
  /**
   * `group` matches based on user group name.
   */
  group?: GroupSubjectv1beta3;
  /**
   * `kind` indicates which one of the other fields is non-empty. Required
   */
  kind: string;
  /**
   * `serviceAccount` matches ServiceAccounts.
   */
  serviceAccount?: ServiceAccountSubjectv1beta3;
  /**
   * `user` matches based on username.
   */
  user?: UserSubjectv1beta3;
}
