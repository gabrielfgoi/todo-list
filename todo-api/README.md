
# Todo List API

## Descrição

Este projeto é uma API simples de gerenciamento de tarefas, que permite criar, listar, atualizar e excluir tarefas. Foi desenvolvido utilizando Node.js e DynamoDB, com o objetivo de aprender e aplicar práticas de desenvolvimento backend com AWS.

## Motivação

Escolhi utilizar DynamoDB pela sua escalabilidade e integração fácil com outros serviços da AWS. Node.js foi escolhido pela sua simplicidade e por ser amplamente utilizado em desenvolvimento backend.

## Recursos

- **Criar uma nova tarefa:** `POST /tasks`
- **Listar todas as tarefas:** `GET /tasks`
- **Obter uma tarefa específica:** `GET /tasks/:id`
- **Atualizar uma tarefa:** `PUT /tasks/:id`
- **Deletar uma tarefa:** `DELETE /tasks/:id`

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript para desenvolvimento backend.
- **Express.js:** Framework para Node.js que facilita a criação de APIs.
- **AWS SDK para DynamoDB:** Interface para interagir com o banco de dados DynamoDB da AWS.
- **UUID:** Biblioteca para gerar identificadores únicos.

## Configuração

### 1. Clonar o Repositório
git clone https://github.com/gabrielfgoi/todo-api

### 2. Instalar Dependências
npm install
### 3. Configurar ambiente
AWS_REGION=us-east-2
TABLE_NAME=tasks
PORT=3000
