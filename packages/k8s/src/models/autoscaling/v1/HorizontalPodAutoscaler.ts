import type { HorizontalPodAutoscalerSpec } from './types/HorizontalPodAutoscalerSpec.ts';
import type { K8sApp } from '../../../K8sApp.ts';
import { type NamespacedObjectMeta, NamespacedApiObject } from '../../../ApiObject.ts';

export interface HorizontalPodAutoscalerArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly spec?: HorizontalPodAutoscalerSpec;
}

/**
 * configuration of a horizontal pod autoscaler.
 */
export class HorizontalPodAutoscaler extends NamespacedApiObject {
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
  readonly metadata: NamespacedObjectMeta;
  /**
   * spec defines the behaviour of autoscaler. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
   */
  readonly spec?: HorizontalPodAutoscalerSpec;

  constructor(app: K8sApp, name: string, args: HorizontalPodAutoscalerArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
