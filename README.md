
# Rocketnotes - Backend

Este projeto consiste no backend de uma aplicação de notas chamada Rocketnotes. Desenvolvi uma API RESTful que conecta a um banco de dados SQL para realizar operações CRUD completas. A API foi implementada com Node.js e utiliza o Knex para realizar as migrations e interagir com o banco de dados SQLite.

### Funcionalidades

- **Autenticação segura**: As senhas são criptografadas com bcrypt para garantir a segurança dos dados dos usuários.

- **Operações CRUD**: A API permite a criação, leitura, atualização e exclusão de notas e usuários.

- **Gestão de erros**: Implementação de lógica de tratamento de erros para fornecer feedback detalhado sobre o status das requisições.

### Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do JavaScript para construir a API.

- **Express.js**: Framework utilizado para simplificar a criação de rotas e o gerenciamento de middlewares.

- **Knex**: Utilizado para criação e gerenciamento de migrations, permitindo manipulação do banco de dados com SQLite.

- **SQLite**: Banco de dados utilizado para armazenamento das informações.

- **Bcrypt**: Biblioteca para hashing de senhas, garantindo a segurança dos dados sensíveis.

## Como Executar o Projeto


1. Clone este repositório:

```bash
  git clone https://github.com/mviniciussb/Rocketnotes--Backend.git
```

2. Instale as dependências:


```bash
npm install
```

3. Configure o banco de dados e execute as migrations:

```bash
npm migrate
```

4. Inicie o servidor:

```bash
npm start / npm run dev
```

### Contribuição

Sinta-se à vontade para sugerir melhorias ou abrir PRs com contribuições.
