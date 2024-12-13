import { ObjectMetav1 } from './models/ObjectMetav1.js';

export interface NamespacedObjectMetav1 extends ObjectMetav1 {
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
    abstract readonly metadata: ObjectMetav1;
}

/**
 * NamespacedApiObject is the base class for all Kubernetes API
 * objects that are scoped to a namespace.
 */
export abstract class NamespacedApiObject extends ApiObject {
    abstract readonly metadata: NamespacedObjectMetav1;
}
