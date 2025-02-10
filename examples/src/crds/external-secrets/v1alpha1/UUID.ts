import { K8sApp } from '@k8skonf/core';
import { NamespacedApiObject, NamespacedObjectMeta } from '@k8skonf/core';

/**
 * UUID generates a version 1 UUID (e56657e3-764f-11ef-a397-65231a88c216).
 */
export interface UUIDArgs {
  readonly metadata?: NamespacedObjectMeta;
  /**
   * UUIDSpec controls the behavior of the uuid generator.
   */
  readonly spec?: {};
}

export class UUID extends NamespacedApiObject {
  readonly apiVersion = 'generators.external-secrets.io/v1alpha1';
  readonly kind = 'UUID';
  readonly metadata: NamespacedObjectMeta;
  readonly spec: UUIDArgs['spec'];

  constructor(app: K8sApp, name: string, args: UUIDArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
