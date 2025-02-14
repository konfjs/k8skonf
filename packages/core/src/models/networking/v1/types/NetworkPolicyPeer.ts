import type { IPBlock } from './IPBlock.ts';
import type { LabelSelector } from '../../../meta/v1/types/LabelSelector.ts';

/**
 * NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed
 */
export interface NetworkPolicyPeer {
  /**
   * ipBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
   */
  ipBlock?: IPBlock;
  /**
   * namespaceSelector selects namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.  If podSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the namespaces selected by namespaceSelector. Otherwise it selects all pods in the namespaces selected by namespaceSelector.
   */
  namespaceSelector?: LabelSelector;
  /**
   * podSelector is a label selector which selects pods. This field follows standard label selector semantics; if present but empty, it selects all pods.  If namespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the pods matching podSelector in the policy\'s own namespace.
   */
  podSelector?: LabelSelector;
}
