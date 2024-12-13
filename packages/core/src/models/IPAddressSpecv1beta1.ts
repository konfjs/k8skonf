import { ParentReferencev1beta1 } from './ParentReferencev1beta1.js';

/**
 * IPAddressSpec describe the attributes in an IP Address.
 */
export interface IPAddressSpecv1beta1 {
  /**
   * ParentRef references the resource that an IPAddress is attached to. An IPAddress must reference a parent object.
   */
  parentRef: ParentReferencev1beta1;
}
