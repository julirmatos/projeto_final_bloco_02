<p align="center">
  <a href="https://brazil.generation.org/">
    <img
      src="https://brazil.generation.org/wp-content/uploads/2025/07/Generation_BRASIL_logo_NEW-BLUE.png"
      width="120"
      alt="Generation logo"
    />
  </a>
</p>

## 

# 🏥 Projeto Final Bloco 02 — Backend Farmácia

## 📌 Descrição Geral

Este projeto consiste no desenvolvimento de uma ​**API Backend para um sistema de Farmácia**​, construída com ​**NestJS**​, com foco na manipulação de ​**Categorias**​, **Produtos** e ​**Usuários**​. O sistema foi desenvolvido seguindo boas práticas de arquitetura, versionamento em branches e uso de ORM para persistência de dados.

O objetivo é atender às necessidades de uma empresa do setor farmacêutico, oferecendo uma base sólida para gerenciamento de produtos classificados por categoria, com possibilidade de evolução futura para vendas, estoque e autenticação.

---

## 🎯 Objetivo do Projeto

Desenvolver um backend capaz de:

* Cadastrar, listar, atualizar e excluir ​**Categorias**​;
* Cadastrar, listar, atualizar e excluir ​**Produtos**​, relacionados às categorias;
* Cadastrar, listar, atualizar e excluir ​**Usuários**​;
* Aplicar corretamente conceitos de ​**CRUD**​, ​**relacionamento entre entidades**​, ​**NestJS**​, **TypeORM** e ​**MySQL**​.



---

## 🚀 Como Instalar e Rodar o Projeto



### 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

* **Node.js** (versão 18 ou superior)
* **npm**
* **MySQL**
* **Git**
* **Insomnia** (opcional, para testes da API)

### 📥 Clonar o repositório

git clone https://github.com/seu-usuario/projeto_final_bloco_02.git
cd projeto_final_bloco_02

📦 Instalar as dependências

npm install

🌐 Criar Banco de Dados

Create Database db_farmacia;

▶️ Rodar o projeto em modo desenvolvimento
npm run start:dev

---

## 📂 Estrutura do Projeto

```
src/
 ├── categoria/
 │   ├── controllers/
 │   ├── services/
 │   ├── entities/
 │   └── categoria.module.ts
 ├── produto/
 │   ├── controllers/
 │   ├── services/
 │   ├── entities/
 │   └── produto.module.ts
 ├── usuario/
 │   ├── controllers/
 │   ├── services/
 │   ├── entities/
 │   └── usuario.module.ts
 ├── app.module.ts
 └── main.ts
```

---

## 🧩 Etapas do Projeto

### 🔹 Primeira Etapa — Configuração do Projeto

* Criação do repositório `projeto_final_bloco_02` no GitHub;
* Criação do projeto NestJS no VSCode;
* Conexão com o repositório GitHub;
* Criação da branch `config`;
* Instalação das dependências necessárias;
* Configuração do banco de dados MySQL;
* Testes iniciais da aplicação.

---

### 🔹 Segunda Etapa — CRUD de Categoria

* Criação da branch `crud-categoria`;
* Implementação do CRUD completo de **Categoria** (6 métodos);
* Entidade sem relacionamento;
* Testes completos via Insomnia;
* Atualização da branch no GitHub.

**Métodos implementados:**

* Criar categoria
* Listar categorias
* Buscar categoria por ID
* Buscar categoria por nome
* Atualizar categoria
* Deletar categoria

---

### 🔹 Terceira Etapa — CRUD de Produto

* Criação da branch `crud-produto`;
* Implementação do CRUD completo de **Produto** (6 métodos);
* Relacionamento **Produto → Categoria** (`ManyToOne`);
* Criação da tabela `tb_produto`;
* Geração automática de produtos por categoria;
* Testes completos via Insomnia;
* Atualização da branch no GitHub.

**Métodos implementados:**

* Criar produto
* Listar produtos
* Buscar produto por ID
* Buscar produtos por categoria
* Atualizar produto
* Deletar produto

---

## 👤 CRUD de Usuário

Foi implementado o CRUD completo de ​**Usuário**​, preparando o sistema para futuras funcionalidades como vendas e autenticação.

### Campos do Usuário:

* id
* nome
* email
* endereco
* telefone
* senha

### Usuários gerados automaticamente:

* Felipe — senha: `1234`
* Yuri — senha: `1234`
* Juliana — senha: `1234`

---

## 🔗 Endpoints Principais

### Categorias

* `POST /categorias`
* `GET /categorias`
* `GET /categorias/:id`
* `GET /categorias?nome=`
* `PATCH /categorias/:id`
* `DELETE /categorias/:id`

### Produtos

* `POST /produtos`
* `GET /produtos`
* `GET /produtos/:id`
* `GET /produtos/categoria/:categoriaId`
* `PATCH /produtos/:id`
* `DELETE /produtos/:id`

### Usuários

* `POST /usuarios`
* `GET /usuarios`
* `GET /usuarios/:id`
* `PATCH /usuarios/:id`
* `DELETE /usuarios/:id`

---

## 🧪 Testes

Todos os endpoints foram testados utilizando o ​**Insomnia**​, validando:

* Persistência dos dados no banco;
* Relacionamentos entre entidades;
* Retornos corretos de status HTTP;
* Tratamento de erros (404, validações).

---

## 🌱 Implementações Futuras (Extras)

* Autenticação e autorização;
* Relacionamento com vendas;
* Controle de estoque;
* Relatórios;
* Deploy em ambiente cloud.

---

## 📌 Considerações Finais

Este projeto foi desenvolvido utilizando conhecimentos adquiridos em ​**NestJS**​, ​**TypeORM**​, **MySQL** e ​**boas práticas de versionamento com Git**​.

O sistema está preparado para evolução e novas funcionalidades conforme as necessidades do negócio.

---

## 🛠️ Tecnologias Utilizadas  [![Tecnologias e Ferramentas utilizadas:](https://skillicons.dev/icons?i=windows,ts,nodejs,npm,nestjs,mysql,vscode,github,git)](https://skillicons.dev)

