/**
 * SELinuxOptions are the labels to be applied to the container
 */
export interface V1SELinuxOptions {
  /**
   * Level is SELinux level label that applies to the container.
   */
  level?: string;
  /**
   * Role is a SELinux role label that applies to the container.
   */
  role?: string;
  /**
   * Type is a SELinux type label that applies to the container.
   */
  type?: string;
  /**
   * User is a SELinux user label that applies to the container.
   */
  user?: string;
}
