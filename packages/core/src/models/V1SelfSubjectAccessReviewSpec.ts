import { V1NonResourceAttributes } from './V1NonResourceAttributes.js';
import { V1ResourceAttributes } from './V1ResourceAttributes.js';

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export interface V1SelfSubjectAccessReviewSpec {
  /**
   * NonResourceAttributes describes information for a non-resource access request
   */
  nonResourceAttributes?: V1NonResourceAttributes;
  /**
   * ResourceAuthorizationAttributes describes information for a resource access request
   */
  resourceAttributes?: V1ResourceAttributes;
}
