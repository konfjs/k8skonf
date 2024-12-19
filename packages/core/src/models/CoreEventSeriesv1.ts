/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export interface CoreEventSeriesv1 {
  /**
   * Number of occurrences in this series up to the last heartbeat time
   */
  count?: number;
  /**
   * Time of the last occurrence observed
   */
  lastObservedTime?: Date;
}
