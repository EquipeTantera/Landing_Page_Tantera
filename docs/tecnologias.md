# Definição de Tecnologias 


#### **Frontend e estilização:**
**ViteJS + ReactJS** (https://vitejs.dev/)
- **Definição:** ViteJS é uma ferramenta de construção front-end que visa fornecer uma experiência de desenvolvimento mais rápida e enxuta, especialmente ao trabalhar com frameworks modernos como ReactJS. 
- **Justificativa:** A escolha de ViteJS juntamente com ReactJS para o frontend permite uma rápida prototipagem e desenvolvimento graças à rápida recarga de módulos do Vite e à capacidade do React de criar uma interface de usuário dinâmica e responsiva. Isso é ideal para desenvolver uma landing page de forma profissional e eficiente, que possa ser facilmente adaptada ou expandida conforme necessário.

**SCSS** (https://sass-lang.com/)
- **Definição:** SCSS é uma extensão de CSS que adiciona poderosas funcionalidades como variáveis, mixins, e aninhamento, tornando o CSS mais mantível e legível
- **Justificativa:** Utilizar SCSS para a estilização da landing page permite um maior controle e flexibilidade sobre o design, facilitando a manutenção e a organização dos estilos. Isso pode ajudar a equipe (e próximas equipes) a implementar designs complexos de forma mais eficiente

**shadcn** (https://ui.shadcn.com/)
- **Definição:** O shadcn é um Design System que oferece um conjunto de componentes UI prontos para uso, projetados para serem belos, eficientes e adaptáveis, com suporte para temas escuros e claros.
- **Justificativa:** A utilização do shadcn como Design System complementa perfeitamente a escolha do SCSS para estilização, pois fornece uma biblioteca coesa de componentes UI que podem ser facilmente integrados e personalizados com SCSS. Isso permite à equipe de desenvolvimento focar na lógica e funcionalidades específicas da landing page, ao invés de gastar tempo excessivo no design de cada componente. A escolha de shadcn ajuda a garantir consistência visual, uma UX (User Experience) de alta qualidade e adaptabilidade em diferentes dispositivos e temas, facilitando o desenvolvimento de uma interface atrativa e profissional para a atlética, alinhada com as melhores práticas de design moderno.


#### **Backend:**
**Strapi** ([https://docs.strapi.io/](https://docs.strapi.io/))
- **Definição:** Strapi é um Headless CMS (Content Management System) de código aberto, que facilita a criação e o gerenciamento de conteúdo para APIs. Ele oferece um painel administrativo intuitivo e recursos de personalização que se adaptam a diferentes tipos de projetos. O Strapi será fundamental para a landing page, pois fornece uma interface amigável para gerenciar conteúdo e permite a fácil integração de APIs com diferentes front-ends.
- **Justificativa:** Anteriormente, a escolha seria o Django para o backend. No entanto, o Strapi foi selecionado por ser mais flexível, mais fácil de usar e possuir uma interface mais amigável. Além disso, o Strapi proporciona um desenvolvimento ágil e eficiente, o que é perfeito para gerenciar conteúdo dinâmico na landing page.

#### **Banco de dados:**
**PostgreSQL + ElephantSQL** (https://www.postgresql.org/docs/ | https://www.elephantsql.com/)
- **Definição:** PostgreSQL é um sistema de gerenciamento de banco de dados relacional poderoso e gratuito. ElephantSQL é um serviço que oferece instâncias PostgreSQL gerenciadas na nuvem.
- **Justificativa:** Utilizar PostgreSQL oferece uma solução robusta, escalável e com recursos completos de gerenciamento de dados. Combinado com ElephantSQL, facilita a gestão do banco de dados, pois o serviço cuida da manutenção e da escala, permitindo que a equipe se concentre no desenvolvimento da aplicação.


