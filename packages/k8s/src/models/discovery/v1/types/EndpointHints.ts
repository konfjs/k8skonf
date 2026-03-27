import type { ForZone } from './ForZone.ts';

/**
 * EndpointHints provides hints describing how an endpoint should be consumed.
 */
export interface EndpointHints {
  /**
   * forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing.
   */
  forZones?: Array<ForZone>;
}
