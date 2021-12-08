# Desafio InPeace - Módulo Front-End

### Primeiros passos
- Primeiro é necessário fazer a cópia do repositório
```bash
git clone https://github.com/fontourasantana/desafio-inpeace-frontend
```
- Após copiar o repositório é necessário rodar a aplicação da forma que achar mais apropriada
- Com a aplicação rodando basta acessar a URL [localhost:3000](http://localhost:3000/)

## Rodando aplicação localmente

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

## Rodando aplicação com docker
```bash
docker build . -t desafio-inpeace/frontend
docker run --name desafio-inpeace-frontend -d -p 3000:3000 desafio-inpeace/frontend:latest
```
