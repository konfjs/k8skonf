import { CustomResourceSubresourceScale } from './CustomResourceSubresourceScale.ts';

/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 */
export interface CustomResourceSubresources {
  /**
   * scale indicates the custom resource should serve a `/scale` subresource that returns an `autoscaling/v1` Scale object.
   */
  scale?: CustomResourceSubresourceScale;
}
