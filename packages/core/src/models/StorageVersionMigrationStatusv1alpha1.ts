import { MigrationConditionv1alpha1 } from './MigrationConditionv1alpha1.js';

/**
 * Status of the storage version migration.
 */
export interface StorageVersionMigrationStatusv1alpha1 {
  /**
   * The latest available observations of the migration\'s current state.
   */
  conditions?: Array<MigrationConditionv1alpha1>;
  /**
   * ResourceVersion to compare with the GC cache for performing the migration. This is the current resource version of given group, version and resource when kube-controller-manager first observes this StorageVersionMigration resource.
   */
  resourceVersion?: string;
}
