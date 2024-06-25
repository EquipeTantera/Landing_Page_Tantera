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


