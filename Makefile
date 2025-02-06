SHELL := /bin/bash
.SHELLFLAGS += -euo pipefail


k8sVersion := v1.32.1


.PHONY: all
all: download-schema parse-schema models core


# Download Kubernetes OpenAPI schemas to packages/cli/input-spec/*.json
.PHONY: download-schema
download-schema:
	@echo "Downloading Kubernetes schema version $(k8sVersion)"
	@git clone --depth 1 --branch $(k8sVersion) --filter=blob:none --sparse https://github.com/kubernetes/kubernetes.git temp-k8s && \
		cd temp-k8s && \
		git sparse-checkout set --no-cone /api/openapi-spec/v3
	@rsync -a --delete temp-k8s/api/openapi-spec/v3/ packages/cli/input-spec/
	@rm -rf temp-k8s


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
	@cd packages/core && pnpm lint && pnpm tsc --noEmit
