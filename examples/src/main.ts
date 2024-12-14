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
