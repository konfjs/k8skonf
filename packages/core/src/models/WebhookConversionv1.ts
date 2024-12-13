import { WebhookClientConfigv1 } from './WebhookClientConfigv1.js';

/**
 * WebhookConversion describes how to call a conversion webhook
 */
export interface WebhookConversionv1 {
  /**
   * clientConfig is the instructions for how to call the webhook if strategy is `Webhook`.
   */
  clientConfig?: WebhookClientConfigv1;
  /**
   * conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.
   */
  conversionReviewVersions: Array<string>;
}
