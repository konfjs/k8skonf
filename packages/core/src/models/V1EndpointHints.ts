import { V1ForZone } from './V1ForZone.js';

/**
 * EndpointHints provides hints describing how an endpoint should be consumed.
 */
export interface V1EndpointHints {
  /**
   * forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing.
   */
  forZones?: Array<V1ForZone>;
}
