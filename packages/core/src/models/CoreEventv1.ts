import { CoreEventSeriesv1 } from './CoreEventSeriesv1.js';
import { EventSourcev1 } from './EventSourcev1.js';
import { ObjectReferencev1 } from './ObjectReferencev1.js';
import { K8sApp } from '../K8sApp.js';
import { NamespacedObjectMetav1, NamespacedApiObject } from '../ApiObject.js';

export interface CoreEventv1Args {
  readonly metadata?: NamespacedObjectMetav1;
  readonly action?: string;
  readonly count?: number;
  readonly eventTime?: Date;
  readonly firstTimestamp?: Date;
  readonly involvedObject: ObjectReferencev1;
  readonly lastTimestamp?: Date;
  readonly message?: string;
  readonly reason?: string;
  readonly related?: ObjectReferencev1;
  readonly reportingComponent?: string;
  readonly reportingInstance?: string;
  readonly series?: CoreEventSeriesv1;
  readonly source?: EventSourcev1;
  readonly type?: string;
}

/**
 * Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
 */
export class CoreEventv1 extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'Event';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: NamespacedObjectMetav1;
  /**
   * What action was taken/failed regarding to the Regarding object.
   */
  readonly action?: string;
  /**
   * The number of times this event has occurred.
   */
  readonly count?: number;
  /**
   * Time when this Event was first observed.
   */
  readonly eventTime?: Date;
  /**
   * The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
   */
  readonly firstTimestamp?: Date;
  /**
   * The object that this event is about.
   */
  readonly involvedObject: ObjectReferencev1;
  /**
   * The time at which the most recent occurrence of this event was recorded.
   */
  readonly lastTimestamp?: Date;
  /**
   * A human-readable description of the status of this operation.
   */
  readonly message?: string;
  /**
   * This should be a short, machine understandable string that gives the reason for the transition into the object\'s current status.
   */
  readonly reason?: string;
  /**
   * Optional secondary object for more complex actions.
   */
  readonly related?: ObjectReferencev1;
  /**
   * Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
   */
  readonly reportingComponent?: string;
  /**
   * ID of the controller instance, e.g. `kubelet-xyzf`.
   */
  readonly reportingInstance?: string;
  /**
   * Data about the Event series this event represents or nil if it\'s a singleton Event.
   */
  readonly series?: CoreEventSeriesv1;
  /**
   * The component reporting this event. Should be a short machine understandable string.
   */
  readonly source?: EventSourcev1;
  /**
   * Type of this event (Normal, Warning), new types could be added in the future
   */
  readonly type?: string;

  constructor(app: K8sApp, name: string, args: CoreEventv1Args) {
    super(args.metadata?.name || name);
    this.metadata = args.metadata || { name };
    this.metadata.name ??= name;
    this.action = args.action;
    this.count = args.count;
    this.eventTime = args.eventTime;
    this.firstTimestamp = args.firstTimestamp;
    this.involvedObject = args.involvedObject;
    this.lastTimestamp = args.lastTimestamp;
    this.message = args.message;
    this.reason = args.reason;
    this.related = args.related;
    this.reportingComponent = args.reportingComponent;
    this.reportingInstance = args.reportingInstance;
    this.series = args.series;
    this.source = args.source;
    this.type = args.type;
    app.addResource(this);
  }
}
