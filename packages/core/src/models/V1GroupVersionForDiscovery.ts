/**
 * GroupVersion contains the \"group/version\" and \"version\" string of a version. It is made a struct to keep extensibility.
 */
export interface V1GroupVersionForDiscovery {
  /**
   * groupVersion specifies the API group and version in the form \"group/version\"
   */
  groupVersion: string;
  /**
   * version specifies the version in the form of \"version\". This is to save the clients the trouble of splitting the GroupVersion.
   */
  version: string;
}
