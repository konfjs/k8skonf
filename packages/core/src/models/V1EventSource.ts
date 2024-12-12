/**
 * EventSource contains information for an event.
 */
export interface V1EventSource {
  /**
   * Component from which the event is generated.
   */
  component?: string;
  /**
   * Node name on which the event is generated.
   */
  host?: string;
}
