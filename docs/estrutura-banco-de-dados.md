# Documentação do Diagrama de Entidade-Relacionamento (DER)

## Introdução
Esta documentação descreve o Diagrama de Entidade-Relacionamento (DER) do site da atlética tantera. O DER é dividido em várias páginas, cada uma representando um conjunto de entidades relacionadas. Além disso, há relacionamentos entre entidades de diferentes páginas.

link do diagrama realizado: [diagrama](https://lucid.app/lucidchart/ee39349f-9014-4994-9012-d6a35584cc5a/edit?viewport_loc=-2269%2C-1484%2C2478%2C988%2C0_0&invitationId=inv_e192750a-6b62-4c8d-adfe-17dc087cf290)

### Regras
- **Chave Primária:** Cada entidade possui uma chave primária única para identificar de forma exclusiva cada registro;
- **Chaves Estrangeiras:** Relacionamentos são mantidos através de chaves estrangeiras para garantir a integridade referencial;
- **Nomes de entidade e atributos:** Os nomes estão no singular, seguindo o padrão de `snake_case`.


## Página: Anúncio de eventos

### Entidade: Event
**Descrição:** Representa um evento que foi/será realizado pela atlética.

| Atributo      | Tipo de Dado | Descrição                                         | Restrição      |
| ------------- | ------------ | ------------------------------------------------- | -------------- |
| `id`          | primary key  | identificador único da tabela                     | deve ser único |
| `partner_id`  | foreign key  | chave estrangeira, relação com a coluna `partner` | -              |
| `image`       | varchar      | imagem do evento                                  | -              |
| `street`      | varchar      | rua do evento                                     | -              |
| `postal_code` | varchar      | cep do evento                                     | -              |
| `number`      | integer      | número da rua do evento                           | -              |
| `date`        | date         | data do evento                                    | -              |
| `start_time`  | date         | data de início do evento                          | -              |
| `end_time`    | date         | data de finalização do evento                     | -              |
| `note`        | varchar      | observações sobre o evento                        | -              |
| `description` | varchar      | descrição do evento                               | -              |
| `price`       | decimal      | preço do evento                                   | -              |
| `title`       | varchar      | título do evento                                  | -              |
| `discount`    | boolean      | desconto no preço do evento                       | -              |

### Entidade: photo
**Descrição:** Representa as fotos realizadas no evento.

| Atributo   | Tipo de Dado | Descrição                                       | Restrição      |
| ---------- | ------------ | ----------------------------------------------- | -------------- |
| `id`       | primary key  | identificador único da tabela                   | deve ser único |
| `event_id` | foreign key  | chave estrangeira, relação com a coluna `event` | -              |
| `photo`    | varchar      | foto do evento                                  | -              |

---

## Página: Inscrição de eventos

### Entidade: event_registration_card
**Descrição:** Representa o card com informações sobre o evento específico.

| Atributo   | Tipo de Dado | Descrição                                       | Restrição      |
| ---------- | ------------ | ----------------------------------------------- | -------------- |
| `id`       | primary key  | identificador único da tabela                   | deve ser único |
| `event_id` | foreign key  | chave estrangeira, relação com a coluna `event` | -              |
| `title`    | varchar      | titulo do evento                                | -              |

### Entidade: event_form
**Descrição:** Representa o formulário de inscrição para um evento específico.

| Atributo      | Tipo de Dado | Descrição                                        | Restrição      |
| ------------- | ------------ | ------------------------------------------------ | -------------- |
| `id`          | primary key  | identificador único da tabela                    | deve ser único |
| `course_id`   | foreign key  | chave estrangeira, relação com a coluna `course` | -              |
| `class_id`    | foreign key  | chave estrangeira, relação com a coluna `class`  | -              |
| `year_id`     | foreign key  | chave estrangeira, relação com a coluna `year`   | -              |
| `name`        | varchar      | nome da pessoa                                   | -              |
| `number`      | decimal      | número de celular                                | -              |
| `email`       | varchar      | email da pessoa                                  | -              |
| `participant` | boolean      | participante (competidor) ou não                 | -              |

### Entidade: course
**Descrição:** Representa os cursos para o formulário de inscrição do evento.

| Atributo      | Tipo de Dado | Descrição                     | Restrição      |
| ------------- | ------------ | ----------------------------- | -------------- |
| `id`          | primary key  | identificador único da tabela | deve ser único |
| `course_name` | varchar      | nome do curso                 | -              |

### Entidade: class
**Descrição:** Representa a turma para o formulário de inscrição do evento.

| Atributo       | Tipo de Dado | Descrição                     | Restrição      |
| -------------- | ------------ | ----------------------------- | -------------- |
| `id`           | primary key  | identificador único da tabela | deve ser único |
| `class_course` | integer      | turma                         | -              |

### Entidade: course
**Descrição:** Representa o ano para o formulário de inscrição do evento.

| Atributo | Tipo de Dado | Descrição                     | Restrição      |
| -------- | ------------ | ----------------------------- | -------------- |
| `id`     | primary key  | identificador único da tabela | deve ser único |
| `year`   | integer      | ano de faculdade              | -              |

---

## Página: Sobre Nós

### Entidade: about_us
**Descrição:** Representa o conteúdo dentro da página 'sobre' a atlética.

| Atributo             | Tipo de Dado | Descrição                                         | Restrição      |
| -------------------- | ------------ | ------------------------------------------------- | -------------- |
| `id`                 | primary key  | identificador único da tabela                     | deve ser único |
| `contact_id`         | foreign key  | chave estrangeira, relação com a coluna `contact` | -              |
| `board_id`           | foreign key  | chave estrangeira, relação com a coluna `board`   | -              |
| `reasons_id`         | foreign key  | chave estrangeira, relação com a coluna `reasons` | -              |
| `purpose`            | varchar      | texto sobre propósitos da diretora                | -              |
| `foundation`         | varchar      | texto sobre a fundação da atlética                | -              |
| `mascot_image`       | varchar      | imagem do mascote                                 | -              |
| `mascot_description` | varchar      | descrição do mascote                              | -              |

### Entidade: contact
**Descrição:** Representa o card para que o usuário entre em contato com a atlética.

| Atributo     | Tipo de Dado | Descrição                                         | Restrição      |
| ------------ | ------------ | ------------------------------------------------- | -------------- |
| `id`         | primary key  | identificador único da tabela                     | deve ser único |
| `purpose_id` | foreign key  | chave estrangeira, relação com a coluna `purpose` | -              |
| `name`       | varchar      | nome da pessoa                                    | -              |
| `email`      | varchar      | email da pessoa                                   | -              |
| `telephone`  | integer      | telefone da pessoa                                | -              |
| `message`    | varchar      | mensagem                                          | -              |

### Entidade: purpose
**Descrição:** Representa os 'motivos' para o qual o usuário quer entrar em contato com a atlética.

| Atributo       | Tipo de Dado | Descrição                                | Restrição      |
| -------------- | ------------ | ---------------------------------------- | -------------- |
| `id`           | primary key  | identificador único da tabela            | deve ser único |
| `purpose_name` | varchar      | motivos para o usuário entrar em contato | -              |

---

## Página: Diretoria específica

### Entidade: result
**Descrição:** Representa os resultados obtidos pela diretoria específica.

| Atributo        | Tipo de Dado | Descrição                                                | Restrição      |
| --------------- | ------------ | -------------------------------------------------------- | -------------- |
| `id`            | primary key  | identificador único da tabela                            | deve ser único |
| `board_id`      | foreign key  | chave estrangeira, relação com a coluna `specific_board` | pode ser nulo  |
| `management_id` | foreign key  | chave estrangeira, relação com a coluna `board`          | pode ser nulo  |
| `partner_id`    | foreign key  | chave estrangeira, relação com a coluna `partner`        | pode ser nulo  |
| `event_id`      | foreign key  | chave estrangeira, relação com a coluna `event`          | -              |
| `description`   | varchar      | resultado da diretoria                                   | -              |
| `numbering`     | integer      | número/métrica do resultado                              | -              |

### Entidade: specific_board
**Descrição:** Representa os membros e diretores de cada diretoria

| Atributo        | Tipo de Dado | Descrição                                          | Restrição      |
| --------------- | ------------ | -------------------------------------------------- | -------------- |
| `id`            | primary key  | identificador único da tabela                      | deve ser único |
| `management_id` | foreign key  | chave estrangeira, relação com a coluna `board`    | -              |
| `director_id`   | foreign key  | chave estrangeira, relação com a coluna `member`   | -              |
| `planning_id`   | foreign key  | chave estrangeira, relação com a coluna `planning` | -              |
| `name`          | varchar      | nome da diretoria                                  | -              |
| `about`         | varchar      | descrição sobre a diretoria                        | -              |


### Entidade: planning
**Descrição:** Representa o planejamento de uma diretoria especifica.

| Atributo      | Tipo de Dado | Descrição                                       | Restrição      |
| ------------- | ------------ | ----------------------------------------------- | -------------- |
| `id`          | primary key  | identificador único da tabela                   | deve ser único |
| `board_id`    | foreign key  | chave estrangeira, relação com a coluna `board` | -              |
| `description` | varchar      | descrição do planejamento                       | -              |
| `completed`   | boolean      | planejamento foi ou não completo                | -              |

---

## Página: Gestão

### Entidade: board
**Descrição:** Representa a gestão especifica.

| Atributo       | Tipo de Dado | Descrição                                        | Restrição      |
| -------------- | ------------ | ------------------------------------------------ | -------------- |
| `id`           | primary key  | identificador único da tabela                    | deve ser único |
| `president_id` | foreign key  | chave estrangeira, relação com a coluna `member` | -              |
| `description`  | varchar      | descrição da gestão atual                        | -              |
| `year`         | varchar      | ano da gestão                                    | -              |
| `start_date`   | date         | data de inicio                                   | -              |
| `end_date`     | date         | data de fim da gestão                            | -              |
| `current`      | boolean      | a gestão é a atual                               | -              |
| `member_image` | varchar      | imagem de toda a gestão                          | -              |

### Entidade: member
**Descrição:** Representa as informações dos membros e seus cargos na atlética.

| Atributo | Tipo de Dado | Descrição                            | Restrição      |
| -------- | ------------ | ------------------------------------ | -------------- |
| `id`     | primary key  | identificador único da tabela        | deve ser único |
| `name`   | varchar      | nome do integrante                   | -              |
| `image`  | varchar      | imagem do integrante                 | -              |
| `role`   | varchar      | cargo do integrante                  | -              |
| `board`  | varchar      | diretoria que o integrante faz parte | -              |

---

## Página: Produto

### Entidade: product
**Descrição:** Representa um produto.

| Atributo      | Tipo de Dado | Descrição                     | Restrição      |
| ------------- | ------------ | ----------------------------- | -------------- |
| `id`          | primary key  | identificador único da tabela | deve ser único |
| `title`       | varchar      | título do produto             | -              |
| `image`       | varchar      | imagem do produto             | -              |
| `price`       | decimal      | preço do produto              | -              |
| `description` | varchar      | descrição do produto          | -              |
| `sold_out`    | boolean      | produto com desconto          | -              |
| `size`        | varchar      | tamanho do produto            | -              |
| `genre`       | varchar      | gênero do produto             | -              |
| `color`       | varchar      | cor do produto                | -              |

### Entidade: category
**Descrição:** Representa as possíveis categorias de um produto.

| Atributo   | Tipo de Dado | Descrição                            | Restrição      |
| ---------- | ------------ | ------------------------------------ | -------------- |
| `id`       | primary key  | identificador único da tabela        | deve ser único |
| `category` | varchar      | categorias que os produtos podem ter | -              |

### Entidade: category_product
**Descrição:** Representa a relação de 'n' produtos para 'n' categoria.

| Atributo      | Tipo de Dado | Descrição                                          | Restrição      |
| ------------- | ------------ | -------------------------------------------------- | -------------- |
| `id`          | primary key  | identificador único da tabela                      | deve ser único |
| `product_id`  | foreign key  | chave estrangeira, relação com a coluna `product`  | -              |
| `category_id` | foreign key  | chave estrangeira, relação com a coluna `category` | -              |

### Entidade: photo
**Descrição:** Representa as fotos do produto.

| Atributo     | Tipo de Dado | Descrição                                         | Restrição      |
| ------------ | ------------ | ------------------------------------------------- | -------------- |
| `id`         | primary key  | identificador único da tabela                     | deve ser único |
| `product_id` | foreign key  | chave estrangeira, relação com a coluna `product` | -              |
| `photo`      | varchar      | imagem do produto                                 | -              |


---
## Página: Parceiros

### Entidade: partner
**Descrição:** Representa um parceiro

| Atributo    | Tipo de Dado | Descrição                                        | Restrição      |
| ----------- | ------------ | ------------------------------------------------ | -------------- |
| `id`        | primary key  | identificador único da tabela                    | deve ser único |
| `impact_id` | foreign key  | chave estrangeira, relação com a coluna `result` | -              |
| `title`     | varchar      | título do evento                                 | -              |
| `slogan`    | varchar      | frase de impacto do parceiro                     | -              |
| `icon`      | varchar      | imagem com a logo do parceiro                    | -              |
| `image`     | varchar      | imagem de algum produto do parceiro              | -              |

---

## Componente: Banner 

### Entidade: Banner
**Descrição:** Representa o banner que deixa em destaque um evento.

| Atributo  | Tipo de Dado | Descrição                     | Restrição      |
| --------- | ------------ | ----------------------------- | -------------- |
| `id`      | primary key  | identificador único da tabela | deve ser único |
| `url_png` | varchar      | link da imagem do banner      | -              |

---

## Página: Home

### Entidade: video
**Descrição:** Representa o vídeo de destaque da tela home.

| Atributo | Tipo de Dado | Descrição                        | Restrição      |
| -------- | ------------ | -------------------------------- | -------------- |
| `id`     | primary key  | identificador único da tabela    | deve ser único |
| `video`  | varchar      | vídeo de destaque na página home | -              |

Nessa página será puxado as seguintes tabelas:
- **result:** Onde tem métricas das diretorias;
- **event:** Onde tem todos os eventos realizados pela atlética;
- **board:** Onde tem informações sobre a diretoria atual;
- **partner:** Onde tem informações sobre os parceiros da atlética;
- **contact:** Onde tem o campo para entrar em contato com atlética.
