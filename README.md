# 🦸 Be The Hero - Semana OmniStack 11.0

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

O **Be The Hero** é uma aplicação desenvolvida para conectar pessoas que desejam fazer contribuições financeiras a casos específicos de ONGs (Organizações Não Governamentais).

Este projeto foi o resultado da **Semana OmniStack 11.0**, um evento intensivo promovido pela **Rocketseat**, focado em construir uma aplicação completa do zero ao deploy em apenas uma semana.

## 📱 Sobre o Projeto

A plataforma consiste em três frentes:
1.  **Backend (API):** Construído em Node.js, servindo dados tanto para a web quanto para o mobile.
2.  **Frontend (Web):** Criado em React, onde as ONGs podem se cadastrar e publicar seus "casos" (pedidos de ajuda).
3.  **Mobile:** Desenvolvido com React Native (Expo), onde os heróis (usuários) podem navegar pelos casos e entrar em contato com a ONG via WhatsApp ou E-mail.

## 🛠️ Tecnologias Principais

-   **Node.js** com framework **Express**
-   **Knex.js** para consultas SQL e migrações
-   **SQLite** como banco de dados (fácil portabilidade)
-   **React JS** (Hooks, Router)
-   **React Native** (Expo, Stack Navigation)
-   **Intl** para formatação de moeda (BRL)

## 🚀 Como Executar

### Pré-requisitos
* Node.js instalado
* Gerenciador de pacotes (NPM ou Yarn)

### Instalação
```bash
# Clone o repositório
git clone [https://github.com/guicpaiva/be-the-hero.git](https://github.com/guicpaiva/be-the-hero.git)

# Acesse a pasta do servidor e instale as dependências
cd be-the-hero/backend
npm install
npm start # A API rodará na porta 3333

# Acesse a pasta do frontend e instale as dependências
cd ../frontend
npm install
npm start

# Acesse a pasta mobile e instale as dependências
cd ../mobile
npm install
npm start # Siga as instruções do Expo para rodar no celular
```

📚 Créditos e Referências
Este projeto foi desenvolvido seguindo as aulas da Semana OmniStack 11.0 da Rocketseat, ministradas por Diego Fernandes.

O evento foi fundamental para consolidar conceitos de APIs REST, integração entre plataformas e o uso do ecossistema JavaScript moderno.
