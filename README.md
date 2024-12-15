# k8skonf

Kubernetes in Typescript. Like CDK8s / Helm but simpler.

## Usage

Source

```ts
import { K8sApp } from '@k8skonf/core';
import { Deploymentv1 } from '@k8skonf/core/Deploymentv1';

const app = new K8sApp('my-k8s-app');

new Deploymentv1(app, 'my-nginx-deployment', {
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

## CRDs

Usage:

```sh
npx @k8skonf/cli "https://raw.githubusercontent.com/argoproj/argo-cd/refs/tags/v2.13.2/manifests/crds/appproject-crd.yaml"
```
