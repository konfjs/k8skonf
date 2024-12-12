import { V1ExecAction } from './V1ExecAction.js';
import { V1HTTPGetAction } from './V1HTTPGetAction.js';
import { V1SleepAction } from './V1SleepAction.js';
import { V1TCPSocketAction } from './V1TCPSocketAction.js';

/**
 * LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
 */
export interface V1LifecycleHandler {
  /**
   * Exec specifies the action to take.
   */
  exec?: V1ExecAction;
  /**
   * HTTPGet specifies the http request to perform.
   */
  httpGet?: V1HTTPGetAction;
  /**
   * Sleep represents the duration that the container should sleep before being terminated.
   */
  sleep?: V1SleepAction;
  /**
   * Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified.
   */
  tcpSocket?: V1TCPSocketAction;
}
