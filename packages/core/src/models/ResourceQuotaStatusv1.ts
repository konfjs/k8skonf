/**
 * ResourceQuotaStatus defines the enforced hard limits and observed use.
 */
export interface ResourceQuotaStatusv1 {
  /**
   * Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
   */
  hard?: { [key: string]: number | string };
  /**
   * Used is the current observed total usage of the resource in the namespace.
   */
  used?: { [key: string]: number | string };
}
