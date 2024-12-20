import { HorizontalPodAutoscalerSpecv1 } from './HorizontalPodAutoscalerSpecv1.js';
import { K8sApp } from '../K8sApp.js';
import { NamespacedObjectMetav1, NamespacedApiObject } from '../ApiObject.js';

export interface HorizontalPodAutoscalerv1Args {
  readonly metadata?: NamespacedObjectMetav1;
  readonly spec?: HorizontalPodAutoscalerSpecv1;
}

/**
 * configuration of a horizontal pod autoscaler.
 */
export class HorizontalPodAutoscalerv1 extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'autoscaling/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'HorizontalPodAutoscaler';
  /**
   * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: NamespacedObjectMetav1;
  /**
   * spec defines the behaviour of autoscaler. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
   */
  readonly spec?: HorizontalPodAutoscalerSpecv1;

  constructor(app: K8sApp, name: string, args: HorizontalPodAutoscalerv1Args) {
    super(args.metadata?.name || name);
    this.metadata = args.metadata || { name };
    this.metadata.name ??= name;
    this.spec = args.spec;
    app.addResource(this);
  }
}
