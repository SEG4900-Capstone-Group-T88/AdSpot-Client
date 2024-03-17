/* eslint-disable */
import * as types from './graphql'
import {TypedDocumentNode as DocumentNode} from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    '\n    fragment OrderSummary on Order {\n        orderId\n        orderDate\n        orderStatusId\n        listing {\n            price\n            user {\n                userId\n                email\n            }\n            listingType {\n                name\n                platform {\n                    name\n                }\n            }\n            connection {\n                handle\n            }\n        }\n    }\n':
        types.OrderSummaryFragmentDoc,
    '\n    fragment UserBasicInfo on User {\n        userId\n        email\n        firstName\n        lastName\n    }\n':
        types.UserBasicInfoFragmentDoc,
    '\n    query TestQuery($orderId: Int!) {\n        orderById(orderId: $orderId) {\n            ...OrderSummary\n        }\n    }\n':
        types.TestQueryDocument,
    '\n    mutation Login($input: LoginInput!) {\n        login(input: $input) {\n            user {\n                userId\n                email\n                firstName\n                lastName\n            }\n        }\n    }\n':
        types.LoginDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment OrderSummary on Order {\n        orderId\n        orderDate\n        orderStatusId\n        listing {\n            price\n            user {\n                userId\n                email\n            }\n            listingType {\n                name\n                platform {\n                    name\n                }\n            }\n            connection {\n                handle\n            }\n        }\n    }\n',
): (typeof documents)['\n    fragment OrderSummary on Order {\n        orderId\n        orderDate\n        orderStatusId\n        listing {\n            price\n            user {\n                userId\n                email\n            }\n            listingType {\n                name\n                platform {\n                    name\n                }\n            }\n            connection {\n                handle\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment UserBasicInfo on User {\n        userId\n        email\n        firstName\n        lastName\n    }\n',
): (typeof documents)['\n    fragment UserBasicInfo on User {\n        userId\n        email\n        firstName\n        lastName\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    query TestQuery($orderId: Int!) {\n        orderById(orderId: $orderId) {\n            ...OrderSummary\n        }\n    }\n',
): (typeof documents)['\n    query TestQuery($orderId: Int!) {\n        orderById(orderId: $orderId) {\n            ...OrderSummary\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    mutation Login($input: LoginInput!) {\n        login(input: $input) {\n            user {\n                userId\n                email\n                firstName\n                lastName\n            }\n        }\n    }\n',
): (typeof documents)['\n    mutation Login($input: LoginInput!) {\n        login(input: $input) {\n            user {\n                userId\n                email\n                firstName\n                lastName\n            }\n        }\n    }\n']

export function graphql(source: string) {
    return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
    TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
