import * as yaml from 'yaml';
import { ObjectMeta } from './models/meta/v1/types/ObjectMeta.ts';

export interface NamespacedObjectMeta extends ObjectMeta {
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
 * Should represent cluster-scoped objects.
 */
export abstract class ApiObject {
    readonly name: string;
    abstract readonly metadata: ObjectMeta;
    abstract readonly apiVersion: string;
    abstract readonly kind: string;

    constructor(name: string) {
        this.name = name;
    }

    toYaml(): string {
        const { name, ...rest } = this;
        return yaml.stringify(rest, { schema: 'yaml-1.1', aliasDuplicateObjects: false });
    }
}

/**
 * NamespacedApiObject is the base class for all Kubernetes API
 * objects that are scoped to a namespace.
 */
export abstract class NamespacedApiObject extends ApiObject {
    abstract readonly metadata: NamespacedObjectMeta;
}
