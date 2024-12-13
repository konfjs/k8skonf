import { ServerStorageVersionv1alpha1 } from './ServerStorageVersionv1alpha1.js';
import { StorageVersionConditionv1alpha1 } from './StorageVersionConditionv1alpha1.js';

/**
 * API server instances report the versions they can decode and the version they encode objects to when persisting objects in the backend.
 */
export interface StorageVersionStatusv1alpha1 {
  /**
   * If all API server instances agree on the same encoding storage version, then this field is set to that version. Otherwise this field is left empty. API servers should finish updating its storageVersionStatus entry before serving write operations, so that this field will be in sync with the reality.
   */
  commonEncodingVersion?: string;
  /**
   * The latest available observations of the storageVersion\'s state.
   */
  conditions?: Array<StorageVersionConditionv1alpha1>;
  /**
   * The reported versions per API server instance.
   */
  storageVersions?: Array<ServerStorageVersionv1alpha1>;
}
