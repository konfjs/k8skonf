import { V1CustomResourceSubresourceScale } from './V1CustomResourceSubresourceScale.js';

/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 */
export interface V1CustomResourceSubresources {
  /**
   * scale indicates the custom resource should serve a `/scale` subresource that returns an `autoscaling/v1` Scale object.
   */
  scale?: V1CustomResourceSubresourceScale;
}
