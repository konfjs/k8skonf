import { StatefulSetSpecv1 } from './StatefulSetSpecv1.js';
import { K8sApp } from '../K8sApp.js';
import { NamespacedObjectMetav1, NamespacedApiObject } from '../ApiObject.js';

export interface StatefulSetv1Args {
  readonly metadata?: NamespacedObjectMetav1;
  readonly spec?: StatefulSetSpecv1;
}

/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:   - Network: A single stable DNS and hostname.   - Storage: As many VolumeClaims as requested.  The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export class StatefulSetv1 extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'apps/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'StatefulSet';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: NamespacedObjectMetav1;
  /**
   * Spec defines the desired identities of pods in this set.
   */
  readonly spec?: StatefulSetSpecv1;

  constructor(app: K8sApp, name: string, args: StatefulSetv1Args) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
