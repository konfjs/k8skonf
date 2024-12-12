import { V1ObjectMeta } from './V1ObjectMeta.js';
import { V1PriorityLevelConfigurationSpec } from './V1PriorityLevelConfigurationSpec.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface V1PriorityLevelConfigurationArgs {
  readonly metadata?: V1ObjectMeta;
  readonly spec?: V1PriorityLevelConfigurationSpec;
}

/**
 * PriorityLevelConfiguration represents the configuration of a priority level.
 */
export class V1PriorityLevelConfiguration extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'flowcontrol.apiserver.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'PriorityLevelConfiguration';
  /**
   * `metadata` is the standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: V1ObjectMeta;
  /**
   * `spec` is the specification of the desired behavior of a \"request-priority\". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  readonly spec?: V1PriorityLevelConfigurationSpec;

  constructor(app: K8sApp, name: string, args: V1PriorityLevelConfigurationArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.spec = args.spec;
    app.resources.push(this);
  }
}
