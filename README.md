# Teste Prático Mobile

Este é um projeto Next.js configurado com create-next-app.  
Abaixo, segue um guia detalhado de como executar e testar o projeto em diferentes ambientes, incluindo Docker.

## Sumário

- **1. Tecnologias e Pré-requisitos**
- **2. Instalação**
- **3. Executando o Projeto**
  - Ambiente de Desenvolvimento
  - Ambiente de Produção
- **4. Executando os Testes**
- **5. Executando via Docker**
- **6. Estrutura de Pastas**
- **7. Outras Informações**

---

## 1. Tecnologias e Pré-requisitos

- Node.js (16 ou superior)
- npm, yarn ou pnpm para instalar dependências
- Docker (opcional) caso deseje executar via contêiner
- JSON Server incluso como dependência, rodando em http://localhost:3001

---

## 2. Instalação

1. Clone o repositório.
2. Entre na pasta do projeto.
3. Instale as dependências usando npm, yarn ou pnpm (conforme sua preferência).

---

## 3. Executando o Projeto

### Ambiente de Desenvolvimento

- Execute o servidor de desenvolvimento Next.js e o JSON Server em paralelo (porta 3001):
  - npm run dev
  - yarn dev
  - pnpm dev

A aplicação estará disponível em http://localhost:3000  
A API JSON Server estará em http://localhost:3001

### Ambiente de Produção

1. Gere o build:
   - npm run build
2. Inicie em modo produção:
   - npm run start

Este comando executa Next.js na porta 3000 e o JSON Server na 3001.

---

## 4. Executando os Testes

- Executar testes sem cobertura:

  - npm run test

- Executar testes em modo watch:

  - npm run test:watch

- Gerar relatório de cobertura:

  - npm run test:coverage

- Limpar cache dos testes:
  - npm run test:clear

---

## 5. Executando via Docker

Há vários scripts para gerenciar contêineres:

- docker:build: gera a imagem local teste-pratico-mobile
- docker:run: executa a imagem, expondo portas 3000 (aplicação) e 3001 (JSON Server)
- docker:dev: utiliza docker-compose para subir o ambiente em modo desenvolvimento
- docker:stop: derruba os contêineres criados
- docker:clean: remove contêineres, volumes e redes que não estejam em uso (pode ser destrutivo)
- docker:logs: mostra os logs em tempo real dos contêineres em execução

Exemplo de uso:

1. Gera a imagem:
   - npm run docker:build
2. Executa a imagem localmente:
   - npm run docker:run

---

## 6. Estrutura de Pastas

.
├─ .husky  
├─ .next  
├─ coverage  
├─ db  
│ └─ db.json  
├─ node_modules  
├─ public  
├─ src  
│ └─ …  
├─ .env  
├─ .env.local  
├─ docker-compose.yml  
├─ Dockerfile  
├─ jest.config.ts  
├─ package.json  
├─ tsconfig.json  
└─ etc.

O arquivo db.json em db é consumido pelo JSON Server em http://localhost:3001

---

## 7. Outras Informações

- Para variáveis de ambiente, utilize os arquivos .env, .env.local e outros
- O projeto utiliza next/font para otimizar fontes e tailwind para estilos
- Em caso de dúvidas ou contribuições, abra Issues ou Pull Requests
- Consulte a documentação do Next.js para mais detalhes em https://nextjs.org/docs
