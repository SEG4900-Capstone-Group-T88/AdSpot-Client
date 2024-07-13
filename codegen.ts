import {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'https://localhost:8081',
    documents: ['src/**/*.tsx'],
    ignoreNoDocuments: true,
    generates: {
        './src/gql/': {
            preset: 'client',
            plugins: [],
        },
    },
    hooks: {
        afterAllFileWrite: ['prettier src/gql --write'],
    },
}

export default config
