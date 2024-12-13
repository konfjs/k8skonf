/**
 * DeviceAttribute must have exactly one field set.
 */
export interface DeviceAttributev1alpha3 {
  /**
   * BoolValue is a true/false value.
   */
  bool?: boolean;
  /**
   * IntValue is a number.
   */
  _int?: number;
  /**
   * StringValue is a string. Must not be longer than 64 characters.
   */
  string?: string;
  /**
   * VersionValue is a semantic version according to semver.org spec 2.0.0. Must not be longer than 64 characters.
   */
  version?: string;
}
