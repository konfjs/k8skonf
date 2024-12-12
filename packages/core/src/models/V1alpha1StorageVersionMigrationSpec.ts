import { V1alpha1GroupVersionResource } from './V1alpha1GroupVersionResource.js';

/**
 * Spec of the storage version migration.
 */
export interface V1alpha1StorageVersionMigrationSpec {
  /**
   * The token used in the list options to get the next chunk of objects to migrate. When the .status.conditions indicates the migration is \"Running\", users can use this token to check the progress of the migration.
   */
  continueToken?: string;
  /**
   * The resource that is being migrated. The migrator sends requests to the endpoint serving the resource. Immutable.
   */
  resource: V1alpha1GroupVersionResource;
}
