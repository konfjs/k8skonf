# Changelog

## [0.6.2](https://github.com/konfjs/k8skonf/compare/cli-v0.6.1...cli-v0.6.2) (2025-02-10)


### Bug Fixes

* **cli:** fix metadata input type ([e1347d4](https://github.com/konfjs/k8skonf/commit/e1347d41b60020d883e1f108f0755fc89255abb2))

## [0.6.1](https://github.com/konfjs/k8skonf/compare/cli-v0.6.0...cli-v0.6.1) (2025-02-08)


### Bug Fixes

* **cli:** fix cli usage ([68130a0](https://github.com/konfjs/k8skonf/commit/68130a036ded718e79799799d6a580da4267ed92))
* **cli:** group CRDs by apiVersion and export as namespaces ([724f8b5](https://github.com/konfjs/k8skonf/commit/724f8b5924624dc1bd0b256e3abb34b54a5a2300))

## [0.6.0](https://github.com/konfjs/k8skonf/compare/cli-v0.5.0...cli-v0.6.0) (2025-02-07)


### ⚠ BREAKING CHANGES

* **cli:** restructure models by k8s group and version ([#94](https://github.com/konfjs/k8skonf/issues/94))

### New Features

* **cli:** restructure models by k8s group and version ([#94](https://github.com/konfjs/k8skonf/issues/94)) ([432f6a0](https://github.com/konfjs/k8skonf/commit/432f6a0dab523f605d8da09ba5ae48113e2c716d))
* export apiGroups and apiVersions as namespaces ([#98](https://github.com/konfjs/k8skonf/issues/98)) ([e290957](https://github.com/konfjs/k8skonf/commit/e290957010f533bdaae768188371262e148a5c31))


### Bug Fixes

* **cli:** move files to subdirs ([60a71f1](https://github.com/konfjs/k8skonf/commit/60a71f127ba3425c53b7d80e9a04bb6b776ac2c9))
* **cli:** remove k8s api files that are only used programatically ([c96ccc8](https://github.com/konfjs/k8skonf/commit/c96ccc8cf1d88ef02f719ff28c5d95b29fcd923b))
* **cli:** remove unused interface files, reduces package size by 17% ([c96ccc8](https://github.com/konfjs/k8skonf/commit/c96ccc8cf1d88ef02f719ff28c5d95b29fcd923b))
* **cli:** sync schema.json ([60a71f1](https://github.com/konfjs/k8skonf/commit/60a71f127ba3425c53b7d80e9a04bb6b776ac2c9))


### Chores

* move interfaces to types dir to easily distinguish api resources ([#97](https://github.com/konfjs/k8skonf/issues/97)) ([b20d4f0](https://github.com/konfjs/k8skonf/commit/b20d4f07f5bbaf173108f4417253152f1ed9c00d))
* remove all target from makefile, as remove-unused target is not idempotent ([#97](https://github.com/konfjs/k8skonf/issues/97)) ([b20d4f0](https://github.com/konfjs/k8skonf/commit/b20d4f07f5bbaf173108f4417253152f1ed9c00d))
* remove unused open api spec files ([23dc2e6](https://github.com/konfjs/k8skonf/commit/23dc2e6adaea4eca3c173655d8e2ab732f5c0a2f))
* use git sparse-checkout for kubernetes files ([#93](https://github.com/konfjs/k8skonf/issues/93)) ([b552816](https://github.com/konfjs/k8skonf/commit/b552816b298cef93d32ac462cb33862c41bd99ad))


### Dependencies

* bump @openapitools/openapi-generator-cli from 2.15.3 to 2.16.3 in /packages/cli [#89](https://github.com/konfjs/k8skonf/issues/89) ([d07f3c4](https://github.com/konfjs/k8skonf/commit/d07f3c4453a62d58afb40a8d79733c3ae399d71f))
* bump commander from 13.0.0 to 13.1.0 in /packages/cli ([#87](https://github.com/konfjs/k8skonf/issues/87)) ([f0bb308](https://github.com/konfjs/k8skonf/commit/f0bb30826ccbf06a3df716bb703aee4bc4a856a5))
* bump json-schema-to-typescript from 15.0.3 to 15.0.4 in /packages/cli [#88](https://github.com/konfjs/k8skonf/issues/88) ([46dc8d7](https://github.com/konfjs/k8skonf/commit/46dc8d70bc815a69297564fff05104236f8df9f2))
* bump ts-morph from 25.0.0 to 25.0.1 in /packages/cli ([#92](https://github.com/konfjs/k8skonf/issues/92)) ([a875e5e](https://github.com/konfjs/k8skonf/commit/a875e5e7d53626ef1e877de467346982b4c98550))
* use openapitools/openapi-generator 7.11.0 ([4a6e6ab](https://github.com/konfjs/k8skonf/commit/4a6e6ab5f319d4ba9c37bf379fd023e4395ce32a))

## [0.5.0](https://github.com/konfjs/k8skonf/compare/cli-v0.4.1...cli-v0.5.0) (2025-01-17)


### Features

* **cli:** parse k8sList for collections of CRDs ([#80](https://github.com/konfjs/k8skonf/issues/80)) ([731d7be](https://github.com/konfjs/k8skonf/commit/731d7bef6fc16aee192f69dcc3dd28309628beaa))

## [0.4.1](https://github.com/konfjs/k8skonf/compare/cli-v0.4.0...cli-v0.4.1) (2025-01-11)


### Bug Fixes

* **cli:** read local crd yaml files from config ([#79](https://github.com/konfjs/k8skonf/issues/79)) ([f948e14](https://github.com/konfjs/k8skonf/commit/f948e149af78c94e14d7e9f83be47b1d7ded3c9b))


### Dependencies

* bump dependencies ([#76](https://github.com/konfjs/k8skonf/issues/76)) ([c28613b](https://github.com/konfjs/k8skonf/commit/c28613bb5bd878b0a777a71302bc7049b9954416))

## [0.4.0](https://github.com/konfjs/k8skonf/compare/cli-v0.3.7...cli-v0.4.0) (2024-12-25)


### Features

* add k8skonfig.yaml file for declarative crd configs ([#70](https://github.com/konfjs/k8skonf/issues/70)) ([572272a](https://github.com/konfjs/k8skonf/commit/572272ac395329ffab044b58585f6b5285612f6c))

## [0.3.7](https://github.com/konfjs/k8skonf/compare/cli-v0.3.6...cli-v0.3.7) (2024-12-24)


### Bug Fixes

* always define metadata.name first ([#65](https://github.com/konfjs/k8skonf/issues/65)) ([53fdc64](https://github.com/konfjs/k8skonf/commit/53fdc64badd8e00d9cce96fa974cdcffd7ab2f95))
* **cli:** always define metadata.name first for CRDs ([#68](https://github.com/konfjs/k8skonf/issues/68)) ([a01edd4](https://github.com/konfjs/k8skonf/commit/a01edd450c657b48e707249f28a5e90651872a91))

## [0.3.6](https://github.com/konfjs/k8skonf/compare/cli-v0.3.5...cli-v0.3.6) (2024-12-21)


### Bug Fixes

* **cli:** fix CRD constructor ([#62](https://github.com/konfjs/k8skonf/issues/62)) ([d0675d3](https://github.com/konfjs/k8skonf/commit/d0675d366ed53124489b2cdcac6cb8dc33a14ed1))

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
