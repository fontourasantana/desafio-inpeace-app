include .env

default: prepare-mocks build-app up
prepare-mocks:
	@echo "\033[1;32mPreparando mocks\033[0m"
	@mv src/store/usuarioMocked.js src/store/usuario.js
	@rm -f src/store/usuarioMocked.js
build-app:
	@echo "\033[1;32mBuildando APP\033[0m"
	@docker build . -t desafio-inpeace-app
up:
	@echo "\033[1;32mIniciando aplicação\033[0m"
	@docker run -it --rm -p $(APP_PORT):3000 desafio-inpeace-app:latest
prepare-dev:
	@echo "\033[1;32mInstalando dependências do projeto\033[0m"
	@npm ci --silent
up-dev:
	@echo "\033[1;32mIniciando aplicação (modo desenvolvimento)\033[0m"
	@npm run dev
