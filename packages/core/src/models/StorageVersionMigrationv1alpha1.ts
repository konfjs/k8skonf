import { ObjectMetav1 } from './ObjectMetav1.js';
import { StorageVersionMigrationSpecv1alpha1 } from './StorageVersionMigrationSpecv1alpha1.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface StorageVersionMigrationv1alpha1Args {
  readonly metadata?: ObjectMetav1;
  readonly spec?: StorageVersionMigrationSpecv1alpha1;
}

/**
 * StorageVersionMigration represents a migration of stored data to the latest storage version.
 */
export class StorageVersionMigrationv1alpha1 extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'storagemigration.k8s.io/v1alpha1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'StorageVersionMigration';
  /**
   * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: ObjectMetav1;
  /**
   * Specification of the migration.
   */
  readonly spec?: StorageVersionMigrationSpecv1alpha1;

  constructor(app: K8sApp, name: string, args: StorageVersionMigrationv1alpha1Args) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
