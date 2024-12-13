/**
 * An API server instance reports the version it can decode and the version it encodes objects to when persisting objects in the backend.
 */
export interface ServerStorageVersionv1alpha1 {
  /**
   * The ID of the reporting API server.
   */
  apiServerID?: string;
  /**
   * The API server can decode objects encoded in these versions. The encodingVersion must be included in the decodableVersions.
   */
  decodableVersions?: Array<string>;
  /**
   * The API server encodes the object to this version when persisting it in the backend (e.g., etcd).
   */
  encodingVersion?: string;
  /**
   * The API server can serve these versions. DecodableVersions must include all ServedVersions.
   */
  servedVersions?: Array<string>;
}
