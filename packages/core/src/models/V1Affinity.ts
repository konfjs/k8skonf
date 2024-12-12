import { V1NodeAffinity } from './V1NodeAffinity.js';
import { V1PodAffinity } from './V1PodAffinity.js';
import { V1PodAntiAffinity } from './V1PodAntiAffinity.js';

/**
 * Affinity is a group of affinity scheduling rules.
 */
export interface V1Affinity {
  /**
   * Describes node affinity scheduling rules for the pod.
   */
  nodeAffinity?: V1NodeAffinity;
  /**
   * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
   */
  podAffinity?: V1PodAffinity;
  /**
   * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
   */
  podAntiAffinity?: V1PodAntiAffinity;
}
