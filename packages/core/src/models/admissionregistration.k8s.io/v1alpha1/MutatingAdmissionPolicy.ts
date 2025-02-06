import { MutatingAdmissionPolicySpec } from '../../admissionregistration/v1alpha1/MutatingAdmissionPolicySpec';
import { ObjectMeta } from '../../meta/v1/ObjectMeta';
import { K8sApp } from '../../../K8sApp';
import { ApiObject } from '../../../ApiObject';

export interface MutatingAdmissionPolicyArgs {
  readonly metadata?: ApiObject;
  readonly spec?: MutatingAdmissionPolicySpec;
}

/**
 * MutatingAdmissionPolicy describes the definition of an admission mutation policy that mutates the object coming into admission chain.
 */
export class MutatingAdmissionPolicy extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'admissionregistration.k8s.io/v1alpha1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'MutatingAdmissionPolicy';
  /**
   * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
   */
  readonly metadata: ObjectMeta;
  /**
   * Specification of the desired behavior of the MutatingAdmissionPolicy.
   */
  readonly spec?: MutatingAdmissionPolicySpec;

  constructor(app: K8sApp, name: string, args: MutatingAdmissionPolicyArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
