SHELL := /bin/bash
.SHELLFLAGS += -euo pipefail
.ONESHELL:


k8sVersion := v1.31.4


# Download Kubernetes OpenAPI schemas to packages/cli/files/kubernetes/api/openapi-spec/v3/*.json
.PHONY: download-schema
download-schema:
	@echo "Downloading Kubernetes schema version $(k8sVersion)"
	@cd packages/cli
	@mkdir -p files/kubernetes
	@git clone --depth=1 --branch $(k8sVersion) --single-branch --filter=blob:none \
			https://github.com/kubernetes/kubernetes.git files/kubernetes


# Generate packages/cli/src/input-spec/*.json files
.PHONY: prepare-schema
prepare-schema:
	@echo "Preparing Kubernetes schema"
	@cd packages/cli
	@bun src/generateBaseModels.ts


# Generate packages/cli/files/gen/models/*.ts files
.PHONY: models
models: prepare-schema
	@echo "Generating Kubernetes models"
	@cd packages/cli
	@pnpm gen
	@rsync -a --delete files/gen/models/ ../core/src/models/


.PHONY: restore-models
restore-models:
	@echo "Restoring Kubernetes models"
	@rsync -a --delete packages/cli/files/gen/models/ packages/core/src/models/


# Generate packages/core/src/models/*.ts files
.PHONY: core
core: restore-models
	@echo "Generating @k8skonf/core package"
	@cd packages/cli
	@bun src/generateCore.ts
	@cd ../core
	@pnpm lint
	@pnpm tsc --noEmit
