SHELL := /bin/bash
.SHELLFLAGS += -euo pipefail


k8sVersion := v1.32.0
k8sUnusedOpenApiFiles := \
	".well-known__openid-configuration_openapi.json" \
	"openid__v1__jwks_openapi.json" \
	"logs_openapi.json" \
	"version_openapi.json"


# Download Kubernetes OpenAPI schemas to packages/cli/openapi-spec/$(k8sVersion)/*.json
.PHONY: download-schema
download-schema:
	@echo "Downloading Kubernetes schema version $(k8sVersion)"
	@git clone --depth 1 --branch $(k8sVersion) --filter=blob:none --sparse https://github.com/kubernetes/kubernetes.git temp-k8s && \
		cd temp-k8s && \
		git sparse-checkout set --no-cone /api/openapi-spec/v3
	@rsync -a --delete temp-k8s/api/openapi-spec/v3/ packages/cli/openapi-spec/$(k8sVersion)/
	@rm -rf temp-k8s
	@cd packages/cli/openapi-spec/$(k8sVersion)/ && rm -f $(k8sUnusedOpenApiFiles)


# Generate schemas.json
.PHONY: parse-schema
parse-schema:
	@cd packages/cli && \
		npx tsx src/parseSchemas.ts


# Generate packages/cli/gen/models/*.ts files
.PHONY: models
models:
	@echo "Generating Kubernetes models"
	@cd packages/cli && pnpm gen


.PHONY: copy-models
copy-models:
	@echo "Copying Kubernetes models"
	@rsync -a --delete packages/cli/gen/models/ packages/core/src/models/


# Update packages/core/src/models/*.ts files
.PHONY: core
core: copy-models
	@echo "Generating @k8skonf/core package"
	@cd packages/cli && npx tsx src/generateCore.ts


# Note: It seems I need to run this multiple times to remove all the unused interfaces.
# Because on the first pass, it will remove some unused interfaces,
# but it also could leave some interfaces orphaned.
.PHONY: remove-unused
remove-unused:
	@cd packages/cli && npx tsx src/removeUnused.ts


.PHONY: move-core
move-core:
	@echo "Moving models to subdirs"
	@cd packages/cli && npx tsx src/moveCore.ts


.PHONY: add-exports
add-exports:
	@echo "Adding model exports"
	@cd packages/cli && npx tsx src/addExports.ts


# Workaround until https://github.com/dsherret/ts-morph/issues/1612 is fixed.
.PHONY: fix-imports
fix-imports:
	@echo "Fixing import extensions"
	@cd packages/cli && npx tsx src/fixImports.ts


.PHONY: lint
lint:
	@cd packages/cli && pnpm lint && pnpm tsc --noEmit
	@cd packages/core && pnpm lint --fix && pnpm tsc --noEmit
