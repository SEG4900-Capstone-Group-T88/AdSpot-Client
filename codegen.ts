import {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:8080',
    documents: ['src/**/*.tsx'],
    ignoreNoDocuments: true,
    generates: {
        './src/gql/': {
            preset: 'client',
            plugins: [],
        },
    },
    hooks: {
        afterAllFileWrite: ['prettier ./src --write'],
    },
}

export default config
