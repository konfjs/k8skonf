import { PodSchedulingContextSpecv1alpha3 } from './PodSchedulingContextSpecv1alpha3.js';
import { K8sApp } from '../K8sApp.js';
import { NamespacedObjectMetav1, NamespacedApiObject } from '../ApiObject.js';

export interface PodSchedulingContextv1alpha3Args {
  readonly metadata?: NamespacedObjectMetav1;
  readonly spec: PodSchedulingContextSpecv1alpha3;
}

/**
 * PodSchedulingContext objects hold information that is needed to schedule a Pod with ResourceClaims that use \"WaitForFirstConsumer\" allocation mode.  This is an alpha type and requires enabling the DRAControlPlaneController feature gate.
 */
export class PodSchedulingContextv1alpha3 extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'resource.k8s.io/v1alpha3';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'PodSchedulingContext';
  /**
   * Standard object metadata
   */
  readonly metadata: NamespacedObjectMetav1;
  /**
   * Spec describes where resources for the Pod are needed.
   */
  readonly spec: PodSchedulingContextSpecv1alpha3;

  constructor(app: K8sApp, name: string, args: PodSchedulingContextv1alpha3Args) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
