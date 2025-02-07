import { execSync } from 'node:child_process';
import { log } from 'node:console';
import * as fs from 'node:fs';
import * as path from 'node:path';
import pc from 'picocolors';
import resolvePackage from 'resolve-pkg';

export function upperCaseFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
}

export function lowerCaseFirstLetter(val: string) {
    return val.charAt(0).toLowerCase() + val.slice(1);
}

export function formatCode(modelsPath: string) {
    if (resolvePackage('@biomejs/biome')) {
        log(`Formatting code in ${pc.yellowBright(modelsPath)} using ${pc.yellowBright('Biome')}`);
        execSync(`npx biome format --write --indent-width=2 ${modelsPath}/`, { stdio: 'inherit' });
    } else if (resolvePackage('prettier')) {
        log(
            `Formatting code in ${pc.yellowBright(modelsPath)} using ${pc.yellowBright('Prettier')}`,
        );
        execSync(`npx prettier --write ${modelsPath}/`, { stdio: 'inherit' });
    } else {
        log(pc.red("Couldn't find Prettier or Biome. The generated code was not formatted."));
    }
}

/**
 * Remove some obvious unused files.
 * They're mostly intended to be used programmatically.
 */
export function removeUnusedFiles(modelsPath: string) {
    const unusedFiles = new Set([
        'IoK8sApiCoreV1Event',
        'IoK8sApiCoreV1EventSeries',
        'IoK8sApiCoreV1EventSource',
        'IoK8sApiEventsV1Event',
        'IoK8sApiEventsV1EventSeries',

        'IoK8sApiCoreV1LoadBalancerIngress.ts',
        'IoK8sApiNetworkingV1IngressLoadBalancerIngress.ts',

        'IoK8sApimachineryPkgApisMetaV1ListMeta.ts',
        'IoK8sApimachineryPkgApisMetaV1WatchEvent.ts',
        'IoK8sApimachineryPkgVersionInfo.ts',

        'IoK8sApiPolicyV1Eviction.ts',

        // internal.apiserver.k8s.io
        'IoK8sApiApiserverinternalV1alpha1ServerStorageVersion.ts',
        'IoK8sApiApiserverinternalV1alpha1StorageVersion.ts',
        'IoK8sApiApiserverinternalV1alpha1StorageVersionCondition.ts',
        'IoK8sApiApiserverinternalV1alpha1StorageVersionSpec.ts',

        // authorization.k8s.io
        'IoK8sApiAuthorizationV1LocalSubjectAccessReview.ts',
        'IoK8sApiAuthorizationV1SelfSubjectAccessReview.ts',
        'IoK8sApiAuthorizationV1SelfSubjectRulesReview.ts',
        'IoK8sApiAuthorizationV1SubjectAccessReview.ts',

        // authentication.k8s.io
        'IoK8sApiAuthenticationV1SelfSubjectReview.ts',
        'IoK8sApiAuthenticationV1TokenRequest.ts',
        'IoK8sApiAuthenticationV1TokenReview.ts',
        'IoK8sApiAuthenticationV1beta1SelfSubjectReview.ts',
    ]);
    fs.readdirSync(modelsPath).forEach((file) => {
        if (file.endsWith('Status.ts') || file.endsWith('List.ts') || unusedFiles.has(file)) {
            fs.rmSync(path.join(modelsPath, file));
        }
    });
}
