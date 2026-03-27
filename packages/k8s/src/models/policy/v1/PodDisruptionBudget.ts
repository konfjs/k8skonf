import type { PodDisruptionBudgetSpec } from './types/PodDisruptionBudgetSpec.ts';
import type { K8sApp } from '../../../K8sApp.ts';
import { type NamespacedObjectMeta, NamespacedApiObject } from '../../../ApiObject.ts';

export interface PodDisruptionBudgetArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly spec?: PodDisruptionBudgetSpec;
}

/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 */
export class PodDisruptionBudget extends NamespacedApiObject {
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
  readonly metadata: NamespacedObjectMeta;
  /**
   * Specification of the desired behavior of the PodDisruptionBudget.
   */
  readonly spec?: PodDisruptionBudgetSpec;

  constructor(app: K8sApp, name: string, args: PodDisruptionBudgetArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
