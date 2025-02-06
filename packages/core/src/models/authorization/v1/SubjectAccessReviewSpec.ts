import { NonResourceAttributes } from './NonResourceAttributes';
import { ResourceAttributes } from './ResourceAttributes';

/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export interface SubjectAccessReviewSpec {
  /**
   * Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
   */
  extra?: { [key: string]: Array<string> };
  /**
   * Groups is the groups you\'re testing for.
   */
  groups?: Array<string>;
  /**
   * NonResourceAttributes describes information for a non-resource access request
   */
  nonResourceAttributes?: NonResourceAttributes;
  /**
   * ResourceAuthorizationAttributes describes information for a resource access request
   */
  resourceAttributes?: ResourceAttributes;
  /**
   * UID information about the requesting user.
   */
  uid?: string;
  /**
   * User is the user you\'re testing for. If you specify \"User\" but not \"Groups\", then is it interpreted as \"What if User were not a member of any groups
   */
  user?: string;
}
