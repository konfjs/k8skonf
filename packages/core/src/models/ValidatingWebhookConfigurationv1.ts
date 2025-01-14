import { ObjectMetav1 } from './ObjectMetav1.js';
import { ValidatingWebhookv1 } from './ValidatingWebhookv1.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface ValidatingWebhookConfigurationv1Args {
  readonly metadata?: ObjectMetav1;
  readonly webhooks?: Array<ValidatingWebhookv1>;
}

/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 */
export class ValidatingWebhookConfigurationv1 extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'admissionregistration.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ValidatingWebhookConfiguration';
  /**
   * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
   */
  readonly metadata: ObjectMetav1;
  /**
   * Webhooks is a list of webhooks and the affected resources and operations.
   */
  readonly webhooks?: Array<ValidatingWebhookv1>;

  constructor(app: K8sApp, name: string, args: ValidatingWebhookConfigurationv1Args) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.webhooks = args.webhooks;
    app.addResource(this);
  }
}
