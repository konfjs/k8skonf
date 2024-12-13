import { NonResourceAttributesv1 } from './NonResourceAttributesv1.js';
import { ResourceAttributesv1 } from './ResourceAttributesv1.js';

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export interface SelfSubjectAccessReviewSpecv1 {
  /**
   * NonResourceAttributes describes information for a non-resource access request
   */
  nonResourceAttributes?: NonResourceAttributesv1;
  /**
   * ResourceAuthorizationAttributes describes information for a resource access request
   */
  resourceAttributes?: ResourceAttributesv1;
}
