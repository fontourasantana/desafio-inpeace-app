# Desafio InPeace - Módulo Front-End

## Rodando Aplicação Instalando Depêndencias No Computador

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

## Rodando Aplicação Com Docker
```bash
docker build . -t desafio-inpeace/frontend
docker run --name desafio-inpeace-frontend -d -p 3000:3000 desafio-inpeace/frontend:latest
```
