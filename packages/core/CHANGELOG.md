# Changelog

## [1.32.14](https://github.com/konfjs/k8skonf/compare/core-v1.32.13...core-v1.32.14) (2026-02-17)


### Bug Fixes

* **core:** correct type annotation for api resources array ([ad237f2](https://github.com/konfjs/k8skonf/commit/ad237f2dfcaa10b89d49693bde5b9979c13a7d3c))


### Maintenance

* **core:** export K8sAppArgs interface ([a6fdbf6](https://github.com/konfjs/k8skonf/commit/a6fdbf6c9c9832df38b50eaa17f188fad2c3211f))
* use the most strict tsconfig ([2c7720d](https://github.com/konfjs/k8skonf/commit/2c7720db6013c53c7bf56689b84d37b302135028))


### Dependencies

* bump yaml from 2.7.0 to 2.8.1 ([#200](https://github.com/konfjs/k8skonf/issues/200)) ([c48b4b3](https://github.com/konfjs/k8skonf/commit/c48b4b3b34cf262fa60908b0947475e0fab9452e))
* **dev:** bump typescript from 5.7.3 to 5.8.2 ([#116](https://github.com/konfjs/k8skonf/issues/116)) ([19dafee](https://github.com/konfjs/k8skonf/commit/19dafee2fba8ede1632006ba09f88e1588805716))
* **dev:** bump typescript from 5.8.2 to 5.9.2 ([#194](https://github.com/konfjs/k8skonf/issues/194)) ([5ae1792](https://github.com/konfjs/k8skonf/commit/5ae179233a34c9ed0a31b1311ea3b621b58514ae))
* **dev:** bump typescript from 5.9.2 to 5.9.3 ([#212](https://github.com/konfjs/k8skonf/issues/212)) ([6939bc2](https://github.com/konfjs/k8skonf/commit/6939bc28a8392ee8d765ca9fdcb7b55dfc077772))

## [1.32.13](https://github.com/konfjs/k8skonf/compare/core-v1.32.12...core-v1.32.13) (2025-02-14)


### Bug Fixes

* deprecated rmdirSync usage ([1e97983](https://github.com/konfjs/k8skonf/commit/1e979838f8fbd312739e1a5ee3b456a18ec4457a))
* enable verbatimModuleSyntax, support NodeJS' native TypeScript loader ([#108](https://github.com/konfjs/k8skonf/issues/108)) ([3861fdf](https://github.com/konfjs/k8skonf/commit/3861fdfb07ff60b207b8bdc871dee45c1ee46cdd))
* use .ts for all relative imports ([c636fc4](https://github.com/konfjs/k8skonf/commit/c636fc47bdd0ceb46f40db9e949bdbf2b55c1f9b))
* use import extensions for all files to fix ESM usage ([#105](https://github.com/konfjs/k8skonf/issues/105)) ([6fdcea0](https://github.com/konfjs/k8skonf/commit/6fdcea07088b1fddd98b5094a36c747d5f96dd69))

## [1.32.12](https://github.com/konfjs/k8skonf/compare/core-v1.32.11...core-v1.32.12) (2025-02-10)


### Bug Fixes

* **core:** fix input metadata type ([def5918](https://github.com/konfjs/k8skonf/commit/def591860cca3bd7d1af8cd09f5659e79a8fbb83))

## [1.32.11](https://github.com/konfjs/k8skonf/compare/core-v1.32.10...core-v1.32.11) (2025-02-07)


### ⚠ BREAKING CHANGES

* **core:** restructure models by k8s group and version ([#95](https://github.com/konfjs/k8skonf/issues/95))

### New Features

* **core:** restructure models by k8s group and version ([#95](https://github.com/konfjs/k8skonf/issues/95)) ([d38764e](https://github.com/konfjs/k8skonf/commit/d38764e0f75431956be0987bf35f0a6424f8ff29))
* export apiGroups and apiVersions as namespaces ([#98](https://github.com/konfjs/k8skonf/issues/98)) ([e290957](https://github.com/konfjs/k8skonf/commit/e290957010f533bdaae768188371262e148a5c31))


### Bug Fixes

* **core:** remove k8s api files that are only used programmatically ([#96](https://github.com/konfjs/k8skonf/issues/96)) ([ed253a1](https://github.com/konfjs/k8skonf/commit/ed253a17fdd0c95706c467e740efd339a8872847))
* **core:** remove unused interface files, reduces package size by 17% ([#96](https://github.com/konfjs/k8skonf/issues/96)) ([ed253a1](https://github.com/konfjs/k8skonf/commit/ed253a17fdd0c95706c467e740efd339a8872847))


### Chores

* move interfaces to types dir to easily distinguish api resources ([#97](https://github.com/konfjs/k8skonf/issues/97)) ([b20d4f0](https://github.com/konfjs/k8skonf/commit/b20d4f07f5bbaf173108f4417253152f1ed9c00d))
* remove all target from makefile, as remove-unused target is not idempotent ([#97](https://github.com/konfjs/k8skonf/issues/97)) ([b20d4f0](https://github.com/konfjs/k8skonf/commit/b20d4f07f5bbaf173108f4417253152f1ed9c00d))

## [1.32.10](https://github.com/konfjs/k8skonf/compare/core-v1.32.9...core-v1.32.10) (2025-01-11)


### Dependencies

* bump dependencies ([#76](https://github.com/konfjs/k8skonf/issues/76)) ([c28613b](https://github.com/konfjs/k8skonf/commit/c28613bb5bd878b0a777a71302bc7049b9954416))

## [1.32.9](https://github.com/konfjs/k8skonf/compare/core-v1.32.8...core-v1.32.9) (2024-12-31)


### Bug Fixes

* **core:** disable aliasDuplicateObjects ([#73](https://github.com/konfjs/k8skonf/issues/73)) ([f12538f](https://github.com/konfjs/k8skonf/commit/f12538fb3aedb9425e106e3a1b815fcac234b45a))

## [1.32.8](https://github.com/konfjs/k8skonf/compare/core-v1.32.7...core-v1.32.8) (2024-12-24)


### Bug Fixes

* always define metadata.name first ([#65](https://github.com/konfjs/k8skonf/issues/65)) ([53fdc64](https://github.com/konfjs/k8skonf/commit/53fdc64badd8e00d9cce96fa974cdcffd7ab2f95))

## [1.32.7](https://github.com/konfjs/k8skonf/compare/core-v1.32.6...core-v1.32.7) (2024-12-20)


### Bug Fixes

* always order by apiVersion, kind, metadata, spec ([#61](https://github.com/konfjs/k8skonf/issues/61)) ([e864ff3](https://github.com/konfjs/k8skonf/commit/e864ff3fc64d0990f6f80cf64160a77d86613045))
* **core:** add toYaml method for all ApiObjects ([#59](https://github.com/konfjs/k8skonf/issues/59)) ([b8de6e7](https://github.com/konfjs/k8skonf/commit/b8de6e77fbff730cdfb5b1d09c81cbbbf4a70c67))
* **core:** return type of ApiObject.name ([b8de6e7](https://github.com/konfjs/k8skonf/commit/b8de6e77fbff730cdfb5b1d09c81cbbbf4a70c67))

## [1.32.6](https://github.com/konfjs/k8skonf/compare/core-v1.32.5...core-v1.32.6) (2024-12-20)


### Bug Fixes

* **core:** add `name` getter as alias to `metadata.name` [#56](https://github.com/konfjs/k8skonf/issues/56) ([247eba8](https://github.com/konfjs/k8skonf/commit/247eba828b1b7ed10fcfcdfe6fbf0732c91d1623))
* **core:** set default namespace at the app level ([#58](https://github.com/konfjs/k8skonf/issues/58)) ([12bb12e](https://github.com/konfjs/k8skonf/commit/12bb12ed8d994d5afa2e57e9a7a7fc0886108bc9))

## [1.32.5](https://github.com/konfjs/k8skonf/compare/core-v1.32.4...core-v1.32.5) (2024-12-19)


### Chores

* **core:** make filePerResource as default output option ([#50](https://github.com/konfjs/k8skonf/issues/50)) ([c7c3bee](https://github.com/konfjs/k8skonf/commit/c7c3bee5879a68bc15591eaf7f6575607e0a3b96))

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
