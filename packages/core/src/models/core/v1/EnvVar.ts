import { EnvVarSource } from './EnvVarSource';

/**
 * EnvVar represents an environment variable present in a Container.
 */
export interface EnvVar {
  /**
   * Name of the environment variable. Must be a C_IDENTIFIER.
   */
  name: string;
  /**
   * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to \"\".
   */
  value?: string;
  /**
   * Source for the environment variable\'s value. Cannot be used if value is not empty.
   */
  valueFrom?: EnvVarSource;
}
