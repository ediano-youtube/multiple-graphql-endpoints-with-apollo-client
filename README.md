# Multiple GraphQL Endpoints with Apollo Client

Este projeto demonstra como configurar e utilizar múltiplos endpoints GraphQL em uma aplicação Next.js usando Apollo Client e GraphQL Code Generator.

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd multiple-graphql-endpoints-with-apollo-client
```

2. Instale as dependências:

```bash
npm install
```

## 🛠️ Estrutura do Projeto

```
src/
├── app/                  # Páginas Next.js
│   ├── layout.tsx
│   └── page.tsx
├── components/           # Componentes React
│   └── Countries.tsx
├── gql/                  # Arquivos GraphQL
│   ├── generated.ts      # Código TypeScript gerado (único endpoint)
│   ├── queries/
│   │   └── countries.gql
│   ├── trevorblades/     # Queries para API de países
│   │   └── generated.ts
│   └── rickandmortyapi/  # Queries para API Rick and Morty
│       └── generated.ts
├── providers/            # Providers React
│   ├── index.ts
│   └── Providers.tsx
├── services/             # Configurações de serviços
│   └── apollo-client.ts
└── styles/
    └── globals.css
```

## ⚙️ Configuração

### Configuração Única (Single Endpoint)

O arquivo `codegen.yml` configura a geração de código para um único endpoint GraphQL:

```yaml
schema: "https://countries.trevorblades.com"
documents: "./src/gql/**/*.gql"
generates:
  ./src/gql/generated.ts:
    # ... configurações
```

### Configuração Múltipla (Multiple Endpoints)

O arquivo `codegen.config.ts` permite trabalhar com múltiplos endpoints GraphQL simultaneamente:

- **Trevor Blades Countries API**: `https://countries.trevorblades.com`
- **Rick and Morty API**: `https://rickandmortyapi.com/graphql`

## 📝 Como Usar

### 1. Criar Queries GraphQL

Crie seus arquivos `.gql` na pasta apropriada:

**Para endpoint único (`codegen.yml`):**

```
src/gql/queries/countries.gql
```

**Para múltiplos endpoints (`codegen.config.ts`):**

```
src/gql/trevorblades/countries.gql
src/gql/rickandmortyapi/characters.gql
```

Exemplo de query:

```graphql
query GetCountries {
  countries {
    capital
    code
    currency
    name
  }
}
```

### 2. Gerar Código TypeScript

**Para endpoint único:**

```bash
npm run codegen
```

**Para múltiplos endpoints:**

Gerar para todos os projetos:

```bash
npm run codegen-multi
```

Gerar para um projeto específico:

```bash
npm run codegen-multi -- --project trevorblades
npm run codegen-multi -- --project rickandmortyapi
```

Isso gerará hooks TypeScript tipados automaticamente em:

- `src/gql/generated.ts` (endpoint único)
- `src/gql/trevorblades/generated.ts` (múltiplos endpoints)
- `src/gql/rickandmortyapi/generated.ts` (múltiplos endpoints)

### 3. Configurar Apollo Client

Em `src/services/apollo-client.ts`:

```typescript
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const apolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({ uri: "https://countries.trevorblades.com" }),
    cache: new InMemoryCache(),
  });
};
```

### 4. Adicionar o Provider

Em `src/app/layout.tsx`, envolva sua aplicação com o `ApolloProvider`:

```typescript
import { Providers } from "../providers";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

### 5. Usar nos Componentes

```tsx
"use client";

import { useGetCountriesQuery } from "../gql/generated";

export const Countries = () => {
  const { data, loading, error } = useGetCountriesQuery();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;
  if (!data) return null;

  return (
    <div>
      <h2>Countries Component</h2>
      <pre>{JSON.stringify(data.countries[0], null, 2)}</pre>
    </div>
  );
};
```

## 🏃 Executar o Projeto

### Modo Desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

### Build de Produção

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## 📦 Scripts Disponíveis

| Script                  | Descrição                                                |
| ----------------------- | -------------------------------------------------------- |
| `npm run dev`           | Inicia o servidor de desenvolvimento                     |
| `npm run build`         | Cria build de produção                                   |
| `npm run start`         | Inicia servidor de produção                              |
| `npm run lint`          | Executa ESLint                                           |
| `npm run codegen`       | Gera código para endpoint único (codegen.yml)            |
| `npm run codegen-multi` | Gera código para múltiplos endpoints (codegen.config.ts) |

## 🔧 Dependências Principais

- **Next.js 16**: Framework React para produção
- **React 19**: Biblioteca para interfaces de usuário
- **Apollo Client 3.14**: Cliente GraphQL completo
- **GraphQL Code Generator**: Geração automática de código TypeScript
- **TypeScript 5**: Suporte a tipagem estática
- **Tailwind CSS 4**: Framework CSS utility-first

## 📖 Recursos Adicionais

- [Documentação Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)
- [Next.js Documentation](https://nextjs.org/docs)
- [Trevor Blades Countries API](https://countries.trevorblades.com/)
- [Rick and Morty API](https://rickandmortyapi.com/graphql)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.
