import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:5433/appApi/graphql',
  documents: ['app/graphql/**/*.graphql'],
  generates: {
    './app/gql/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        rawRequest: true
      }
    }
  },
  hooks: { afterAllFileWrite: ['prettier --write'] }
};

export default config;
