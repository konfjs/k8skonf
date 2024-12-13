import { UserInfov1 } from './UserInfov1.js';

/**
 * SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user.
 */
export interface SelfSubjectReviewStatusv1alpha1 {
  /**
   * User attributes of the user making this request.
   */
  userInfo?: UserInfov1;
}
