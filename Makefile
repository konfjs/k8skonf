SHELL := /bin/bash
.SHELLFLAGS += -euo pipefail


k8sVersion := v1.32.1


# Download Kubernetes OpenAPI schemas to packages/cli/input-spec/*.json
.PHONY: download-schema
download-schema:
	@echo "Downloading Kubernetes schema version $(k8sVersion)"
	@git clone --depth 1 --branch $(k8sVersion) --filter=blob:none --sparse https://github.com/kubernetes/kubernetes.git temp-k8s && \
		cd temp-k8s && \
		git sparse-checkout set --no-cone /api/openapi-spec/v3
	@rsync -a --delete temp-k8s/api/openapi-spec/v3/ packages/cli/input-spec/
	@rm -rf temp-k8s


# Generate packages/cli/src/input-spec/*.json files
# Generate group-version-kind-map.json
.PHONY: prepare-schema
prepare-schema:
	@echo "Preparing Kubernetes schema"
	@cd packages/cli && \
		echo ${PWD}; bun run src/prepareSchemas.ts


# Generate packages/cli/files/gen/models/*.ts files
.PHONY: models
models: prepare-schema
	@echo "Generating Kubernetes models"
	@cd packages/cli && \
		pnpm gen && \
		rsync -a --delete files/gen/models/ ../core/src/models/


.PHONY: restore-models
restore-models:
	@echo "Restoring Kubernetes models"
	@rsync -a --delete packages/cli/files/gen/models/ packages/core/src/models/


# Generate packages/core/src/models/*.ts files
.PHONY: core
core: restore-models
	@echo "Generating @k8skonf/core package"
	@cd packages/cli && \
		bun src/generateCore.ts && \
		cd ../core && \
		pnpm lint && \
		pnpm tsc --noEmit
