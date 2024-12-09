import { V1FieldSelectorAttributes } from './V1FieldSelectorAttributes.js';
import { V1LabelSelectorAttributes } from './V1LabelSelectorAttributes.js';

/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export interface V1ResourceAttributes {
  /**
   * fieldSelector describes the limitation on access based on field.  It can only limit access, not broaden it.  This field  is alpha-level. To use this field, you must enable the `AuthorizeWithSelectors` feature gate (disabled by default).
   */
  fieldSelector?: V1FieldSelectorAttributes;
  /**
   * Group is the API Group of the Resource.  \"*\" means all.
   */
  group?: string;
  /**
   * labelSelector describes the limitation on access based on labels.  It can only limit access, not broaden it.  This field  is alpha-level. To use this field, you must enable the `AuthorizeWithSelectors` feature gate (disabled by default).
   */
  labelSelector?: V1LabelSelectorAttributes;
  /**
   * Name is the name of the resource being requested for a \"get\" or deleted for a \"delete\". \"\" (empty) means all.
   */
  name?: string;
  /**
   * Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces \"\" (empty) is defaulted for LocalSubjectAccessReviews \"\" (empty) is empty for cluster-scoped resources \"\" (empty) means \"all\" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
   */
  namespace?: string;
  /**
   * Resource is one of the existing resource types.  \"*\" means all.
   */
  resource?: string;
  /**
   * Subresource is one of the existing resource types.  \"\" means none.
   */
  subresource?: string;
  /**
   * Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  \"*\" means all.
   */
  verb?: string;
  /**
   * Version is the API Version of the Resource.  \"*\" means all.
   */
  version?: string;
}
