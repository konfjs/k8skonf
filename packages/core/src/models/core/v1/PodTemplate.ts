import type { PodTemplateSpec } from './types/PodTemplateSpec.ts';
import type { K8sApp } from '../../../K8sApp.ts';
import { type NamespacedObjectMeta, NamespacedApiObject } from '../../../ApiObject.ts';

export interface PodTemplateArgs {
  readonly metadata?: NamespacedObjectMeta;
  readonly template?: PodTemplateSpec;
}

/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 */
export class PodTemplate extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'PodTemplate';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: NamespacedObjectMeta;
  /**
   * Template defines the pods that will be created from this pod template. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  readonly template?: PodTemplateSpec;

  constructor(app: K8sApp, name: string, args: PodTemplateArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.template = args.template;
    app.addResource(this);
  }
}
