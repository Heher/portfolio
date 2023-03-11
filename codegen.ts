import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:5433/api/graphql',
  documents: ['app/**/*.graphql'],
  generates: {
    './app/gql/': {
      preset: 'client'
    }
  },
  hooks: { afterAllFileWrite: ['prettier --write'] }
};
export default config;
