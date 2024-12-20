import { MutatingWebhookv1 } from './MutatingWebhookv1.js';
import { ObjectMetav1 } from './ObjectMetav1.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface MutatingWebhookConfigurationv1Args {
  readonly metadata?: ObjectMetav1;
  readonly webhooks?: Array<MutatingWebhookv1>;
}

/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
 */
export class MutatingWebhookConfigurationv1 extends ApiObject {
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
  readonly metadata: ObjectMetav1;
  /**
   * Webhooks is a list of webhooks and the affected resources and operations.
   */
  readonly webhooks?: Array<MutatingWebhookv1>;

  constructor(app: K8sApp, name: string, args: MutatingWebhookConfigurationv1Args) {
    super();
    this.metadata = args.metadata || { name };
    this.metadata.name ??= name;
    this.webhooks = args.webhooks;
    app.addResource(this);
  }
}
