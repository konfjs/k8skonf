import { ApplyConfigurationv1alpha1 } from './ApplyConfigurationv1alpha1.js';
import { JSONPatchv1alpha1 } from './JSONPatchv1alpha1.js';

/**
 * Mutation specifies the CEL expression which is used to apply the Mutation.
 */
export interface Mutationv1alpha1 {
  /**
   * applyConfiguration defines the desired configuration values of an object. The configuration is applied to the admission object using [structured merge diff](https://github.com/kubernetes-sigs/structured-merge-diff). A CEL expression is used to create apply configuration.
   */
  applyConfiguration?: ApplyConfigurationv1alpha1;
  /**
   * jsonPatch defines a [JSON patch](https://jsonpatch.com/) operation to perform a mutation to the object. A CEL expression is used to create the JSON patch.
   */
  jsonPatch?: JSONPatchv1alpha1;
  /**
   * patchType indicates the patch strategy used. Allowed values are \"ApplyConfiguration\" and \"JSONPatch\". Required.
   */
  patchType: string;
}
