
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:9000/graphql",
  generates: {
    "gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
