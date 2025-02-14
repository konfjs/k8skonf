import { ValidatingAdmissionPolicySpec } from './types/ValidatingAdmissionPolicySpec.ts';
import { ObjectMeta } from '../../meta/v1/types/ObjectMeta.ts';
import { K8sApp } from '../../../K8sApp.ts';
import { ApiObject } from '../../../ApiObject.ts';

export interface ValidatingAdmissionPolicyArgs {
  readonly metadata?: ObjectMeta;
  readonly spec?: ValidatingAdmissionPolicySpec;
}

/**
 * ValidatingAdmissionPolicy describes the definition of an admission validation policy that accepts or rejects an object without changing it.
 */
export class ValidatingAdmissionPolicy extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'admissionregistration.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'ValidatingAdmissionPolicy';
  /**
   * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
   */
  readonly metadata: ObjectMeta;
  /**
   * Specification of the desired behavior of the ValidatingAdmissionPolicy.
   */
  readonly spec?: ValidatingAdmissionPolicySpec;

  constructor(app: K8sApp, name: string, args: ValidatingAdmissionPolicyArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
