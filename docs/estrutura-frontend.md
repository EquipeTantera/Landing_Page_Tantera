# Estrutura de pastas do frontend

Este documento descreve a estrutura de pastas e arquivos do frontend do projeto inicial do site da atlética. A estrutura proposta visa organizar de forma clara e eficiente os arquivos e diretórios do projeto, facilitando o desenvolvimento, a manutenção e a colaboração entre os membros da equipe.

## Estrutura de Pastas

A estrutura de pastas do frontend do projeto é organizada da seguinte forma:

```
frontend/
├── public
├── components
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   ├── services
│   ├── styles
```

### Descrição das Pastas

- **`public/`**: Contém arquivos estáticos que serão servidos diretamente pelo servidor, como imagens, ícones, fontes, etc.
- **`components/`**: Contém componentes reutilizáveis que podem ser compartilhados entre diferentes páginas ou partes do site.
- **`src/`**: Contém o código-fonte principal do projeto.
  - **`assets/`**: Contém arquivos de mídia, como imagens, vídeos, etc.
  - **`components/`**: Contém componentes específicos do projeto que não são compartilhados.
  - **`pages/`**: Contém as páginas do site, cada uma em seu próprio diretório.
  - **`services/`**: Contém módulos para interação com APIs externas ou serviços.
  - **`styles/`**: Contém arquivos de estilos globais, variáveis, mixins, etc.

### Arquivos de Configuração

Além das pastas mencionadas acima, o projeto frontend também pode conter arquivos de configuração, como:
- `main.jsx`: Arquivo principal do projeto, onde a aplicação React é inicializada.
- `routes.jsx`: Arquivo de configuração das rotas da aplicação.
- `.eslintrc.js`: Arquivo de configuração do ESLint para manter a consistência do código.
- `vite.config.js`: Arquivo de configuração do Vite para personalizar o ambiente de desenvolvimento.
- `index.html`: Arquivo HTML principal da aplicação.

### Prompts para Inicialização do Frontend

Para iniciar o frontend, é possível utilizar os seguintes comandos:

```bash
# Instalar as dependências do projeto
npm i 

# Iniciar o servidor de desenvolvimento
npm run dev
```

### Bibliotecas e Frameworks Utilizados

- **ViteJS + ReactJS**: ViteJS é uma ferramenta de construção front-end que visa fornecer uma experiência de desenvolvimento mais rápida e enxuta, especialmente ao trabalhar com frameworks modernos como ReactJS.

- **SCSS**: SCSS é uma extensão de CSS que adiciona poderosas funcionalidades como variáveis, mixins, e aninhamento, tornando o CSS mais mantível e legível.

- **React Router DOM**: Biblioteca de roteamento para React que permite a navegação entre diferentes páginas da aplicação.

- **Axios**: Biblioteca para fazer requisições HTTP no frontend, facilitando a comunicação com APIs externas.

