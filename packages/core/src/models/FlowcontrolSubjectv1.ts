import { GroupSubjectv1 } from './GroupSubjectv1.js';
import { ServiceAccountSubjectv1 } from './ServiceAccountSubjectv1.js';
import { UserSubjectv1 } from './UserSubjectv1.js';

/**
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 */
export interface FlowcontrolSubjectv1 {
  /**
   * `group` matches based on user group name.
   */
  group?: GroupSubjectv1;
  /**
   * `kind` indicates which one of the other fields is non-empty. Required
   */
  kind: string;
  /**
   * `serviceAccount` matches ServiceAccounts.
   */
  serviceAccount?: ServiceAccountSubjectv1;
  /**
   * `user` matches based on username.
   */
  user?: UserSubjectv1;
}
