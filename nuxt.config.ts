// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-graphql-client'],
  'graphql-client':{
    watch: true,
    autoImport: true,
    functionPrefix: 'Gql',
    documentPaths: ['./'],
    preferGETQueries: false,
    codegen: {
      silent: false,
      skipTypename: true,
      useTypeImports: true,
      dedupeFragments: true,
      onlyOperationTypes: true,
      avoidOptionals: false,
      disableOnBuild: false,
      maybeValue: 'T | null'
  }
},
  runtimeConfig: {
    public: {
      GQL_HOST: 'http://localhost:9000/graphql' // overwritten by process.env.GQL_HOST
    }
  }
})
