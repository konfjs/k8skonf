import { NamespaceConditionv1 } from './NamespaceConditionv1.js';

/**
 * NamespaceStatus is information about the current status of a Namespace.
 */
export interface NamespaceStatusv1 {
  /**
   * Represents the latest available observations of a namespace\'s current state.
   */
  conditions?: Array<NamespaceConditionv1>;
  /**
   * Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
   */
  phase?: string;
}
