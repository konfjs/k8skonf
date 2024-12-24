import { EventSourcev1 } from './EventSourcev1.js';
import { EventsEventSeriesv1 } from './EventsEventSeriesv1.js';
import { ObjectReferencev1 } from './ObjectReferencev1.js';
import { K8sApp } from '../K8sApp.js';
import { NamespacedObjectMetav1, NamespacedApiObject } from '../ApiObject.js';

export interface EventsEventv1Args {
  readonly metadata?: NamespacedObjectMetav1;
  readonly action?: string;
  readonly deprecatedCount?: number;
  readonly deprecatedFirstTimestamp?: Date;
  readonly deprecatedLastTimestamp?: Date;
  readonly deprecatedSource?: EventSourcev1;
  readonly eventTime: Date;
  readonly note?: string;
  readonly reason?: string;
  readonly regarding?: ObjectReferencev1;
  readonly related?: ObjectReferencev1;
  readonly reportingController?: string;
  readonly reportingInstance?: string;
  readonly series?: EventsEventSeriesv1;
  readonly type?: string;
}

/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
 */
export class EventsEventv1 extends NamespacedApiObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'events.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'Event';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: NamespacedObjectMetav1;
  /**
   * action is what action was taken/failed regarding to the regarding object. It is machine-readable. This field cannot be empty for new Events and it can have at most 128 characters.
   */
  readonly action?: string;
  /**
   * deprecatedCount is the deprecated field assuring backward compatibility with core.v1 Event type.
   */
  readonly deprecatedCount?: number;
  /**
   * deprecatedFirstTimestamp is the deprecated field assuring backward compatibility with core.v1 Event type.
   */
  readonly deprecatedFirstTimestamp?: Date;
  /**
   * deprecatedLastTimestamp is the deprecated field assuring backward compatibility with core.v1 Event type.
   */
  readonly deprecatedLastTimestamp?: Date;
  /**
   * deprecatedSource is the deprecated field assuring backward compatibility with core.v1 Event type.
   */
  readonly deprecatedSource?: EventSourcev1;
  /**
   * eventTime is the time when this Event was first observed. It is required.
   */
  readonly eventTime: Date;
  /**
   * note is a human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.
   */
  readonly note?: string;
  /**
   * reason is why the action was taken. It is human-readable. This field cannot be empty for new Events and it can have at most 128 characters.
   */
  readonly reason?: string;
  /**
   * regarding contains the object this Event is about. In most cases it\'s an Object reporting controller implements, e.g. ReplicaSetController implements ReplicaSets and this event is emitted because it acts on some changes in a ReplicaSet object.
   */
  readonly regarding?: ObjectReferencev1;
  /**
   * related is the optional secondary object for more complex actions. E.g. when regarding object triggers a creation or deletion of related object.
   */
  readonly related?: ObjectReferencev1;
  /**
   * reportingController is the name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`. This field cannot be empty for new Events.
   */
  readonly reportingController?: string;
  /**
   * reportingInstance is the ID of the controller instance, e.g. `kubelet-xyzf`. This field cannot be empty for new Events and it can have at most 128 characters.
   */
  readonly reportingInstance?: string;
  /**
   * series is data about the Event series this event represents or nil if it\'s a singleton Event.
   */
  readonly series?: EventsEventSeriesv1;
  /**
   * type is the type of this event (Normal, Warning), new types could be added in the future. It is machine-readable. This field cannot be empty for new Events.
   */
  readonly type?: string;

  constructor(app: K8sApp, name: string, args: EventsEventv1Args) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.action = args.action;
    this.deprecatedCount = args.deprecatedCount;
    this.deprecatedFirstTimestamp = args.deprecatedFirstTimestamp;
    this.deprecatedLastTimestamp = args.deprecatedLastTimestamp;
    this.deprecatedSource = args.deprecatedSource;
    this.eventTime = args.eventTime;
    this.note = args.note;
    this.reason = args.reason;
    this.regarding = args.regarding;
    this.related = args.related;
    this.reportingController = args.reportingController;
    this.reportingInstance = args.reportingInstance;
    this.series = args.series;
    this.type = args.type;
    app.addResource(this);
  }
}
