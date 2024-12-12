/**
 * DeviceRequestAllocationResult contains the allocation result for one request.
 */
export interface V1alpha3DeviceRequestAllocationResult {
  /**
   * Device references one device instance via its name in the driver\'s resource pool. It must be a DNS label.
   */
  device: string;
  /**
   * Driver specifies the name of the DRA driver whose kubelet plugin should be invoked to process the allocation once the claim is needed on a node.  Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver.
   */
  driver: string;
  /**
   * This name together with the driver name and the device name field identify which device was allocated (`<driver name>/<pool name>/<device name>`).  Must not be longer than 253 characters and may contain one or more DNS sub-domains separated by slashes.
   */
  pool: string;
  /**
   * Request is the name of the request in the claim which caused this device to be allocated. Multiple devices may have been allocated per request.
   */
  request: string;
}
