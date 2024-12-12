/**
 * Event represents a single event to a watched resource.
 */
export interface V1WatchEvent {
  /**
   * Object is:  * If Type is Added or Modified: the new state of the object.  * If Type is Deleted: the state of the object immediately before deletion.  * If Type is Error: *Status is recommended; other types may make sense    depending on context.
   */
  object: any;
  /**
   *
   */
  type: string;
}
