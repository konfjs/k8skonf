import * as fs from 'node:fs';
import * as path from 'node:path';

export function upperCaseFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
}

export function lowerCaseFirstLetter(val: string) {
    return val.charAt(0).toLowerCase() + val.slice(1);
}

/**
 * Remove some obvious unused files.
 * They're mostly intended to be used programmatically.
 * Note: Is there a better way to do this?
 */
export function removeUnusedFiles(modelsPath: string) {
    const unusedFiles = new Set([
        'IoK8sApiAutoscalingV1Scale.ts',
        'IoK8sApiAutoscalingV1ScaleSpec.ts',

        'IoK8sApiCoreV1ContainerState.ts',
        'IoK8sApiCoreV1ContainerStateRunning.ts',
        'IoK8sApiCoreV1ContainerStateTerminated.ts',
        'IoK8sApiCoreV1ContainerStateWaiting.ts',
        'IoK8sApiCoreV1ContainerUser.ts',
        'IoK8sApiCoreV1DaemonEndpoint.ts',
        'IoK8sApiCoreV1Event.ts',
        'IoK8sApiCoreV1EventSeries.ts',
        'IoK8sApiCoreV1EventSource.ts',
        'IoK8sApiCoreV1LinuxContainerUser.ts',
        'IoK8sApiCoreV1LoadBalancerIngress.ts',
        'IoK8sApiCoreV1NodeDaemonEndpoints.ts',
        'IoK8sApiCoreV1NodeRuntimeHandler.ts',
        'IoK8sApiCoreV1NodeRuntimeHandlerFeatures.ts',

        'IoK8sApiAdmissionregistrationV1beta1ExpressionWarning.ts',
        'IoK8sApiAdmissionregistrationV1beta1TypeChecking.ts',
        'IoK8sApiAdmissionregistrationV1ExpressionWarning.ts',
        'IoK8sApiAdmissionregistrationV1TypeChecking.ts',

        'IoK8sApiEventsV1Event.ts',
        'IoK8sApiEventsV1EventSeries.ts',

        'IoK8sApiNetworkingV1IngressLoadBalancerIngress.ts',

        'IoK8sApimachineryPkgApisMetaV1APIGroup.ts',
        'IoK8sApimachineryPkgApisMetaV1APIVersions.ts',
        'IoK8sApimachineryPkgApisMetaV1DeleteOptions.ts',
        'IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery.ts',
        'IoK8sApimachineryPkgApisMetaV1ListMeta.ts',
        'IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR.ts',
        'IoK8sApimachineryPkgApisMetaV1StatusCause.ts',
        'IoK8sApimachineryPkgApisMetaV1StatusDetails.ts',
        'IoK8sApimachineryPkgApisMetaV1WatchEvent.ts',
        'IoK8sApiPolicyV1Eviction.ts',

        'IoK8sApiResourceV1alpha3AllocationResult.ts',
        'IoK8sApiResourceV1alpha3DeviceAllocationConfiguration.ts',
        'IoK8sApiResourceV1alpha3DeviceAllocationResult.ts',
        'IoK8sApiResourceV1alpha3DeviceRequestAllocationResult.ts',

        'IoK8sApiResourceV1beta1AllocationResult.ts',
        'IoK8sApiResourceV1beta1DeviceAllocationConfiguration.ts',
        'IoK8sApiResourceV1beta1DeviceAllocationResult.ts',
        'IoK8sApiResourceV1beta1DeviceRequestAllocationResult.ts',

        // internal.apiserver.k8s.io
        'IoK8sApiApiserverinternalV1alpha1ServerStorageVersion.ts',
        'IoK8sApiApiserverinternalV1alpha1StorageVersion.ts',
        'IoK8sApiApiserverinternalV1alpha1StorageVersionCondition.ts',

        // authorization.k8s.io
        'IoK8sApiAuthorizationV1FieldSelectorAttributes.ts',
        'IoK8sApiAuthorizationV1LocalSubjectAccessReview.ts',
        'IoK8sApiAuthorizationV1ResourceAttributes.ts',
        'IoK8sApiAuthorizationV1SelfSubjectAccessReview.ts',
        'IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec.ts',
        'IoK8sApiAuthorizationV1SelfSubjectRulesReview.ts',
        'IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec.ts',
        'IoK8sApiAuthorizationV1SubjectAccessReview.ts',
        'IoK8sApiAuthorizationV1SubjectAccessReviewSpec.ts',

        // authentication.k8s.io
        'IoK8sApiAuthenticationV1beta1SelfSubjectReview.ts',
        'IoK8sApiAuthenticationV1SelfSubjectReview.ts',
        'IoK8sApiAuthenticationV1TokenRequest.ts',
        'IoK8sApiAuthenticationV1TokenRequestSpec.ts',
        'IoK8sApiAuthenticationV1TokenReview.ts',
        'IoK8sApiAuthenticationV1TokenReviewSpec.ts',
    ]);
    fs.readdirSync(modelsPath).forEach((file) => {
        if (file.endsWith('Status.ts') || file.endsWith('List.ts') || unusedFiles.has(file)) {
            fs.rmSync(path.join(modelsPath, file));
        }
    });
}
