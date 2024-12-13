import { GroupVersionResourcev1alpha1 } from './GroupVersionResourcev1alpha1.js';

/**
 * Spec of the storage version migration.
 */
export interface StorageVersionMigrationSpecv1alpha1 {
  /**
   * The token used in the list options to get the next chunk of objects to migrate. When the .status.conditions indicates the migration is \"Running\", users can use this token to check the progress of the migration.
   */
  continueToken?: string;
  /**
   * The resource that is being migrated. The migrator sends requests to the endpoint serving the resource. Immutable.
   */
  resource: GroupVersionResourcev1alpha1;
}
