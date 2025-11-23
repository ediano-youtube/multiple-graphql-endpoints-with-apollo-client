const defaultGenerates = {
  plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
  config: {
    reactApolloVersion: 3,
    withHooks: true,
  },
};

const defaultHooks = {
  afterAllFileWrite: ["eslint --fix"],
};

/** @type {import('graphql-config').IGraphQLConfig } */
export const codegen = {
  projects: {
    trevorblades: {
      overwrite: true,
      schema: "https://countries.trevorblades.com",
      documents: "./src/gql/trevorblades/**/*.gql",
      extensions: {
        codegen: {
          generates: {
            "./src/gql/trevorblades/generated.ts": {
              ...defaultGenerates,
            },
          },
        },
        hooks: {
          ...defaultHooks,
        },
      },
    },
    rickandmortyapi: {
      overwrite: true,
      schema: "https://rickandmortyapi.com/graphql",
      documents: "./src/gql/rickandmortyapi/**/*.gql",
      extensions: {
        codegen: {
          generates: {
            "./src/gql/rickandmortyapi/generated.ts": {
              ...defaultGenerates,
            },
          },
        },
        hooks: {
          ...defaultHooks,
        },
      },
    },
  },
};

export default codegen;
