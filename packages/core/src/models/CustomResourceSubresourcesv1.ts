import { CustomResourceSubresourceScalev1 } from './CustomResourceSubresourceScalev1.js';

/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 */
export interface CustomResourceSubresourcesv1 {
  /**
   * scale indicates the custom resource should serve a `/scale` subresource that returns an `autoscaling/v1` Scale object.
   */
  scale?: CustomResourceSubresourceScalev1;
}
