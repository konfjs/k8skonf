import { V1CustomResourceDefinitionSpec } from './V1CustomResourceDefinitionSpec.js';
import { V1ObjectMeta } from './V1ObjectMeta.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface V1CustomResourceDefinitionArgs {
  readonly metadata?: V1ObjectMeta;
  readonly spec: V1CustomResourceDefinitionSpec;
}

/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 */
export class V1CustomResourceDefinition extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'apiextensions.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'CustomResourceDefinition';
  /**
   * Standard object\'s metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: V1ObjectMeta;
  /**
   * spec describes how the user wants the resources to appear
   */
  readonly spec: V1CustomResourceDefinitionSpec;

  constructor(app: K8sApp, name: string, args: V1CustomResourceDefinitionArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
