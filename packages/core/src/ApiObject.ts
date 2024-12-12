import { V1ObjectMeta } from './models/V1ObjectMeta.js';

export interface V1NamespacedObjectMeta extends V1ObjectMeta {
    /**
     * Namespace defines the space within which each name must be unique.
     * An empty namespace is equivalent to the "default" namespace,
     * but "default" is the canonical representation.
     * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
     */
    namespace?: string;
}

/**
 * ApiObject is the base class for all Kubernetes API objects.
 */
export abstract class ApiObject {
    abstract readonly metadata: V1ObjectMeta;
}

/**
 * NamespacedApiObject is the base class for all Kubernetes API
 * objects that are scoped to a namespace.
 */
export abstract class NamespacedApiObject extends ApiObject {
    abstract readonly metadata: V1NamespacedObjectMeta;
}
