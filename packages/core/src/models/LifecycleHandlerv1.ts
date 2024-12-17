import { ExecActionv1 } from './ExecActionv1.js';
import { HTTPGetActionv1 } from './HTTPGetActionv1.js';
import { SleepActionv1 } from './SleepActionv1.js';
import { TCPSocketActionv1 } from './TCPSocketActionv1.js';

/**
 * LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
 */
export interface LifecycleHandlerv1 {
  /**
   * Exec specifies a command to execute in the container.
   */
  exec?: ExecActionv1;
  /**
   * HTTPGet specifies an HTTP GET request to perform.
   */
  httpGet?: HTTPGetActionv1;
  /**
   * Sleep represents a duration that the container should sleep.
   */
  sleep?: SleepActionv1;
  /**
   * Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for backward compatibility. There is no validation of this field and lifecycle hooks will fail at runtime when it is specified.
   */
  tcpSocket?: TCPSocketActionv1;
}
