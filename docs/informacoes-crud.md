# Informações sobre o Crud

Esta documentação tem como objetivo descrever os endpoints necessários para a landing page da atlética Tantera. Serão documentados os endpoints CRUD (Create, Read, Update, Delete) para as entidades. Cada endpoint inclui informações sobre os métodos ``HTTP`` suportados, parâmetros de entrada, formato das requisições e respostas, bem como exemplos de uso.

Os testes estão realizados pelo `Postman`, nele contém exemplos já prontos para testes, bem como a documentação sobre cada crud criado em suas respectivas pastas.
link do postman: [Testes](https://tantech-6301.postman.co/workspace/Tantech-Workspace~bc7d8631-5e21-46d7-babb-0b5ffdc0c154/collection/26953606-07ebf036-9a91-4880-bead-9bf5af1ed9a6?action=share&creator=26953606)

Foram criados no modo `public`, ou seja, qualquer pessoa pode acessar esses endpoints sem autenticação, mas com certas restrições nas operações permitidas. Nesse caso, os endpoints têm as seguintes permissões:

- ``find``: Permite listar todas as entradas de uma entidade.
- ``findOne``: Permite buscar uma entrada específica por ID.
- ``create``: Permite criar uma nova entrada.


## Board - gestão/diretoria

### Criar Gestão (Create)
- **Endpoint**: ``POST`` -  /api/boards

Parâmetros:
- president_id (integer): ID do presidente.
- description (varchar): Descrição da gestão.
- year (integer): Ano da gestão.
- start_date (date): Data de início da gestão.
- end_date (date): Data de término da gestão.
-  current (boolean): Indica se é a gestão atual.

*Exemplo de requisição:*
```json
{
    "data": {
        "president_id": 1,
        "description": "Gestão 2024",
        "year": "2024",
        "start_date": "2024-01-01",
        "end_date": "2024-12-31",
        "current": true
    } 
}
```

### Encontrar todas as gestões (Find)
- **Endpoint**: ``GET`` - /api/boards
- Parâmetros: Nenhum

*Exemplo de resposta:*
```json
{
  "data": {
    "id": 1,
    "president_id": 1,
    "description": "Gestão 2024",
    "year": "2024",
    "start_date": "2024-01-01",
    "end_date": "2024-12-31",
    "current": true
  }
}
```

### Encontrar uma gestão específica (FindOne)
- **Endpoint**: ``GET`` - /api/boards/:id

- Parâmetros: Nenhum

*Exemplo de resposta:*
```json
{
  "data": [ {
    "id": 1,
    "president_id": 1,
    "description": "Gestão 2024",
    "year": "2024",
    "start_date": "2024-01-01",
    "end_date": "2024-12-31",
    "current": true
    }
  ]
}
```


## About_us - Sobre nós

### Inserir conteúdo na página 'Sobre nós' (Create)
- **Endpoint**: ``POST`` -  /api/about-uses

Parâmetros:
- purpose (varchar): propósito da atlética.
- foundation (varchar): descrição sobre a fundação da atlética.
- mascot_description (varchar): descrição sobre o mascote.
- mascot_image (image): imagem do mascote

*Exemplo de requisição:*
```json
{
  "data": {
    "purpose": "testeP",
    "foundation": "testeF",
    "mascot_description": "testeD",
    "mascot_image": {
      "url": "https://i.postimg.cc/J0VbLpVd/Captura-de-tela-2024-06-20-201729.png",
      "name": "nome_da_imagem.png",
      "alternativeText": "Texto alternativo da imagem",
      "caption": "Legenda da imagem"
    },
    // dados para conexão com outras entidades
    "contact_id": "2",
    "board_id":"2"
  }
}
```

### Encontrar conteúdo de todas as páginas 'Sobre nós' (Find)

- **Endpoint**: ``GET`` -  /api/about-uses

Parâmetros: nenhum

*Exemplo de resposta:*
```json
{
    "data": [
        {
            "id": 3,
            "attributes": {
                "purpose": "teste",
                "foundation": "teste",
                "mascot_description": "testes",
                "createdAt": "2024-06-25T01:57:57.108Z",
                "updatedAt": "2024-06-25T01:58:05.265Z",
                "publishedAt": "2024-06-25T01:58:04.954Z"
            }
        },
        {
            "id": 4,
            "attributes": {
                "purpose": "testeP",
                "foundation": "testeF",
                "mascot_description": "testeD",
                "createdAt": "2024-06-25T01:59:00.392Z",
                "updatedAt": "2024-06-25T01:59:00.392Z",
                "publishedAt": "2024-06-25T01:59:00.390Z"
            }
        }
    ]
}
```

### Encontrar conteúdo de uma página 'Sobre nós' (FindOne)

- **Endpoint**: ``GET`` -  /api/about-uses/:id

Parâmetros: nenhum

*Exemplo de resposta:*
```json
{
    "data": {
        "id": 5,
        "attributes": {
            "purpose": "testeP",
            "foundation": "testeF",
            "mascot_description": "testeD",
            "createdAt": "2024-06-25T02:08:05.820Z",
            "updatedAt": "2024-06-25T02:08:05.820Z",
            "publishedAt": "2024-06-25T02:08:05.670Z"
        }
    }
}
```

## Event - evento

### Criar um evento (Create)
- **Endpoint**: ``POST`` -  /api/events

Parâmetros:
- image (image): Imagem do evento.
- street (varchar): Rua do evento.
- postal_code (varchar): CEP do local do evento.
- number (integer): número do local do evento.
- date (date): data do evento.
- start_time (date/time): data e horário de incio do evento.
- date (date/time): data e horário de fim do evento.
- note (varchar): observação do evento.
- description (varchar): descrição sobre o evento.
- price (decimal): preço do evento.
- title (varchar): título do evento.
- discount (boolean): evento está com desconto.

*Exemplo de requisição:*
```json
{
    "data": {
        "image": {
            "url": "https://i.postimg.cc/J0VbLpVd/Captura-de-tela-2024-06-20-201729.png",
            "name": "nome_da_imagem.png",
            "alternativeText": "Texto alternativo da imagem",
            "caption": "Legenda da imagem"
        },
        "street": "testeA",
        "postal_code": "123443212124",
        "number": 10,
        "date": "2024-06-10",
        "start_time": "2024-06-10T12:00:00.000Z",
        "end_time": "2024-06-24T18:35:00.000Z",
        "note": "TesteA",
        "description": "TesteA",
        "price": 10.45,
        "title": "TesteA",
        "discount": "True"
    }
}
```

### Encontrar todos os eventos (Find)
- **Endpoint**: ``GET`` -  /api/events

Parâmetros: nenhum

*Exemplo de resposta:*
```json
{
    "data": [
        {
            "id": 2,
            "attributes": {
                "street": "testeA",
                "postal_code": "123443212124",
                "number": 10,
                "date": "2024-06-10",
                "start_time": "2024-06-10T03:00:00.000Z",
                "end_time": "2024-06-10T03:00:00.000Z",
                "note": "TesteA",
                "description": "TesteA",
                "price": 10.45,
                "title": "TesteA",
                "discount": true,
                "createdAt": "2024-06-25T02:41:07.513Z",
                "updatedAt": "2024-06-25T02:41:07.513Z",
                "publishedAt": "2024-06-25T02:41:07.357Z"
            }
        }
    ]
}
```

### Encontrar um evento especifico (FindOne)
- **Endpoint**: ``GET`` -  /api/events/:id

Parâmetros: nenhum

*Exemplo de resposta:*
```json
{
    "data": {
        "id": 2,
        "attributes": {
            "street": "testeA",
            "postal_code": "123443212124",
            "number": 10,
            "date": "2024-06-10",
            "start_time": "2024-06-10T03:00:00.000Z",
            "end_time": "2024-06-10T03:00:00.000Z",
            "note": "TesteA",
            "description": "TesteA",
            "price": 10.45,
            "title": "TesteA",
            "discount": true,
            "createdAt": "2024-06-25T02:41:07.513Z",
            "updatedAt": "2024-06-25T02:41:07.513Z",
            "publishedAt": "2024-06-25T02:41:07.357Z"
        }
    }
}
```

## Partner - Parceiros

### Criar um parceiro (Create)
- **Endpoint**: ``POST`` - /api/partners

Parâmetros:
- title (varchar): Nome do parceiro.
- slogan (varchar): Frase de efeito do parceiro.
- icon (image): Icone/Logo do parceiro.
- image/images (image): Uma única image ou array de imagfem do parceiro.

*Exemplo de requisição:*
```json
{
  "data": {
    "title": "testeA",
    "slogan": "testeAB",
    "icon": {
      "url": "https://i.postimg.cc/J0VbLpVd/Captura-de-tela-2024-06-20-201729.png",
      "name": "nome_da_imagem.png",
      "alternativeText": "Texto alternativo da imagem",
      "caption": "Legenda da imagem"
    },
    "images": [
      {
        "url": "https://i.postimg.cc/J0VbLpVd/Captura-de-tela-2024-06-20-201729.png",
        "name": "nome_da_imagem.png",
        "alternativeText": "Texto alternativo da imagem",
        "caption": "Legenda da imagem"
      },
      {
        "url": "https://outra-url-da-imagem.com/imagem2.png",
        "name": "nome_da_imagem2.png",
        "alternativeText": "Texto alternativo da segunda imagem",
        "caption": "Legenda da segunda imagem"
      }
    ]
  }
}
```

### Encontrar todos os parceiros (Find)
- **Endpoint**: ``GET`` - /api/partners

Parâmetros: nenhum

*Exemplo de resposta:*
```json
{
    "data": [
        {
            "id": 1,
            "attributes": {
                "title": "testeA",
                "slogan": "testeAB",
                "createdAt": "2024-06-25T02:54:04.663Z",
                "updatedAt": "2024-06-25T02:54:04.663Z",
                "publishedAt": "2024-06-25T02:54:04.512Z"
            }
        }
    ]
}
```

### Encontrar um parceiro (FindOne)
- **Endpoint**: ``GET`` - api/partners/:id

*Exemplo de resposta:*
```json
{
    "data": {
        "id": 1,
        "attributes": {
            "title": "testeA",
            "slogan": "testeAB",
            "createdAt": "2024-06-25T02:54:04.663Z",
            "updatedAt": "2024-06-25T02:54:04.663Z",
            "publishedAt": "2024-06-25T02:54:04.512Z"
        }
    }
}
```

## Products - Produtos

### Criar um produto (Create)
- **Endpoint**: ``POST`` - api/products

Parâmetros:
- title (varchar): título do produto.
- price (decimal): preço do produto.
- description (varchar): descrição do produto.
- sold_out (boolean): produto está ou não esgotado.
- size (varchar): tamanho do produto.
- genre (varchar): genero do produto.
- color (varchar): cor do produto.
- image (image): imagem do produto.

*Exemplo de requisição:*
```json
{
  "data": {
    "title": "testeP",
    "price": 20.35,
    "description": "testeD",
    "sold_out": "True",
    "size": "M",
    "genre": "Masculino",
    "color": "cinza",
    "image": {
      "url": "https://i.postimg.cc/J0VbLpVd/Captura-de-tela-2024-06-20-201729.png",
      "name": "nome_da_imagem.png",
      "alternativeText": "Texto alternativo da imagem",
      "caption": "Legenda da imagem"
    }
  }
}
```

### Encontrar todos os produtos (Find)
- **Endpoint**: ``GET`` api/products

Parâmetros: nenhum

*Exmeplo de resposta:*
```json
{
    "data": [
        {
            "id": 2,
            "attributes": {
                "title": "testeP",
                "price": 20.35,
                "description": "testeD",
                "sold_out": true,
                "size": "M",
                "genre": "Masculino",
                "color": "cinza",
                "createdAt": "2024-06-25T03:11:59.604Z",
                "updatedAt": "2024-06-25T03:11:59.604Z",
                "publishedAt": "2024-06-25T03:11:59.457Z"
            }
        }
    ]
}
```

### Encontrar um produto (FindOne)
- **Endpoint**: ``GET`` api/products/:id

Parâmetros: nenhum

*Exmeplo de resposta:*
```json
{
    "data": {
        "id": 2,
        "attributes": {
            "title": "testeP",
            "price": 20.35,
            "description": "testeD",
            "sold_out": true,
            "size": "M",
            "genre": "Masculino",
            "color": "cinza",
            "createdAt": "2024-06-25T03:11:59.604Z",
            "updatedAt": "2024-06-25T03:11:59.604Z",
            "publishedAt": "2024-06-25T03:11:59.457Z"
        }
    }
}
```

## Specific-board - Diretoria especifica

### Criar uma diretoria (Create)
- **Endpoint**: ``POST`` - api/specific-boards

Parâmetros:
- name (varchar): nome da diretoria.
- about (varchar): descrição sobre a diretoria.

*Exemplo de requisição:*
```json
{
    "data":{
        "name": "teste",
        "about": "teste",
        // dados de outras entidades
        "result_id": ["1", "2", "3"],
        "board_id": "1",
        "member_id": "1",
        "planning_id": ["1", "4", "7"]
    }
}
```

### Encontrar todos as diretorias (Find)
- **Endpoint**: ``GET`` api/specific-boards

Parâmetros: nenhum

*Exmeplo de resposta:*
```json
{
    "data": [
        {
            "id": 1,
            "attributes": {
                "name": "teste",
                "about": "teste",
                "createdAt": "2024-06-27T02:24:03.044Z",
                "updatedAt": "2024-06-27T02:24:03.044Z",
                "publishedAt": "2024-06-27T02:24:03.040Z"
            }
        }
    ]
}
```

### Encontrar uma diretoria especifica (FindOne)
- **Endpoint**: ``GET`` api/specific-boards/:id

Parâmetros: nenhum

*Exmeplo de resposta:*
```json
{
    "data": {
        "id": 1,
        "attributes": {
            "name": "teste",
            "about": "teste",
            "createdAt": "2024-06-27T02:24:03.044Z",
            "updatedAt": "2024-06-27T02:24:03.044Z",
            "publishedAt": "2024-06-27T02:24:03.040Z"
        }
    }
}
```