import { VolumeAttachmentSourcev1 } from './VolumeAttachmentSourcev1.js';

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export interface VolumeAttachmentSpecv1 {
  /**
   * attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
   */
  attacher: string;
  /**
   * nodeName represents the node that the volume should be attached to.
   */
  nodeName: string;
  /**
   * source represents the volume that should be attached.
   */
  source: VolumeAttachmentSourcev1;
}
