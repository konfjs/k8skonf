# Changelog

## [1.32.4](https://github.com/konfjs/k8skonf/compare/core-v1.32.3...core-v1.32.4) (2024-12-19)


### Bug Fixes

* **core:** always set metadata.name ([#49](https://github.com/konfjs/k8skonf/issues/49)) ([4ec20ab](https://github.com/konfjs/k8skonf/commit/4ec20ab247a78acbd906b4cfc7b6ea6e64c443d9))
* handle resource conflicts ([#48](https://github.com/konfjs/k8skonf/issues/48)) ([a510c6a](https://github.com/konfjs/k8skonf/commit/a510c6a5b3ba690240a409f04de7bfb711b92e5f))

## [1.32.3](https://github.com/konfjs/k8skonf/compare/core-v1.32.2...core-v1.32.3) (2024-12-17)


### Bug Fixes

* **core:** use yaml 1.1 schema to render ([#44](https://github.com/konfjs/k8skonf/issues/44)) ([6a8d79a](https://github.com/konfjs/k8skonf/commit/6a8d79ab8bea6e015e1448788befae94545b290f))

## [1.32.2](https://github.com/konfjs/k8skonf/compare/core-v1.32.1...core-v1.32.2) (2024-12-17)


### Bug Fixes

* recursively try to create a dir ([#41](https://github.com/konfjs/k8skonf/issues/41)) ([59d41e5](https://github.com/konfjs/k8skonf/commit/59d41e53d38fdf28a4b20d7bb3ae132730b55b9d))

## [1.32.1](https://github.com/konfjs/k8skonf/compare/core-v1.32.0...core-v1.32.1) (2024-12-17)


### Chores

* add provenance as env ([#37](https://github.com/konfjs/k8skonf/issues/37)) ([b248750](https://github.com/konfjs/k8skonf/commit/b24875095595e727911041225872d49a5a86a7f9))
* **core:** use `Kind.name.yaml` syntax to save [#38](https://github.com/konfjs/k8skonf/issues/38) ([7243ab5](https://github.com/konfjs/k8skonf/commit/7243ab55226ad1ecf84a038fe39016a1d629957f))

## [1.32.0](https://github.com/konfjs/k8skonf/compare/core-v1.31.0...core-v1.32.0) (2024-12-17)


### Features

* **core:** add k8s v1.32.0 ([#30](https://github.com/konfjs/k8skonf/issues/30)) ([d2e3efe](https://github.com/konfjs/k8skonf/commit/d2e3efe58828002e2806d2f97d26cf3b06eecf9f))


### Chores

* enable provenance config ([#33](https://github.com/konfjs/k8skonf/issues/33)) ([6f50318](https://github.com/konfjs/k8skonf/commit/6f50318bf646250f0dd57630812a2592aaa01265))

## [1.31.0](https://github.com/konfjs/k8skonf/compare/core-v0.2.0...core-v1.31.0) (2024-12-17)


### Chores

* release core as v1.31.0 ([#28](https://github.com/konfjs/k8skonf/issues/28)) ([eda20c2](https://github.com/konfjs/k8skonf/commit/eda20c23bab76ed2844161e49aa14de869f451b7))

## 0.2.0 (2024-12-17)


### Features

* implement helm chart support ([#19](https://github.com/konfjs/k8skonf/issues/19)) ([682e55f](https://github.com/konfjs/k8skonf/commit/682e55f07f93eb64bdf3b8e001eddb77d274cae9))
* implement kubernetes core API resources ([#8](https://github.com/konfjs/k8skonf/issues/8)) ([b8bb0fb](https://github.com/konfjs/k8skonf/commit/b8bb0fb135edddd04da116032848762d90efc8b2))


### Bug Fixes

* **core:** export models ([#9](https://github.com/konfjs/k8skonf/issues/9)) ([8d6cc01](https://github.com/konfjs/k8skonf/commit/8d6cc0193fd7c889ca4d521b45dadb3b2ac2d4fe))
* make metadata.name required field ([#16](https://github.com/konfjs/k8skonf/issues/16)) ([98b8fb5](https://github.com/konfjs/k8skonf/commit/98b8fb52d0aba0ccc6a9765119e3c1209461a802))
* remove all the Status classes ([#26](https://github.com/konfjs/k8skonf/issues/26)) ([65b35d1](https://github.com/konfjs/k8skonf/commit/65b35d154bafa0ccc5186acdec61253293c380b2))
* replace Quantity/IntOrString types with regular number | string ([#11](https://github.com/konfjs/k8skonf/issues/11)) ([d276b76](https://github.com/konfjs/k8skonf/commit/d276b763366a20e7e8ee19ae756a81d2d140be48))
* revert [#16](https://github.com/konfjs/k8skonf/issues/16) ([#18](https://github.com/konfjs/k8skonf/issues/18)) ([a39c36a](https://github.com/konfjs/k8skonf/commit/a39c36a686cb4623fc5ef80266a29f19cf7719f5))
* use ^ range for direct dependencies ([#13](https://github.com/konfjs/k8skonf/issues/13)) ([dc56430](https://github.com/konfjs/k8skonf/commit/dc56430e90386a86cd9ef2c40f85003e0b303851))
* use k8s api version as suffix ([#10](https://github.com/konfjs/k8skonf/issues/10)) ([497b345](https://github.com/konfjs/k8skonf/commit/497b345279f9e7404bb4020d0108c0dca33dfabe))


### Chores

* add openapi-generator-cli ([#6](https://github.com/konfjs/k8skonf/issues/6)) ([67d7bef](https://github.com/konfjs/k8skonf/commit/67d7befce483122b5e927bf9f4d0b2ec909dadce))
* bump version to 0.1.0 ([b1a0e6a](https://github.com/konfjs/k8skonf/commit/b1a0e6a8ae110fee2b704a2cca9683cdf4a89eb4))
* set up repository ([#1](https://github.com/konfjs/k8skonf/issues/1)) ([3079e34](https://github.com/konfjs/k8skonf/commit/3079e3409aa74040b9887e42919461cb77dd9288))
* version 0.1.1 ([90ed89d](https://github.com/konfjs/k8skonf/commit/90ed89d64295a892b13fa9d41f892554fb92bc73))
