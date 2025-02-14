import type { K8sApp } from '@k8skonf/core';
import { NamespacedApiObject, type NamespacedObjectMeta } from '@k8skonf/core';

/**
 * Fake generator is used for testing. It lets you define
 * a static set of credentials that is always returned.
 */
export interface FakeArgs {
  readonly metadata?: NamespacedObjectMeta;
  /**
   * FakeSpec contains the static data.
   */
  readonly spec?: {
    /**
     * Used to select the correct ESO controller (think: ingress.ingressClassName)
     * The ESO controller is instantiated with a specific controller name and filters VDS based on this property
     */
    controller?: string;
    /**
     * Data defines the static data returned
     * by this generator.
     */
    data?: {
      [k: string]: string;
    };
  };
}

export class Fake extends NamespacedApiObject {
  readonly apiVersion = 'generators.external-secrets.io/v1alpha1';
  readonly kind = 'Fake';
  readonly metadata: NamespacedObjectMeta;
  readonly spec: FakeArgs['spec'];

  constructor(app: K8sApp, name: string, args: FakeArgs) {
    super(args.metadata?.name || name);
    this.metadata = {
      name: args.metadata?.name || name,
      ...args.metadata,
    };
    this.spec = args.spec;
    app.addResource(this);
  }
}
