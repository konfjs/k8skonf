import * as yaml from 'yaml';
import type { ObjectMeta } from './ObjectMeta.ts';
import type { K8sApp } from '../K8sApp.ts';

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

// `type ClusterResourceMeta = ObjectMeta` cannot be used here because
// typescript was using `ObjectMeta` as a type identifier instead of `ClusterResourceMeta`
// which makes code completion, error messages look confusing.
export interface ClusterResourceMeta extends ObjectMeta {}

export interface ResourceArgs {
    readonly apiVersion: string;
    readonly kind: string;
    readonly metadata?: ClusterResourceMeta | NamespacedResourceMeta;
    readonly spec?: any;
    readonly [key: string]: any;
}

export interface ClusterResourceArgs extends ResourceArgs {
    readonly metadata?: ClusterResourceMeta;
}

export interface NamespacedResourceArgs extends ResourceArgs {
    readonly metadata?: NamespacedResourceMeta;
}

/**
 * Resource is the base class for all Kubernetes API resources.
 * Kubernetes resources can be either a ClusterResource or a NamespacedResource,
 * depending on the scope of the resource.
 */
export class Resource {
    readonly apiVersion: string;
    readonly kind: string;
    /**
     * The `metadata.name` of the resource.
     */
    readonly name: string;
    readonly metadata: ClusterResourceMeta | NamespacedResourceMeta;
    readonly spec?: any;

    constructor(app: K8sApp, name: string, args: ResourceArgs) {
        const { apiVersion, kind, metadata, spec, ...rest } = args;
        this.apiVersion = apiVersion;
        this.kind = kind;
        this.metadata = {
            ...metadata,
            name: metadata?.name || name,
        };
        this.name = this.metadata.name;
        this.spec = spec;
        Object.assign(this, rest);
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
export class ClusterResource extends Resource {
    override readonly metadata: ClusterResourceMeta;
    constructor(app: K8sApp, name: string, args: ClusterResourceArgs) {
        super(app, name, args);
        this.metadata = {
            ...args.metadata,
            name: args.metadata?.name || name,
        };
    }
}

/**
 * NamespacedResource is the base class for all Kubernetes API
 * resources that are namespace-scoped.
 */
export class NamespacedResource extends Resource {
    override readonly metadata: NamespacedResourceMeta;
    constructor(app: K8sApp, name: string, args: NamespacedResourceArgs) {
        super(app, name, args);
        this.metadata = {
            ...args.metadata,
            name: args.metadata?.name || name,
            namespace: args.metadata?.namespace ?? app.namespace,
        };
    }
}
