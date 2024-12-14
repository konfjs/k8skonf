import { K8sApp } from '@k8skonf/core';
import { Deploymentv1 } from '@k8skonf/core/Deploymentv1';

function deployment(app: K8sApp) {
    return new Deploymentv1(app, 'my-deployment', {
        spec: {
            selector: {
                matchLabels: {
                    foo: 'bar',
                },
            },
            template: {
                metadata: {
                    labels: {
                        foo: 'bar',
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
}

function main() {
    const app = new K8sApp('my-k8s-app');
    deployment(app);

    const app2 = new K8sApp('my-k8s-app2', 'filePerResource');
    deployment(app2);

    app.save();
    app2.save();
}

main();