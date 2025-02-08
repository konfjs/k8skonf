import { log } from 'node:console';
import { Helm, K8sApp } from '@k8skonf/core';
import { ConfigMap } from '@k8skonf/core/core/v1/ConfigMap';
import { Deployment } from '@k8skonf/core/apps/v1/Deployment';

const app = new K8sApp('helm-example', { namespace: 'my-app-namespace', outputType: 'singleFile' });

const chart = new Helm(app, 'ingress-nginx', {
    chart: 'ingress-nginx',
    repo: 'https://kubernetes.github.io/ingress-nginx',
    version: '4.11.3',
    namespace: 'nginx',
    helmFlags: ['--set controller.service.type=NodePort'],
    valuesObject: {
        controller: {
            metrics: {
                enabled: true,
                serviceMonitor: {
                    enabled: true,
                },
            },
        },
    },
});

chart.resources.forEach((resource) => {
    if (resource.webhooks) {
        console.log(resource.webhooks);
    }
    console.log(resource.kind);
    console.log(resource.apiVersion);
});

const cm = new ConfigMap(app, 'my-config-map', {
    metadata: {
        // name: 'my-config-map2', // inferred from resource name
        namespace: 'fooo',
    },
    data: {
        key1: 'value1',
        key2: 'value2',
    },
});

console.log('configmap name:', cm.name);

const d = new Deployment(app, 'my-nginx-deployment', {
    metadata: {
        // name: 'my-nginx-deployment2', // inferred from resource name
        // namespace: 'fooo', // inferred from app namespace
    },
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

log('name is:', d.name);

app.save();
