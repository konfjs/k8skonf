# Changelog

## [0.3.5](https://github.com/konfjs/k8skonf/compare/cli-v0.3.4...cli-v0.3.5) (2024-12-20)


### Bug Fixes

* always order by apiVersion, kind, metadata, spec ([#61](https://github.com/konfjs/k8skonf/issues/61)) ([e864ff3](https://github.com/konfjs/k8skonf/commit/e864ff3fc64d0990f6f80cf64160a77d86613045))
* **core:** add toYaml method for all ApiObjects ([#59](https://github.com/konfjs/k8skonf/issues/59)) ([b8de6e7](https://github.com/konfjs/k8skonf/commit/b8de6e77fbff730cdfb5b1d09c81cbbbf4a70c67))
* **core:** return type of ApiObject.name ([b8de6e7](https://github.com/konfjs/k8skonf/commit/b8de6e77fbff730cdfb5b1d09c81cbbbf4a70c67))

## [0.3.4](https://github.com/konfjs/k8skonf/compare/cli-v0.3.3...cli-v0.3.4) (2024-12-20)


### Bug Fixes

* **core:** set default namespace at the app level ([#58](https://github.com/konfjs/k8skonf/issues/58)) ([12bb12e](https://github.com/konfjs/k8skonf/commit/12bb12ed8d994d5afa2e57e9a7a7fc0886108bc9))

## [0.3.3](https://github.com/konfjs/k8skonf/compare/cli-v0.3.2...cli-v0.3.3) (2024-12-20)


### Bug Fixes

* **cli:** add apiVersion and kind to the generated CRDs ([#52](https://github.com/konfjs/k8skonf/issues/52)) ([db4e4e5](https://github.com/konfjs/k8skonf/commit/db4e4e5159775a223d25848c6a43759552e54736))

## [0.3.2](https://github.com/konfjs/k8skonf/compare/cli-v0.3.1...cli-v0.3.2) (2024-12-19)


### Bug Fixes

* **core:** always set metadata.name ([#49](https://github.com/konfjs/k8skonf/issues/49)) ([4ec20ab](https://github.com/konfjs/k8skonf/commit/4ec20ab247a78acbd906b4cfc7b6ea6e64c443d9))
* handle resource conflicts ([#48](https://github.com/konfjs/k8skonf/issues/48)) ([a510c6a](https://github.com/konfjs/k8skonf/commit/a510c6a5b3ba690240a409f04de7bfb711b92e5f))


### Chores

* **cli:** sort group-version-kind-map json keys ([#46](https://github.com/konfjs/k8skonf/issues/46)) ([a3a0677](https://github.com/konfjs/k8skonf/commit/a3a0677f386ca8c61dd329275685e0b4fe2bc1ab))

## [0.3.1](https://github.com/konfjs/k8skonf/compare/cli-v0.3.0...cli-v0.3.1) (2024-12-17)


### Chores

* add provenance as env ([#37](https://github.com/konfjs/k8skonf/issues/37)) ([b248750](https://github.com/konfjs/k8skonf/commit/b24875095595e727911041225872d49a5a86a7f9))

## [0.3.0](https://github.com/konfjs/k8skonf/compare/cli-v0.2.0...cli-v0.3.0) (2024-12-17)


### Features

* **core:** add k8s v1.32.0 ([#30](https://github.com/konfjs/k8skonf/issues/30)) ([d2e3efe](https://github.com/konfjs/k8skonf/commit/d2e3efe58828002e2806d2f97d26cf3b06eecf9f))


### Chores

* enable provenance config ([#33](https://github.com/konfjs/k8skonf/issues/33)) ([6f50318](https://github.com/konfjs/k8skonf/commit/6f50318bf646250f0dd57630812a2592aaa01265))

## 0.2.0 (2024-12-17)


### Features

* implement crds ([#17](https://github.com/konfjs/k8skonf/issues/17)) ([b861774](https://github.com/konfjs/k8skonf/commit/b861774f52537953195f2cee4cf5ce6ac960e711))
* implement kubernetes core API resources ([#8](https://github.com/konfjs/k8skonf/issues/8)) ([b8bb0fb](https://github.com/konfjs/k8skonf/commit/b8bb0fb135edddd04da116032848762d90efc8b2))


### Bug Fixes

* make metadata.name required field ([#16](https://github.com/konfjs/k8skonf/issues/16)) ([98b8fb5](https://github.com/konfjs/k8skonf/commit/98b8fb52d0aba0ccc6a9765119e3c1209461a802))
* remove all the Status classes ([#26](https://github.com/konfjs/k8skonf/issues/26)) ([65b35d1](https://github.com/konfjs/k8skonf/commit/65b35d154bafa0ccc5186acdec61253293c380b2))
* replace Quantity/IntOrString types with regular number | string ([#11](https://github.com/konfjs/k8skonf/issues/11)) ([d276b76](https://github.com/konfjs/k8skonf/commit/d276b763366a20e7e8ee19ae756a81d2d140be48))
* revert [#16](https://github.com/konfjs/k8skonf/issues/16) ([#18](https://github.com/konfjs/k8skonf/issues/18)) ([a39c36a](https://github.com/konfjs/k8skonf/commit/a39c36a686cb4623fc5ef80266a29f19cf7719f5))
* use ^ range for direct dependencies ([#13](https://github.com/konfjs/k8skonf/issues/13)) ([dc56430](https://github.com/konfjs/k8skonf/commit/dc56430e90386a86cd9ef2c40f85003e0b303851))
* use k8s api version as suffix ([#10](https://github.com/konfjs/k8skonf/issues/10)) ([497b345](https://github.com/konfjs/k8skonf/commit/497b345279f9e7404bb4020d0108c0dca33dfabe))


### Chores

* version 0.1.1 ([90ed89d](https://github.com/konfjs/k8skonf/commit/90ed89d64295a892b13fa9d41f892554fb92bc73))
