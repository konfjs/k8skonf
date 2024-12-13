import { NodeAffinityv1 } from './NodeAffinityv1.js';
import { PodAffinityv1 } from './PodAffinityv1.js';
import { PodAntiAffinityv1 } from './PodAntiAffinityv1.js';

/**
 * Affinity is a group of affinity scheduling rules.
 */
export interface Affinityv1 {
  /**
   * Describes node affinity scheduling rules for the pod.
   */
  nodeAffinity?: NodeAffinityv1;
  /**
   * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
   */
  podAffinity?: PodAffinityv1;
  /**
   * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
   */
  podAntiAffinity?: PodAntiAffinityv1;
}
