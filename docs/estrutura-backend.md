# Estrutura de Pastas do Projeto Strapi

Esta documentação descreve a estrutura de pastas do projeto Strapi, explicando a finalidade de cada diretório e arquivo.

## Estrutura Geral

```plaintext
src/
│
├── backend/
│   ├── .strapi \ client/
│   │   ├── app.js
│   │   ├── index.html
│   ├── build/
│   ├── config/
│   │   ├── admin.js
│   │   ├── api.js
│   │   ├── database.js
│   │   ├── middlewares.js
│   │   ├── plugins.js
│   │   ├── server.js
│   ├── database \ migrations/
│   │   ├── .gitkeep
│   ├── node_modules/
│   ├── public/
│   │   ├── uploads/
│   │   ├── robots.txt
│   ├── src/
│   │   ├── admin/
│   │   ├── api/
│   │   ├── extensions/
│   │   ├── index.js
│   ├── types \ generated/
│   │   ├── components.d.ts
│   │   ├── contentTypes.d.ts
│   ├── .editorconfig
│   ├── .env
│   ├── .env.example
│   ├── .eslintignore
│   ├── .eslintrc
│   ├── .gitignore
│   ├── .strapi-updater.json
│   ├── favicon.png
│   ├── jsconfig.json
│   ├── package.json
│   ├── README.md
│   ├── yarn.lock
```

## Descrição dos Diretórios e Arquivos
**`.strapi \ client/:`** Contém arquivos específicos do cliente Strapi.
- `app.js:` Arquivo de configuração do aplicativo cliente Strapi.
- `index.html:` Arquivo HTML principal do cliente Strapi.

**`build/:`** Diretório gerado após a construção do projeto. Contém os arquivos que são servidos em produção.

**`config/:`** Contém arquivos de configuração para diferentes aspectos do Strapi.
- `admin.js:` Configurações específicas para a interface administrativa do Strapi.
- ``api.js:`` Configurações para as APIs do Strapi.
- ``database.js:`` Configurações para a conexão com o banco de dados PostgreSQL.
- ``middlewares.js:`` Configurações para os middlewares utilizados pelo Strapi.
- ``plugins.js:`` Configurações para os plugins do Strapi.
- ``server.js:`` Configurações gerais do servidor Strapi.

**``database \ migrations/:``** Diretório para arquivos de migração de banco de dados.
- ``.gitkeep:`` Arquivo vazio para garantir que o diretório seja versionado pelo Git.

**``node_modules/:``** Contém os módulos Node.js instalados como dependências do projeto.

**``public/:``** Contém arquivos públicos que serão servidos diretamente pelo servidor.
- ``uploads/:`` Diretório para uploads de arquivos.

**``src/:``** Contém o código-fonte principal do projeto Strapi.
- ``admin/:`` Diretório para customizações específicas do administrador.
- ``api/:`` Diretório para a definição das APIs do Strapi.
- ``extensions/:`` Diretório para extensões e customizações.
- ``index.js:`` Arquivo principal do código-fonte do Strapi.

**``types \ generated/:``** Contém arquivos TypeScript gerados automaticamente.
- ``components.d.ts:`` Definições de tipos para os componentes.
- ``contentTypes.d.ts:`` Definições de tipos para os content types.

## Arquivos de Configuração
``.editorconfig:`` Arquivo de configuração para editores de código, definindo padrões de formatação.

``.env:`` Arquivo de variáveis de ambiente, contendo configurações sensíveis e específicas do ambiente.

``.env.example:`` Exemplo do arquivo .env com as variáveis de ambiente necessárias para configurar o projeto.

``.eslintignore:`` Lista de arquivos e diretórios a serem ignorados pelo ESLint.

``.eslintrc:`` Arquivo de configuração do ESLint para manter a consistência do código.

``.gitignore:`` Lista de arquivos e diretórios a serem ignorados pelo Git.

``strapi-updater.json:`` Arquivo de configuração para atualizações do Strapi.

``favicon.png:`` Ícone do site.

``jsconfig.json:`` Arquivo de configuração do JavaScript.

``package.json:`` Contém as dependências do projeto e scripts para execução.

``README.md:`` Documentação do projeto.

``yarn.lock:`` Arquivo de bloqueio de dependências gerenciado pelo Yarn.

## Inicialização da aplicação

### Banco de dados
Baixe o **PostgreSQL** por meio [deste link](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

```plaintext
psql -U postgres
CREATE DATABASE tantechdb;
CREATE USER tantech WITH PASSWORD 'tantech@123';
ALTER USER tantech WITH SUPERUSER;
GRANT ALL PRIVILEGES ON DATABASE tantechdb TO tantech;
```

### Iniciar o backend

```plaintext
# Instalar as dependências do projeto
npm i

# Iniciar o servidor de desenvolvimento
npm run develop
```
-> Para rodar o strapi de maneiras especificas, por exemplo, para produção, deploy, etc. Existem outros comandos com npm ou yarn que é possível ler na documentação localizada: `backend\README.md`.