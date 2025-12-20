# Multiple GraphQL Endpoints with Apollo Client

Este projeto demonstra como configurar e utilizar **múltiplos endpoints GraphQL** simultaneamente em uma aplicação **Next.js 16** usando **Apollo Client 3** com **GraphQL Code Generator** para tipagem automática.

## 🎯 Objetivo

O projeto mostra como consultar dados de 3 APIs GraphQL diferentes na mesma aplicação:

- **Trevor Blades Countries API** - Dados de países
- **Rick and Morty API** - Personagens e episódios
- **Catalysis Hub API** - Informações científicas

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

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

## 🗂️ Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx           # Layout raiz com Providers
│   └── page.tsx             # Página principal com 3 componentes
├── components/
│   ├── Countries.tsx        # Componente de países (Trevor Blades API)
│   ├── Episodes.tsx         # Componente de episódios (Rick and Morty API)
│   └── Information.tsx      # Componente de informações (Catalysis Hub API)
├── gql/
│   ├── trevorblades/
│   │   ├── queries/
│   │   │   └── countries.gql
│   │   └── generated.ts     # Hooks gerados automaticamente
│   ├── rickandmortyapi/
│   │   ├── queries/
│   │   │   └── episodes.gql
│   │   └── generated.ts
│   └── catalysishub/
│       ├── queries/
│       │   └── information.gql
│       └── generated.ts
├── providers/
│   ├── index.ts
│   └── Providers.tsx        # ApolloProvider configurado
└── services/
    └── apollo-client.ts     # Configuração multi-endpoint
```

## ⚙️ Configuração de Múltiplos Endpoints

### 1. GraphQL Code Generator (`codegen.config.ts`)

O projeto utiliza uma configuração modular que suporta 3 APIs diferentes:

```typescript
export const codegen = {
  projects: {
    trevorblades: {
      schema: "https://countries.trevorblades.com",
      documents: "./src/gql/trevorblades/**/*.gql",
      generates: "./src/gql/trevorblades/generated.ts",
    },
    rickandmortyapi: {
      schema: "https://rickandmortyapi.com/graphql",
      documents: "./src/gql/rickandmortyapi/**/*.gql",
      generates: "./src/gql/rickandmortyapi/generated.ts",
    },
    catalysishub: {
      schema: "https://api.catalysis-hub.org/graphql",
      documents: "./src/gql/catalysishub/**/*.gql",
      generates: "./src/gql/catalysishub/generated.ts",
    },
  },
};
```

### 2. Apollo Client com Link Splitting

O arquivo `src/services/apollo-client.ts` implementa um sistema de **roteamento de queries** usando `HttpLink.split`:

```typescript
const generatedLink = ({ apiName, uri }: GeneratedLink) => {
  const link = HttpLink.split((op) => {
    const context = op.getContext();
    return context.apiName === apiName || !context.apiName;
  }, new HttpLink({ uri }));
  return link;
};
```

Cada API tem seu próprio link configurado:

- `trevorbladesLink` → Trevor Blades Countries API
- `rickandmortyapiLink` → Rick and Morty API
- `catalysishubLink` → Catalysis Hub API

## 📝 Como Usar

### 1. Criar Queries GraphQL

Crie arquivos `.gql` na pasta correspondente a cada API:

**Exemplo: `src/gql/trevorblades/queries/countries.gql`**

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

**Exemplo: `src/gql/rickandmortyapi/queries/episodes.gql`**

```graphql
query GetEpisodes {
  episodes {
    results {
      id
      name
      episode
      characters {
        id
        name
        status
      }
    }
  }
}
```

**Exemplo: `src/gql/catalysishub/queries/information.gql`**

```graphql
query GetInformation {
  information {
    edges {
      node {
        name
        value
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
```

### 2. Gerar Código TypeScript

**Gerar para todos os endpoints:**

```bash
npm run codegen
```

**Gerar para um endpoint específico:**

```bash
npm run codegen -- --project trevorblades
npm run codegen -- --project rickandmortyapi
npm run codegen -- --project catalysishub
```

Isso gera automaticamente hooks TypeScript tipados em cada pasta `/generated.ts`.

### 3. Usar nos Componentes

**Importante:** Para usar múltiplos endpoints, você deve especificar o `apiName` no contexto da query.

**Exemplo 1: Countries (Trevor Blades API)**

```tsx
"use client";
import { useGetCountriesQuery } from "../gql/trevorblades/generated";

export const Countries = () => {
  const { data } = useGetCountriesQuery({});

  if (!data) return null;

  return (
    <div>
      <h2>Countries Component</h2>
      <pre>{JSON.stringify(data.countries[0], null, 2)}</pre>
    </div>
  );
};
```

**Exemplo 2: Episodes (Rick and Morty API)**

```tsx
"use client";
import { useGetEpisodesQuery } from "../gql/rickandmortyapi/generated";

export const Episodes = () => {
  const { data } = useGetEpisodesQuery({
    context: {
      apiName: "rickandmortyapi",
    },
  });

  return (
    <div>
      Episodes Component
      <pre>
        {JSON.stringify(data?.episodes?.results?.[0]?.characters[0], null, 2)}
      </pre>
    </div>
  );
};
```

**Exemplo 3: Information (Catalysis Hub API)**

```tsx
"use client";
import { useGetInformationQuery } from "../gql/catalysishub/generated";

export const Information = () => {
  const { data } = useGetInformationQuery({
    context: {
      apiName: "catalysishub",
    },
  });

  return (
    <div>
      Information Component
      <pre>{JSON.stringify(data?.information, null, 2)}</pre>
    </div>
  );
};
```

### 4. Configurar o Provider

O `ApolloProvider` já está configurado no `layout.tsx`:

```tsx
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

| Script            | Descrição                                      |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Inicia servidor de desenvolvimento             |
| `npm run build`   | Cria build de produção                         |
| `npm run start`   | Inicia servidor de produção                    |
| `npm run lint`    | Executa ESLint                                 |
| `npm run codegen` | Gera código TypeScript para todos os endpoints |

## 🔑 Conceitos Chave

### Context API do Apollo Client

Para direcionar queries para diferentes endpoints, use o parâmetro `context`:

```tsx
const { data } = useQuery({
  context: {
    apiName: "rickandmortyapi", // Nome do endpoint
  },
});
```

### HttpLink.split()

O método `split()` funciona como um router que decide qual endpoint usar baseado no contexto da operação.

### Organização por API

Cada API tem sua própria pasta com:

- Queries GraphQL (`.gql`)
- Código gerado (`generated.ts`)
- Hooks TypeScript tipados

## 🔧 Dependências Principais

- **Next.js 16** - Framework React
- **React 19** - Biblioteca UI
- **Apollo Client 3.14** - Cliente GraphQL
- **GraphQL Code Generator 6** - Geração de código
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 4** - Estilização

## 📖 APIs Utilizadas

| API            | Endpoint                                | Descrição                     |
| -------------- | --------------------------------------- | ----------------------------- |
| Trevor Blades  | `https://countries.trevorblades.com`    | Dados de países do mundo      |
| Rick and Morty | `https://rickandmortyapi.com/graphql`   | Personagens e episódios       |
| Catalysis Hub  | `https://api.catalysis-hub.org/graphql` | Dados científicos de catálise |

## 🎓 Aprendizados

Este projeto demonstra:

- ✅ Configuração de múltiplos endpoints GraphQL
- ✅ Roteamento inteligente de queries com Apollo Client
- ✅ Geração automática de tipos TypeScript
- ✅ Organização modular de código GraphQL
- ✅ Uso de Context API para seleção de endpoints
- ✅ Integração com Next.js App Router

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

---

**Autor:** Ediano Silva Santos
