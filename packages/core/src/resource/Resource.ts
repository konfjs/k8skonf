import * as yaml from 'yaml';
import type { ObjectMeta } from './ObjectMeta.ts';

export interface NamespacedResourceMeta extends ObjectMeta {
    /**
     * Namespace defines the space within which each name must be unique.
     * An empty namespace is equivalent to the "default" namespace,
     * but "default" is the canonical representation.
     * Must be a DNS_LABEL. Cannot be updated.
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
     */
    namespace?: string;
}

export type ClusterResourceMeta = ObjectMeta;

/**
 * Resource is the base class for all Kubernetes API resources.
 * It can be either a ClusterResource or a NamespacedResource, depending on the scope of the resource.
 */
export abstract class Resource {
    abstract readonly apiVersion: string;
    abstract readonly kind: string;
    /**
     * The `metadata.name` of the resource.
     */
    readonly name: string;
    abstract readonly metadata: ClusterResourceMeta | NamespacedResourceMeta;

    constructor(name: string) {
        this.name = name;
    }

    toYaml(): string {
        const { name: _name, ...rest } = this;
        return yaml.stringify(rest, { schema: 'yaml-1.1', aliasDuplicateObjects: false });
    }
}

/**
 * ClusterResource is the base class for all Kubernetes API
 * resources that are cluster-scoped.
 */
export abstract class ClusterResource extends Resource {
    abstract override readonly metadata: ClusterResourceMeta;
}

/**
 * NamespacedResource is the base class for all Kubernetes API
 * resources that are namespace-scoped.
 */
export abstract class NamespacedResource extends Resource {
    abstract override readonly metadata: NamespacedResourceMeta;
}
