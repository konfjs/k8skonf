import { NonResourceAttributes } from './NonResourceAttributes';
import { ResourceAttributes } from './ResourceAttributes';

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export interface SelfSubjectAccessReviewSpec {
  /**
   * NonResourceAttributes describes information for a non-resource access request
   */
  nonResourceAttributes?: NonResourceAttributes;
  /**
   * ResourceAuthorizationAttributes describes information for a resource access request
   */
  resourceAttributes?: ResourceAttributes;
}
