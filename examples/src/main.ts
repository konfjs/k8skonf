import { Helm, K8sApp } from '@k8skonf/core';
import { ConfigMapv1 } from '@k8skonf/core/ConfigMapv1';
import { Deploymentv1 } from '@k8skonf/core/Deploymentv1';
import { log } from 'node:console';

const app = new K8sApp('my-k8s-app', { namespace: 'my-app-namespace' });

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

new ConfigMapv1(app, 'my-config-map', {
    metadata: {
        // name: 'my-config-map2', // inferred from resource name
        namespace: 'fooo',
    },
});

const d = new Deploymentv1(app, 'my-nginx-deployment', {
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
