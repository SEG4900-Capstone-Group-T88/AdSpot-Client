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
    '\n    query GetOrdersByStatus(\n        $userId: Int!\n        $status: OrderStatusEnum!\n        $first: Int\n        $after: String\n        $last: Int\n        $before: String\n    ) {\n        ordersByStatus(\n            userId: $userId\n            status: $status\n            first: $first\n            after: $after\n            last: $last\n            before: $before\n            order: [{orderDate: ASC}]\n        ) {\n            totalCount\n            pageInfo {\n                hasPreviousPage\n                hasNextPage\n                startCursor\n                endCursor\n            }\n            edges {\n                cursor\n                node {\n                    ...OrderSummary\n                }\n            }\n        }\n    }\n':
        types.GetOrdersByStatusDocument,
    '\n    query GetRequestsByStatus(\n        $userId: Int!\n        $status: OrderStatusEnum!\n        $first: Int\n        $after: String\n        $last: Int\n        $before: String\n    ) {\n        requestsByStatus(\n            userId: $userId\n            status: $status\n            first: $first\n            after: $after\n            last: $last\n            before: $before\n            order: [{orderDate: ASC}]\n        ) {\n            totalCount\n            pageInfo {\n                hasPreviousPage\n                hasNextPage\n                startCursor\n                endCursor\n            }\n            edges {\n                cursor\n                node {\n                    ...OrderSummary\n                }\n            }\n        }\n    }\n':
        types.GetRequestsByStatusDocument,
    '\n    fragment UserContextInfo on User {\n        userId\n        email\n        firstName\n        lastName\n    }\n':
        types.UserContextInfoFragmentDoc,
    '\n    mutation Login($input: LoginInput!) {\n        login(input: $input) {\n            user {\n                ...UserContextInfo\n            }\n            token\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n':
        types.LoginDocument,
    '\n    mutation RegisterUser($input: AddUserInput!) {\n        addUser(input: $input) {\n            user {\n                ...UserContextInfo\n            }\n            token\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n':
        types.RegisterUserDocument,
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
    source: '\n    query GetOrdersByStatus(\n        $userId: Int!\n        $status: OrderStatusEnum!\n        $first: Int\n        $after: String\n        $last: Int\n        $before: String\n    ) {\n        ordersByStatus(\n            userId: $userId\n            status: $status\n            first: $first\n            after: $after\n            last: $last\n            before: $before\n            order: [{orderDate: ASC}]\n        ) {\n            totalCount\n            pageInfo {\n                hasPreviousPage\n                hasNextPage\n                startCursor\n                endCursor\n            }\n            edges {\n                cursor\n                node {\n                    ...OrderSummary\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    query GetOrdersByStatus(\n        $userId: Int!\n        $status: OrderStatusEnum!\n        $first: Int\n        $after: String\n        $last: Int\n        $before: String\n    ) {\n        ordersByStatus(\n            userId: $userId\n            status: $status\n            first: $first\n            after: $after\n            last: $last\n            before: $before\n            order: [{orderDate: ASC}]\n        ) {\n            totalCount\n            pageInfo {\n                hasPreviousPage\n                hasNextPage\n                startCursor\n                endCursor\n            }\n            edges {\n                cursor\n                node {\n                    ...OrderSummary\n                }\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    query GetRequestsByStatus(\n        $userId: Int!\n        $status: OrderStatusEnum!\n        $first: Int\n        $after: String\n        $last: Int\n        $before: String\n    ) {\n        requestsByStatus(\n            userId: $userId\n            status: $status\n            first: $first\n            after: $after\n            last: $last\n            before: $before\n            order: [{orderDate: ASC}]\n        ) {\n            totalCount\n            pageInfo {\n                hasPreviousPage\n                hasNextPage\n                startCursor\n                endCursor\n            }\n            edges {\n                cursor\n                node {\n                    ...OrderSummary\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    query GetRequestsByStatus(\n        $userId: Int!\n        $status: OrderStatusEnum!\n        $first: Int\n        $after: String\n        $last: Int\n        $before: String\n    ) {\n        requestsByStatus(\n            userId: $userId\n            status: $status\n            first: $first\n            after: $after\n            last: $last\n            before: $before\n            order: [{orderDate: ASC}]\n        ) {\n            totalCount\n            pageInfo {\n                hasPreviousPage\n                hasNextPage\n                startCursor\n                endCursor\n            }\n            edges {\n                cursor\n                node {\n                    ...OrderSummary\n                }\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment UserContextInfo on User {\n        userId\n        email\n        firstName\n        lastName\n    }\n',
): (typeof documents)['\n    fragment UserContextInfo on User {\n        userId\n        email\n        firstName\n        lastName\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    mutation Login($input: LoginInput!) {\n        login(input: $input) {\n            user {\n                ...UserContextInfo\n            }\n            token\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    mutation Login($input: LoginInput!) {\n        login(input: $input) {\n            user {\n                ...UserContextInfo\n            }\n            token\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    mutation RegisterUser($input: AddUserInput!) {\n        addUser(input: $input) {\n            user {\n                ...UserContextInfo\n            }\n            token\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    mutation RegisterUser($input: AddUserInput!) {\n        addUser(input: $input) {\n            user {\n                ...UserContextInfo\n            }\n            token\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n']

export function graphql(source: string) {
    return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
    TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
