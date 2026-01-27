# Neon-Shop

## Visão geral

Este repositório contém a aplicação **Neon-Shop**, construída com **Next.js / React / TypeScript** e configurada com Vercel para deploy, servindo como base para uma loja virtual ou projeto web moderno. O projeto foi iniciado com o template oficial de **create-next-app** e está organizado com as pastas padrão do Next.js, incluindo `app`, `public`, `lib` e `types`. A estrutura permite rápida evolução para funcionalidades de e-commerce, catálogo de produtos, carrinho, páginas estáticas e dinâmicas, e integração com APIs ou backends.

## Tecnologias

Neste projeto foram utilizadas as seguintes tecnologias:

- Next.js (framework React para aplicações web com SSR/SSG)
- React
- TypeScript
- CSS (configurado via postcss)
- Vercel (para deploy)
- Estrutura padrão de pastas do Next.js

## Pré-requisitos

Para executar o projeto localmente é necessário:

- Node.js instalado (preferencialmente versão LTS atual)
- npm ou yarn como gerenciador de pacotes
- Editor de código com suporte a TypeScript

## Instalação

Para clonar e instalar as dependências execute:

git clone https://github.com/MatheusIzaquiel/neon-shop.git
cd neon-shop
npm install


Isso iniciará o servidor local. Normalmente a aplicação ficará disponível em `http://localhost:3000`, conforme o console log do Next.js.

## Estrutura do projeto

A estrutura principal do projeto inclui:

- **`app/`**: pasta principal do Next.js contendo páginas e layouts da aplicação;
- **`public/`**: diretório para arquivos estáticos (imagens, ícones, etc);
- **`lib/`**: código de bibliotecas ou helpers reutilizáveis;
- **`types/`**: definições de tipos TypeScript;
- **`next.config.ts`**: arquivo de configuração do Next.js;
- **`postcss.config.mjs`**: configuração de CSS;
- **`tsconfig.json`**: configuração do TypeScript.

## Funcionalidades esperadas

Como um projeto base de loja, a aplicação deve contemplar:

- Renderização de páginas estáticas e dinâmicas de produtos;
- Rotas configuradas com o sistema de navegação do Next.js;
- Organização de componentes React reutilizáveis;
- Estilização com PostCSS e suporte a CSS global ou modular;
- Possibilidade de integrar um backend ou API para catálogo, carrinho e checkout;
- Suporte a imagens otimizadas e rotas de assets estáticos.

## Adaptação e uso

Esta base é adequada para:

- Desenvolvimento de uma loja online completa com catálogo, filtros e carrinho;
- Páginas de portfólio ou landing pages com Next.js;
- Integração com headless CMS, APIs REST ou GraphQL;
- Evolução para projeto full-stack com API Routes ou backends externos.

## Deploy

A forma mais simples de fazer deploy é utilizando a plataforma **Vercel**, que possui integração nativa com Next.js. Para isso:

1. Conecte o repositório ao Vercel;
2. Configure as variáveis de ambiente (se necessário);
3. Faça o deploy automático após push.

O Vercel cuidará da build e do hosting sem configurações adicionais, por padrão.

## Testes e validação

O projeto não possui testes configurados por padrão, mas pode ser estendido com ferramentas como:

- Jest para testes unitários;
- React Testing Library para testes de componentes;
- Cypress para testes de ponta a ponta.

## Licença

Consulte o arquivo LICENSE no repositório para detalhes da licença aplicada ao projeto.

## Contribuição

Para contribuir com este projeto, abra issues ou pull requests no GitHub explicando melhorias, correções ou novas funcionalidades.

