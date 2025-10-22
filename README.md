# k8skonf

Write Kubernetes manifests in TypeScript.

Packages

- `@k8skonf/core` - Minimal core library that provides basic building blocks for organizing your K8sKonf applications.
- `@k8skonf/provider-k8s` - Ready to use Kubernetes core schema in TypeScript.
- `@k8skonf/cli` - CLI tool to generate TypeScript code for Kubernetes core schema and Custom Resource Definitions (CRDs).

## Usage

### Example

```ts
import { K8sApp } from '@k8skonf/core';
import { Deployment } from '@k8skonf/provider-k8s/apps/v1';
// Or you can import like this:
// import { apps } from '@k8skonf/provider-k8s';
// and then
// new apps.v1.Deployment();

const app = new K8sApp('my-k8s-app', { namespace: 'my-app' });

new Deployment(app, 'my-nginx-deployment', {
    /**
     * Metadata is completely optional.
     * If not provided:
     * - metadata.name will be inferred from the resource id ('my-nginx-deployment' in this case).
     * - metadata.namespace will be inferred from the K8sApp namespace ('my-app' in this case).
     */
    spec: {
        selector: {
            matchLabels: {
                app: 'nginx',
            },
        },
        template: {
            metadata: {
                labels: {
                    app: 'nginx',
                },
            },
            spec: {
                containers: [
                    {
                        name: 'nginx',
                        image: 'nginx:alpine',
                        ports: [
                            {
                                containerPort: 80,
                                name: 'http',
                            },
                        ],
                    },
                ],
            },
        },
    },
});

app.save();
```

Output

```yaml
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-nginx-deployment
  namespace: my-app
spec:
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:alpine
          ports:
            - containerPort: 80
              name: http
```

## @k8skonf/cli

This package provides the command-line interface (CLI) for K8sKonf.

It has 2 main functionalities:

- Generate TypeScript code for Kubernetes core schema
- Generate TypeScript code for Kubernetes Custom Resource Definitions (CRDs)

### CLI

```sh
npx @k8skonf/cli --help
```

Generate TypeScript code for Kubernetes core schema

```sh
npx @k8skonf/cli k8s@1.33
```

Generate TypeScript code for Kubernetes CRDs

```sh
# From a YAML file
npx @k8skonf/cli path/to/crd.yaml

# From a URL
npx @k8skonf/cli https://raw.githubusercontent.com/argoproj/argo-cd/refs/tags/v2.13.2/manifests/crds/application-crd.yaml

```

### Configuration File

```yaml
# k8skonfig.yaml
crds:
  argocd:
    - https://raw.githubusercontent.com/argoproj/argo-cd/refs/tags/v2.13.2/manifests/crds/application-crd.yaml
    - https://raw.githubusercontent.com/argoproj/argo-cd/refs/tags/v2.13.2/manifests/crds/applicationset-crd.yaml
    - https://raw.githubusercontent.com/argoproj/argo-cd/refs/tags/v2.13.2/manifests/crds/appproject-crd.yaml
  external-secrets:
    - https://raw.githubusercontent.com/external-secrets/external-secrets/refs/tags/v0.12.1/deploy/crds/bundle.yaml
  moco:
    - moco/CustomResourceDefinition.mysqlclusters.moco.cybozu.com.yaml # local path to the yaml file

k8sVersion: 1.33

outDir:
  crds: ./src/generated/crds
  k8s: ./src/generated/k8s

# CRD yaml files are downloaded to this directory
cacheDir: ~/.cache/k8skonf
```

Run

```sh
npx @k8skonf/cli # It will look for k8skonfig.yaml in the current directory

# or
npx @k8skonf/cli -c path/to/k8skonfig.yaml
npx @k8skonf/cli --config path/to/k8skonfig.yaml
```
