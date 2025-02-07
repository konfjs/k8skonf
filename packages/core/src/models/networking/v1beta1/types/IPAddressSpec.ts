import { ParentReference } from './ParentReference';

/**
 * IPAddressSpec describe the attributes in an IP Address.
 */
export interface IPAddressSpec {
  /**
   * ParentRef references the resource that an IPAddress is attached to. An IPAddress must reference a parent object.
   */
  parentRef: ParentReference;
}
