import { FieldSelectorAttributesv1 } from './FieldSelectorAttributesv1.js';
import { LabelSelectorAttributesv1 } from './LabelSelectorAttributesv1.js';

/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export interface ResourceAttributesv1 {
  /**
   * fieldSelector describes the limitation on access based on field.  It can only limit access, not broaden it.  This field  is alpha-level. To use this field, you must enable the `AuthorizeWithSelectors` feature gate (disabled by default).
   */
  fieldSelector?: FieldSelectorAttributesv1;
  /**
   * Group is the API Group of the Resource.  \"*\" means all.
   */
  group?: string;
  /**
   * labelSelector describes the limitation on access based on labels.  It can only limit access, not broaden it.  This field  is alpha-level. To use this field, you must enable the `AuthorizeWithSelectors` feature gate (disabled by default).
   */
  labelSelector?: LabelSelectorAttributesv1;
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
