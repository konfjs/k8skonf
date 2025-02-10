import { ValidatingWebhook } from './types/ValidatingWebhook';
import { ObjectMeta } from '../../meta/v1/types/ObjectMeta';
import { K8sApp } from '../../../K8sApp';
import { ApiObject } from '../../../ApiObject';

export interface ValidatingWebhookConfigurationArgs {
  readonly metadata?: ObjectMeta;
  readonly webhooks?: Array<ValidatingWebhook>;
}

/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 */
export class ValidatingWebhookConfiguration extends ApiObject {
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
  readonly metadata: ObjectMeta;
  /**
   * Webhooks is a list of webhooks and the affected resources and operations.
   */
  readonly webhooks?: Array<ValidatingWebhook>;

  constructor(app: K8sApp, name: string, args: ValidatingWebhookConfigurationArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.webhooks = args.webhooks;
    app.addResource(this);
  }
}
