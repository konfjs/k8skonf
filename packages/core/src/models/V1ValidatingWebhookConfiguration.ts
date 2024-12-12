import { V1ObjectMeta } from './V1ObjectMeta.js';
import { V1ValidatingWebhook } from './V1ValidatingWebhook.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface V1ValidatingWebhookConfigurationArgs {
  readonly metadata?: V1ObjectMeta;
  readonly webhooks?: Array<V1ValidatingWebhook>;
}

/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 */
export class V1ValidatingWebhookConfiguration extends ApiObject {
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
  readonly metadata: V1ObjectMeta;
  /**
   * Webhooks is a list of webhooks and the affected resources and operations.
   */
  readonly webhooks?: Array<V1ValidatingWebhook>;

  constructor(app: K8sApp, name: string, args: V1ValidatingWebhookConfigurationArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.webhooks = args.webhooks;
    app.resources.push(this);
  }
}
