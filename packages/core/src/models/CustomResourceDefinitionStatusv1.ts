import { CustomResourceDefinitionConditionv1 } from './CustomResourceDefinitionConditionv1.js';
import { CustomResourceDefinitionNamesv1 } from './CustomResourceDefinitionNamesv1.js';

/**
 * CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
 */
export interface CustomResourceDefinitionStatusv1 {
  /**
   * acceptedNames are the names that are actually being used to serve discovery. They may be different than the names in spec.
   */
  acceptedNames?: CustomResourceDefinitionNamesv1;
  /**
   * conditions indicate state for particular aspects of a CustomResourceDefinition
   */
  conditions?: Array<CustomResourceDefinitionConditionv1>;
  /**
   * storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.
   */
  storedVersions?: Array<string>;
}
