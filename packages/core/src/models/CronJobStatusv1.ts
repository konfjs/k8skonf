import { ObjectReferencev1 } from './ObjectReferencev1.js';

/**
 * CronJobStatus represents the current state of a cron job.
 */
export interface CronJobStatusv1 {
  /**
   * A list of pointers to currently running jobs.
   */
  active?: Array<ObjectReferencev1>;
  /**
   * Information when was the last time the job was successfully scheduled.
   */
  lastScheduleTime?: Date;
  /**
   * Information when was the last time the job successfully completed.
   */
  lastSuccessfulTime?: Date;
}
