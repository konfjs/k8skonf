import { V1PodTemplateSpec } from './V1PodTemplateSpec.js';
import { K8sApp } from '../K8sApp.js';
import { V1NamespacedObjectMeta, NamespacedApiObject } from '../ApiObject.js';

export interface V1PodTemplateArgs {
  readonly metadata?: V1NamespacedObjectMeta;
  readonly template?: V1PodTemplateSpec;
}

/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 */
export class V1PodTemplate extends NamespacedApiObject {
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
  readonly metadata: V1NamespacedObjectMeta;
  /**
   * Template defines the pods that will be created from this pod template. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  readonly template?: V1PodTemplateSpec;

  constructor(app: K8sApp, name: string, args: V1PodTemplateArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.template = args.template;
    app.resources.push(this);
  }
}
