import { ObjectMeta } from '../../meta/v1/types/ObjectMeta';
import { K8sApp } from '../../../K8sApp';
import { ApiObject } from '../../../ApiObject';

export interface PriorityClassArgs {
  readonly metadata?: ObjectMeta;
  readonly description?: string;
  readonly globalDefault?: boolean;
  readonly preemptionPolicy?: string;
  readonly value: number;
}

/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 */
export class PriorityClass extends ApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'scheduling.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'PriorityClass';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: ObjectMeta;
  /**
   * description is an arbitrary string that usually provides guidelines on when this priority class should be used.
   */
  readonly description?: string;
  /**
   * globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.
   */
  readonly globalDefault?: boolean;
  /**
   * preemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.
   */
  readonly preemptionPolicy?: string;
  /**
   * value represents the integer value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec.
   */
  readonly value: number;

  constructor(app: K8sApp, name: string, args: PriorityClassArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.description = args.description;
    this.globalDefault = args.globalDefault;
    this.preemptionPolicy = args.preemptionPolicy;
    this.value = args.value;
    app.addResource(this);
  }
}
