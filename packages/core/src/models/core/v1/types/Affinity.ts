import { NodeAffinity } from './NodeAffinity.ts';
import { PodAffinity } from './PodAffinity.ts';
import { PodAntiAffinity } from './PodAntiAffinity.ts';

/**
 * Affinity is a group of affinity scheduling rules.
 */
export interface Affinity {
  /**
   * Describes node affinity scheduling rules for the pod.
   */
  nodeAffinity?: NodeAffinity;
  /**
   * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
   */
  podAffinity?: PodAffinity;
  /**
   * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
   */
  podAntiAffinity?: PodAntiAffinity;
}
