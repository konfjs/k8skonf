import { ForZonev1 } from './ForZonev1.js';

/**
 * EndpointHints provides hints describing how an endpoint should be consumed.
 */
export interface EndpointHintsv1 {
  /**
   * forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing.
   */
  forZones?: Array<ForZonev1>;
}
