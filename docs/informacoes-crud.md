# Informações sobre o Crud

Esta documentação tem como objetivo descrever os endpoints necessários para a landing page da atlética Tantera. Serão documentados os endpoints CRUD (Create, Read, Update, Delete) para as entidades. Cada endpoint inclui informações sobre os métodos ``HTTP`` suportados, parâmetros de entrada, formato das requisições e respostas, bem como exemplos de uso.

Os testes estão realizados pelo `Postman`, nele contém exemplos já prontos para testes.
link do postman: [Testes](https://tantech-6301.postman.co/workspace/Tantech-Workspace~bc7d8631-5e21-46d7-babb-0b5ffdc0c154/collection/26953606-07ebf036-9a91-4880-bead-9bf5af1ed9a6?action=share&creator=26953606)

Foram criados no modo `public`, ou seja, qualquer pessoa pode acessar esses endpoints sem autenticação, mas com certas restrições nas operações permitidas. Nesse caso, os endpoints têm as seguintes permissões:

- ``find``: Permite listar todas as entradas de uma entidade.
- ``findOne``: Permite buscar uma entrada específica por ID.
- ``create``: Permite criar uma nova entrada.


## Board - gestão/diretoria

### Criar Gestão (Create)
Criar uma nova gestão
- **Endpoint**: ``POST`` -  /api/boards

Parâmetros:
- president_id (integer): ID do presidente.
- description (string): Descrição da gestão.
- year (string): Ano da gestão.
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