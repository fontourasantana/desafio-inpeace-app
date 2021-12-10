# Desafio InPeace - Módulo App

## Requisitos
|Ferramenta|Versão Testada|
|:-:|:-:|
|[Docker Engine](https://docs.docker.com/engine/)|20.10.11|
|[GNU Make](https://www.gnu.org/software/make/)|4.2.1|

### Primeiros passos
- Primeiro é necessário fazer a cópia do repositório
```bash
git clone https://github.com/fontourasantana/desafio-inpeace-app
```
- Após copiar o repositório copie o exemplo do .env fornecido no repositório
```bash
cp .env.example .env
```
**Obs:** A aplicação por padrão está configurado para rodar na porta **3000**, caso essa porta esteja sendo utilizada no sistema, altere a váriavel de ambiente **APP_PORT** no .env
- Com as variáveis de ambiente configuradas, para buildar e rodar o projeto execute:
```bash
make
```
- Com a aplicação rodando basta acessar a URL [localhost:3000](http://localhost:3000/)

### Executando projeto
```bash
make up
```
