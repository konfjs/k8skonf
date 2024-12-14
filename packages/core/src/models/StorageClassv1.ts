import { ObjectMetav1 } from './ObjectMetav1.js';
import { TopologySelectorTermv1 } from './TopologySelectorTermv1.js';
import { K8sApp } from '../K8sApp.js';
import { ApiObject } from '../ApiObject.js';

export interface StorageClassv1Args {
  readonly allowVolumeExpansion?: boolean;
  readonly allowedTopologies?: Array<TopologySelectorTermv1>;
  readonly metadata?: ObjectMetav1;
  readonly mountOptions?: Array<string>;
  readonly parameters?: { [key: string]: string };
  readonly provisioner: string;
  readonly reclaimPolicy?: string;
  readonly volumeBindingMode?: string;
}

/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.  StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export class StorageClassv1 extends ApiObject {
  /**
   * allowVolumeExpansion shows whether the storage class allow volume expand.
   */
  readonly allowVolumeExpansion?: boolean;
  /**
   * allowedTopologies restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature.
   */
  readonly allowedTopologies?: Array<TopologySelectorTermv1>;
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  readonly apiVersion = 'storage.k8s.io/v1';
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  readonly kind = 'StorageClass';
  /**
   * Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  readonly metadata: ObjectMetav1;
  /**
   * mountOptions controls the mountOptions for dynamically provisioned PersistentVolumes of this storage class. e.g. [\"ro\", \"soft\"]. Not validated - mount of the PVs will simply fail if one is invalid.
   */
  readonly mountOptions?: Array<string>;
  /**
   * parameters holds the parameters for the provisioner that should create volumes of this storage class.
   */
  readonly parameters?: { [key: string]: string };
  /**
   * provisioner indicates the type of the provisioner.
   */
  readonly provisioner: string;
  /**
   * reclaimPolicy controls the reclaimPolicy for dynamically provisioned PersistentVolumes of this storage class. Defaults to Delete.
   */
  readonly reclaimPolicy?: string;
  /**
   * volumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature.
   */
  readonly volumeBindingMode?: string;

  constructor(app: K8sApp, name: string, args: StorageClassv1Args) {
    super();
    this.allowVolumeExpansion = args.allowVolumeExpansion;
    this.allowedTopologies = args.allowedTopologies;
    this.metadata = args.metadata || { name };
    this.mountOptions = args.mountOptions;
    this.parameters = args.parameters;
    this.provisioner = args.provisioner;
    this.reclaimPolicy = args.reclaimPolicy;
    this.volumeBindingMode = args.volumeBindingMode;
    app.resources.push(this);
  }
}