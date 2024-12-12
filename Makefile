k8sVersion := v1.31.4

.PHONY: download-schema
download-schema:
	@echo "Downloading Kubernetes schema version $(k8sVersion)"
	@cd packages/cli && \
		rm -rf files/kubernetes && \
		mkdir -p files/kubernetes && \
		git clone --depth=1 --branch $(k8sVersion) --single-branch \
			--filter=blob:none --sparse \
		    https://github.com/kubernetes/kubernetes.git files/kubernetes && \
		cd files/kubernetes && \
		git sparse-checkout set api/openapi-spec/v3 && \
        git sparse-checkout disable


.PHONY: prepare-schema
prepare-schema:
	@echo "Preparing Kubernetes schema"
	@cd packages/cli && \
		bun src/index.ts


.PHONY: models
models:
	@echo "Generating Kubernetes models"
	@cd packages/cli && \
		pnpm gen && \
		rsync -a --delete ./files/gen/models/ src/models/


.PHONY: core
core:
	@echo "Generating @k8skonf/core package"
	@cd packages/cli && \
		rsync -a --delete ./files/gen/models/ src/models/ && \
		bun src/morph.ts && \
		rsync -a --delete ./src/models/ ../core/src/models/ && \
		cd ../core && \
		pnpm lint
