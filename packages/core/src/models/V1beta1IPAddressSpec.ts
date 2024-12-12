import { V1beta1ParentReference } from './V1beta1ParentReference.js';

/**
 * IPAddressSpec describe the attributes in an IP Address.
 */
export interface V1beta1IPAddressSpec {
  /**
   * ParentRef references the resource that an IPAddress is attached to. An IPAddress must reference a parent object.
   */
  parentRef: V1beta1ParentReference;
}
