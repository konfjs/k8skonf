# Changelog

## [0.6.4](https://github.com/konfjs/k8skonf/compare/cli-v0.6.3...cli-v0.6.4) (2026-02-17)


### Bug Fixes

* **cli:** fix linter errors ([2635c39](https://github.com/konfjs/k8skonf/commit/2635c399a9ebaa11ea6211fd768d3c0ac28ceb25))
* **cli:** handle quoted property keys ([b1a2cf7](https://github.com/konfjs/k8skonf/commit/b1a2cf7cc917df999e152d8def383f09dceaaa17))
* **cli:** make K8sApp type import, remove unused IoK8sApimachineryPkgApisMetaV1ObjectMeta import ([eb50c14](https://github.com/konfjs/k8skonf/commit/eb50c14a75ee466cedaf1d45bcd08a7bff4765af))
* **cli:** make NamespacedObjectMeta type import ([aa8b75e](https://github.com/konfjs/k8skonf/commit/aa8b75edaf11f3bbcb9e7bb8e026e22bf9a50b62))
* **cli:** remove managedFields from object metadata ([03b1a90](https://github.com/konfjs/k8skonf/commit/03b1a905772ec2cf5c2e50408d46988ea6fed94d))
* **cli:** use correct bin folder locally ([900ef5a](https://github.com/konfjs/k8skonf/commit/900ef5a1d55b3f6bdd98d7c58c83b4285d342684))


### Maintenance

* **cli:** add k8s 1.25.0 to 1.34.0 open api schemas ([5310943](https://github.com/konfjs/k8skonf/commit/5310943f88405e6b8b1dd88fa3484d94f2e3a93b))
* **cli:** download k8s open schema into versioned dir ([ab2cedd](https://github.com/konfjs/k8skonf/commit/ab2ceddeca8c58e9e37ed46948877addf2a4ae68))
* **cli:** fix linter warnings ([760361f](https://github.com/konfjs/k8skonf/commit/760361f79159ed9e5684baf3c31aa7082b89d267))
* **cli:** fix ts error ([5cb814a](https://github.com/konfjs/k8skonf/commit/5cb814a2d6c25966750ef5ecd1ded764e3a66b87))
* **cli:** remove external formatter usage ([26cd594](https://github.com/konfjs/k8skonf/commit/26cd59484d3c55486ffd759473af5465f7b4fc80))
* **cli:** remove IoK8sApimachineryPkgApiResourceQuantity, IoK8sApimachineryPkgUtilIntstrIntOrString imports ([a3dd83a](https://github.com/konfjs/k8skonf/commit/a3dd83aa18948d73cedccc63c28ef123c9170bfb))
* **cli:** remove tsx ([ce1d7ba](https://github.com/konfjs/k8skonf/commit/ce1d7ba7e6772f5587b3bdf7337aafade65f8298))
* **cli:** rename input-spec to openapi-spec ([60b7ac2](https://github.com/konfjs/k8skonf/commit/60b7ac2ded50b5ad6f0b10c08ab37691c86f4b1f))
* **cli:** rename input-spec to openapi-spec, part 2 ([1f2349f](https://github.com/konfjs/k8skonf/commit/1f2349f315c2ae57b603eaa3054b76b78cb09319))
* **cli:** reorganize clean up class logic ([58db738](https://github.com/konfjs/k8skonf/commit/58db738c98d79a4697e632f730283959ca1d5303))
* **cli:** use consistent .ts extension ([db3a98f](https://github.com/konfjs/k8skonf/commit/db3a98fc07faaa55a4308d066b38099e26f34c19))
* **cli:** use openapi-generator@7.16.0 ([2456651](https://github.com/konfjs/k8skonf/commit/2456651dd61a9936f68095401723b91b8ecf9ed7))


### Dependencies

* bump commander from 13.1.0 to 14.0.1 in /packages/cli ([#205](https://github.com/konfjs/k8skonf/issues/205)) ([72cb2ee](https://github.com/konfjs/k8skonf/commit/72cb2ee5fc84c5f8992f1a3616bc85b27999ea07))
* bump commander from 14.0.2 to 14.0.3 ([#263](https://github.com/konfjs/k8skonf/issues/263)) ([c142b55](https://github.com/konfjs/k8skonf/commit/c142b5590805e5a3a1e11bf52d8c35d13668e3f9))
* bump ts-morph from 25.0.1 to 27.0.0 ([#193](https://github.com/konfjs/k8skonf/issues/193)) ([d6530e3](https://github.com/konfjs/k8skonf/commit/d6530e3128b58689c261ae7800fd860b7d5ff9b2))
* bump ts-morph from 27.0.0 to 27.0.2 ([#221](https://github.com/konfjs/k8skonf/issues/221)) ([81b3bae](https://github.com/konfjs/k8skonf/commit/81b3baef35eaa0a6ee75a8d5a874ebadc10bfc4f))
* bump yaml from 2.7.0 to 2.8.1 in /packages/cli ([#202](https://github.com/konfjs/k8skonf/issues/202)) ([6ec54bd](https://github.com/konfjs/k8skonf/commit/6ec54bda97f625a1e69471dd14db37d98a95cc2e))
* **dev:** bump @openapitools/openapi-generator-cli ([#115](https://github.com/konfjs/k8skonf/issues/115)) ([079a6d4](https://github.com/konfjs/k8skonf/commit/079a6d49a2ad740c251a219f64d8bccb13676ce5))
* **dev:** bump @openapitools/openapi-generator-cli ([#191](https://github.com/konfjs/k8skonf/issues/191)) ([a11b412](https://github.com/konfjs/k8skonf/commit/a11b412bfc3b0542c2aec494a5092f11fd46ad6e))
* **dev:** bump @openapitools/openapi-generator-cli ([#201](https://github.com/konfjs/k8skonf/issues/201)) ([965edc2](https://github.com/konfjs/k8skonf/commit/965edc279d0659b97209290e6a0840cedae591be))
* **dev:** bump @openapitools/openapi-generator-cli ([#208](https://github.com/konfjs/k8skonf/issues/208)) ([21b2761](https://github.com/konfjs/k8skonf/commit/21b2761668b168f986cf813615e25ba5374272f4))
* **dev:** bump @openapitools/openapi-generator-cli ([#220](https://github.com/konfjs/k8skonf/issues/220)) ([02cd305](https://github.com/konfjs/k8skonf/commit/02cd305bb5532aa5181970b7730d1d8e0029e46e))
* **dev:** bump @openapitools/openapi-generator-cli ([#258](https://github.com/konfjs/k8skonf/issues/258)) ([2f859b3](https://github.com/konfjs/k8skonf/commit/2f859b345b033093603353152221a0dea77c59da))
* **dev:** bump @openapitools/openapi-generator-cli ([#267](https://github.com/konfjs/k8skonf/issues/267)) ([7c91a79](https://github.com/konfjs/k8skonf/commit/7c91a7941d6c9ed9372f6329cd6c27b47e1225c7))
* **dev:** bump @openapitools/openapi-generator-cli ([#274](https://github.com/konfjs/k8skonf/issues/274)) ([47eed2d](https://github.com/konfjs/k8skonf/commit/47eed2d8bac954ad32a323cbf3eeada1326ee9f1))
* **dev:** bump @openapitools/openapi-generator-cli in /packages/cli ([#124](https://github.com/konfjs/k8skonf/issues/124)) ([3faad74](https://github.com/konfjs/k8skonf/commit/3faad74756c6d0fb44446aa9ef859ad714c3ca53))
* **dev:** bump tsx from 4.19.2 to 4.19.3 ([#111](https://github.com/konfjs/k8skonf/issues/111)) ([2763b1d](https://github.com/konfjs/k8skonf/commit/2763b1de8a051bbaa5efe36c8b126e04c1f452a6))
* **dev:** bump tsx from 4.19.3 to 4.20.5 in /packages/cli ([#198](https://github.com/konfjs/k8skonf/issues/198)) ([14a149c](https://github.com/konfjs/k8skonf/commit/14a149c96408a332e783d95dd69992385b3d67d2))
* **dev:** bump tsx from 4.20.5 to 4.20.6 ([#207](https://github.com/konfjs/k8skonf/issues/207)) ([9e1c748](https://github.com/konfjs/k8skonf/commit/9e1c748c1faf0c48d37fe74cb37a3e6243a65e67))
* **dev:** bump typescript from 5.7.3 to 5.8.2 ([#116](https://github.com/konfjs/k8skonf/issues/116)) ([19dafee](https://github.com/konfjs/k8skonf/commit/19dafee2fba8ede1632006ba09f88e1588805716))
* **dev:** bump typescript from 5.8.2 to 5.9.2 in /packages/cli ([#195](https://github.com/konfjs/k8skonf/issues/195)) ([c11fcf3](https://github.com/konfjs/k8skonf/commit/c11fcf321ffdd9b8ada18f0bfc511f4e1f284956))
* **dev:** bump typescript from 5.9.2 to 5.9.3 ([#212](https://github.com/konfjs/k8skonf/issues/212)) ([6939bc2](https://github.com/konfjs/k8skonf/commit/6939bc28a8392ee8d765ca9fdcb7b55dfc077772))

## [0.6.3](https://github.com/konfjs/k8skonf/compare/cli-v0.6.2...cli-v0.6.3) (2025-02-14)


### Bug Fixes

* **crds:** generate CRD outputs with .ts extensions ([ac8c3e3](https://github.com/konfjs/k8skonf/commit/ac8c3e319ce8d214148202dee951191207862118))
* **crds:** use type only imports where appropriate ([ac8c3e3](https://github.com/konfjs/k8skonf/commit/ac8c3e319ce8d214148202dee951191207862118))
* enable verbatimModuleSyntax, support NodeJS' native TypeScript loader ([#108](https://github.com/konfjs/k8skonf/issues/108)) ([3861fdf](https://github.com/konfjs/k8skonf/commit/3861fdfb07ff60b207b8bdc871dee45c1ee46cdd))
* use import extensions for all files to fix ESM usage ([#105](https://github.com/konfjs/k8skonf/issues/105)) ([6fdcea0](https://github.com/konfjs/k8skonf/commit/6fdcea07088b1fddd98b5094a36c747d5f96dd69))


### Chores

* **cli:** log local files explicitly ([d032c6c](https://github.com/konfjs/k8skonf/commit/d032c6c0eda3213707f99dd606b7e22b019b2ef9))
* remove unnecessary path conversion ([c42d8d0](https://github.com/konfjs/k8skonf/commit/c42d8d032a0a991e7233335f3490f6c396d48d90))

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
