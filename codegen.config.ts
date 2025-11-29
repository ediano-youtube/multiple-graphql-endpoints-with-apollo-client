const defaultPlugins = [
  "typescript",
  "typescript-operations",
  "typescript-react-apollo",
];

const defaultConfig = {
  reactApolloVersion: 3,
  withHooks: true,
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
              plugins: defaultPlugins,
              config: defaultConfig,
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
              plugins: defaultPlugins,
              config: defaultConfig,
            },
          },
        },
        hooks: {
          ...defaultHooks,
        },
      },
    },
    catalysishub: {
      overwrite: true,
      schema: "https://api.catalysis-hub.org/graphql",
      documents: "./src/gql/catalysishub/**/*.gql",
      extensions: {
        codegen: {
          generates: {
            "./src/gql/catalysishub/generated.ts": {
              plugins: defaultPlugins,
              config: defaultConfig,
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
