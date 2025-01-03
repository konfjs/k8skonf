import { ObjectMetav1 } from './ObjectMetav1.js';
import { PriorityLevelConfigurationSpecv1 } from './PriorityLevelConfigurationSpecv1.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface PriorityLevelConfigurationv1Args {
  readonly metadata?: ObjectMetav1;
  readonly spec?: PriorityLevelConfigurationSpecv1;
}

/**
 * PriorityLevelConfiguration represents the configuration of a priority level.
 */
export class PriorityLevelConfigurationv1 extends ApiObject {
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
  readonly metadata: ObjectMetav1;
  /**
   * `spec` is the specification of the desired behavior of a \"request-priority\". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  readonly spec?: PriorityLevelConfigurationSpecv1;

  constructor(app: K8sApp, name: string, args: PriorityLevelConfigurationv1Args) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
