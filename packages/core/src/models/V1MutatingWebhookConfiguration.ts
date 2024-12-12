import { V1MutatingWebhook } from './V1MutatingWebhook.js';
import { V1ObjectMeta } from './V1ObjectMeta.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface V1MutatingWebhookConfigurationArgs {
  readonly metadata?: V1ObjectMeta;
  readonly webhooks?: Array<V1MutatingWebhook>;
}

/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
 */
export class V1MutatingWebhookConfiguration extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'admissionregistration.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'MutatingWebhookConfiguration';
  /**
   * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
   */
  readonly metadata: V1ObjectMeta;
  /**
   * Webhooks is a list of webhooks and the affected resources and operations.
   */
  readonly webhooks?: Array<V1MutatingWebhook>;

  constructor(app: K8sApp, name: string, args: V1MutatingWebhookConfigurationArgs) {
    super();
    this.metadata = args.metadata || { name };
    this.webhooks = args.webhooks;
    app.resources.push(this);
  }
}
