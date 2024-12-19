import { PodDisruptionBudgetSpecv1 } from './PodDisruptionBudgetSpecv1.js';
import { K8sApp } from '../K8sApp.js';
import { NamespacedObjectMetav1, NamespacedApiObject } from '../ApiObject.js';

export interface PodDisruptionBudgetv1Args {
  readonly metadata?: NamespacedObjectMetav1;
  readonly spec?: PodDisruptionBudgetSpecv1;
}

/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 */
export class PodDisruptionBudgetv1 extends NamespacedApiObject {
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
  readonly metadata: NamespacedObjectMetav1;
  /**
   * Specification of the desired behavior of the PodDisruptionBudget.
   */
  readonly spec?: PodDisruptionBudgetSpecv1;

  constructor(app: K8sApp, name: string, args: PodDisruptionBudgetv1Args) {
    super();
    this.metadata = args.metadata || { name };
    this.metadata.name ??= name;
    this.spec = args.spec;
    app.resources.push(this);
  }
}
