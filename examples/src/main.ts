import { Helm, K8sApp } from '@k8skonf/core';
import { Deploymentv1 } from '@k8skonf/core/Deploymentv1';

const app = new K8sApp('my-k8s-app', 'filePerResource');

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
