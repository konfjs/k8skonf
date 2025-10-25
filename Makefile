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


# Requires java to run openapi-generator
# Reads packages/cli/openapi-spec/$(k8sVersion)/*.json files
# Generates packages/cli/gen/$(k8sVersion)/models/*.ts files
# For each schema JSON file, every entry in components.schemas.<key> is generated as a separate
# TypeScript class in its own file (no interfaces).
# However, the number of schemas does not exactly match the number of generated .ts files,
# because some schemas do not have any properties and therefore do not have a corresponding TypeScript class generated.
.PHONY: models
models:
	@echo "Generating Kubernetes models"
	@cd packages/cli && pnpm gen


# Copy generated models to packages/core/src/models/
# We will later process these files to create proper classes and interfaces,
# and organize them into subdirectories based on their group, version, and kind.
.PHONY: copy-models
copy-models:
	@echo "Copying Kubernetes models"
	@rsync -a --delete packages/cli/gen/$(k8sVersion)/models/ packages/core/src/models/


# Generates "schemas.json"
# Analyzes packages/cli/openapi-spec/$(k8sVersion)/*.json files
# and, for each schema, determines:
# - Resource or property
# - Group, version, kind
# - Cluster or namespaced scope
.PHONY: parse-schema
parse-schema:
	@cd packages/cli && node src/parseSchemas.ts


# Requires "schemas.json"
# Updates packages/core/src/models/*.ts files.
# - Remove unused files. E.g: List, Status, State etc.
# - Replace IoK8sApimachineryPkgApiResourceQuantity, IoK8sApimachineryPkgUtilIntstrIntOrString with `number | string`
# - Remove unused imports and clean up the class.
# - Based on the schema info, convert classes to interfaces where applicable.
# No new files are created here.
.PHONY: k8s
k8s: copy-models
	@echo "Generating @k8skonf/provider-k8s package"
	@cd packages/cli && node src/generateCore.ts


# Note: It seems I need to run this multiple times to remove all the unused interfaces.
# Because on the first pass, it will remove some unused interfaces,
# but it also could leave some interfaces orphaned.
.PHONY: remove-unused
remove-unused:
	@cd packages/cli && node src/removeUnused.ts


# Requires "schemas.json"
.PHONY: move-core
move-core:
	@echo "Moving models to subdirs"
	@cd packages/cli && node src/moveCore.ts


.PHONY: add-exports
add-exports:
	@echo "Adding model exports"
	@cd packages/cli && node src/addExports.ts


# Workaround until https://github.com/dsherret/ts-morph/issues/1612 is fixed.
.PHONY: fix-imports
fix-imports:
	@echo "Fixing import extensions"
	@cd packages/cli && node src/fixImports.ts


.PHONY: lint
lint:
	@cd packages/cli && pnpm lint && pnpm tsc --noEmit
	@cd packages/core && pnpm lint --fix && pnpm tsc --noEmit
