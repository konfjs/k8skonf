import { V1PodDisruptionBudgetSpec } from './V1PodDisruptionBudgetSpec.js';
import { K8sApp } from '../K8sApp.js';
import { V1NamespacedObjectMeta, NamespacedApiObject } from '../ApiObject.js';

export interface V1PodDisruptionBudgetArgs {
  readonly metadata?: V1NamespacedObjectMeta;
  readonly spec?: V1PodDisruptionBudgetSpec;
}

/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 */
export class V1PodDisruptionBudget extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'policy/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'PodDisruptionBudget';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: V1NamespacedObjectMeta;
  /**
   * Specification of the desired behavior of the PodDisruptionBudget.
   */
  readonly spec?: V1PodDisruptionBudgetSpec;

  constructor(app: K8sApp, name: string, args: V1PodDisruptionBudgetArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
