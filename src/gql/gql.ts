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
    '\n    query WhoAmI {\n        whoAmI {\n            ...UserContextInfo\n        }\n    }\n':
        types.WhoAmIDocument,
    '\n    query GetUserConnections($input: Int!) {\n        userById(userId: $input) {\n            connections {\n                platformId\n                handle\n            }\n        }\n    }\n':
        types.GetUserConnectionsDocument,
    '\n    query GetListingTypes {\n        platforms {\n            platformId\n            name\n            listingTypes {\n                name\n                listingTypeId\n            }\n        }\n    }\n':
        types.GetListingTypesDocument,
    '\n    mutation AddListing($input: AddListingInput!) {\n        addListing(input: $input) {\n            listing {\n                listingId\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n':
        types.AddListingDocument,
    '\n    fragment ListingSummary on Listing {\n        listingId\n        listingType {\n            platform {\n                platformId\n                name\n            }\n            name\n        }\n        price\n    }\n':
        types.ListingSummaryFragmentDoc,
    '\n    mutation OrderListing($input: OrderListingInput!) {\n        orderListing(input: $input) {\n            order {\n                orderId\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n':
        types.OrderListingDocument,
    '\n    mutation UpdateListingPrice($input: UpdateListingPriceInput!) {\n        updateListingPrice(input: $input) {\n            listing {\n                listingId\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n':
        types.UpdateListingPriceDocument,
    '\n    fragment OrderSummary on Order {\n        orderId\n        orderDate\n        orderStatusId\n        description\n        deliverable\n        user {\n            userId\n            firstName\n            lastName\n            email\n        }\n        listing {\n            price\n            user {\n                userId\n                firstName\n                lastName\n            }\n            listingType {\n                name\n                platform {\n                    name\n                }\n            }\n            connection {\n                handle\n            }\n        }\n    }\n':
        types.OrderSummaryFragmentDoc,
    '\n    mutation AcceptOrder($input: AcceptOrderInput!) {\n        acceptOrder(input: $input) {\n            order {\n                orderId\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n':
        types.AcceptOrderDocument,
    '\n    mutation RejectOrder($input: RejectOrderInput!) {\n        rejectOrder(input: $input) {\n            order {\n                orderId\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n':
        types.RejectOrderDocument,
    '\n    mutation SubmitDeliverable($input: SubmitDeliverableInput!) {\n        submitDeliverable(input: $input) {\n            order {\n                orderId\n                deliverable\n            }\n            errors {\n                ... on Error {\n                    __typename\n                    message\n                }\n            }\n        }\n    }\n':
        types.SubmitDeliverableDocument,
    '\n    query GetOrders(\n        $userId: Int!\n        $pov: OrderPov!\n        $status: OrderStatusEnum!\n        $first: Int\n        $after: String\n        $last: Int\n        $before: String\n        $order: [OrderSortInput!]\n    ) {\n        orders(\n            userId: $userId\n            pov: $pov\n            first: $first\n            after: $after\n            last: $last\n            before: $before\n            where: {orderStatusId: {eq: $status}}\n            order: $order\n        ) {\n            totalCount\n            pageInfo {\n                hasPreviousPage\n                hasNextPage\n                startCursor\n                endCursor\n            }\n            edges {\n                cursor\n                node {\n                    ...OrderSummary\n                }\n            }\n        }\n    }\n':
        types.GetOrdersDocument,
    '\n    subscription OnNewOrder($userId: Int!) {\n        onNewOrder(userId: $userId) {\n            orderId\n            userId\n            listingId\n        }\n    }\n':
        types.OnNewOrderDocument,
    '\n    fragment UserContextInfo on User {\n        userId\n        email\n        firstName\n        lastName\n    }\n':
        types.UserContextInfoFragmentDoc,
    '\n    query GetFlairs($userId: Int!) {\n        flairs(userId: $userId) {\n            userId\n            flairTitle\n        }\n    }\n':
        types.GetFlairsDocument,
    '\n    mutation AddFlair($input: AddFlairInput!) {\n        addFlair(input: $input) {\n            flair{\n            userId\n            flairTitle\n            }\n            errors{ \n            ... on Error{\n                message\n            }\n            }\n        }\n    }\n':
        types.AddFlairDocument,
    '\n    mutation DeleteFlair($input: DeleteFlairInput!) {\n        deleteFlair(input: $input) {\n            flair{\n            userId\n            flairTitle\n            }\n\n        }\n    }\n':
        types.DeleteFlairDocument,
    '\n    query GetUserListings($userId: Int!) {\n        userById(userId: $userId) {\n            listings {\n                ...ListingSummary\n            }\n        }\n    }\n':
        types.GetUserListingsDocument,
    '\n    subscription OnNewListing($userId: Int!) {\n        onNewListing(userId: $userId) {\n            listingId\n        }\n    }\n':
        types.OnNewListingDocument,
    '\n    fragment UserSummary on User {\n        userId\n        firstName\n        lastName\n        listings {\n            platform {\n                name\n            }\n            listingType {\n                name\n            }\n            price\n        }\n    }\n':
        types.UserSummaryFragmentDoc,
    '\n    mutation ExchangeInstagramAuthCodeForToken($input: ExchangeInstagramAuthCodeForTokenInput!) {\n        exchangeInstagramAuthCodeForToken(input: $input) {\n            connection {\n                userId\n                platformId\n                handle\n                # token\n                # tokenExpiration\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n':
        types.ExchangeInstagramAuthCodeForTokenDocument,
    '\n    fragment AccountConnected on Connection {\n        userId\n        platformId\n        handle\n    }\n':
        types.AccountConnectedFragmentDoc,
    '\n    subscription OnAccountConnected($userId: Int!) {\n        onAccountConnected(userId: $userId) {\n            ...AccountConnected\n        }\n    }\n':
        types.OnAccountConnectedDocument,
    '\n    mutation Login($input: LoginInput!) {\n        login(input: $input) {\n            user {\n                ...UserContextInfo\n            }\n            token\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n':
        types.LoginDocument,
    '\n    query GetUsers(\n        $filter: UserFilterInput\n        $first: Int\n        $after: String\n        $last: Int\n        $before: String\n    ) {\n        users(\n            where: $filter\n            first: $first\n            after: $after\n            last: $last\n            before: $before\n            order: [{firstName: ASC}]\n        ) {\n            totalCount\n            pageInfo {\n                hasPreviousPage\n                hasNextPage\n                startCursor\n                endCursor\n            }\n            edges {\n                cursor\n                node {\n                    ...UserSummary\n                }\n            }\n        }\n    }\n':
        types.GetUsersDocument,
    '\n    query GetPlatforms {\n        platforms {\n            platformId\n            name\n        }\n    }\n':
        types.GetPlatformsDocument,
    '\n    mutation RegisterUser($input: AddUserInput!) {\n        addUser(input: $input) {\n            user {\n                ...UserContextInfo\n            }\n            token\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n':
        types.RegisterUserDocument,
    '\n    fragment UserProfile on User {\n        userId\n        firstName\n        lastName\n        listings {\n            ...ListingSummary\n        }\n    }\n':
        types.UserProfileFragmentDoc,
    '\n    query GetUserById($userId: Int!) {\n        userById(userId: $userId) {\n            ...UserProfile\n        }\n    }\n':
        types.GetUserByIdDocument,
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
    source: '\n    query WhoAmI {\n        whoAmI {\n            ...UserContextInfo\n        }\n    }\n',
): (typeof documents)['\n    query WhoAmI {\n        whoAmI {\n            ...UserContextInfo\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    query GetUserConnections($input: Int!) {\n        userById(userId: $input) {\n            connections {\n                platformId\n                handle\n            }\n        }\n    }\n',
): (typeof documents)['\n    query GetUserConnections($input: Int!) {\n        userById(userId: $input) {\n            connections {\n                platformId\n                handle\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    query GetListingTypes {\n        platforms {\n            platformId\n            name\n            listingTypes {\n                name\n                listingTypeId\n            }\n        }\n    }\n',
): (typeof documents)['\n    query GetListingTypes {\n        platforms {\n            platformId\n            name\n            listingTypes {\n                name\n                listingTypeId\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    mutation AddListing($input: AddListingInput!) {\n        addListing(input: $input) {\n            listing {\n                listingId\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    mutation AddListing($input: AddListingInput!) {\n        addListing(input: $input) {\n            listing {\n                listingId\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment ListingSummary on Listing {\n        listingId\n        listingType {\n            platform {\n                platformId\n                name\n            }\n            name\n        }\n        price\n    }\n',
): (typeof documents)['\n    fragment ListingSummary on Listing {\n        listingId\n        listingType {\n            platform {\n                platformId\n                name\n            }\n            name\n        }\n        price\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    mutation OrderListing($input: OrderListingInput!) {\n        orderListing(input: $input) {\n            order {\n                orderId\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    mutation OrderListing($input: OrderListingInput!) {\n        orderListing(input: $input) {\n            order {\n                orderId\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    mutation UpdateListingPrice($input: UpdateListingPriceInput!) {\n        updateListingPrice(input: $input) {\n            listing {\n                listingId\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    mutation UpdateListingPrice($input: UpdateListingPriceInput!) {\n        updateListingPrice(input: $input) {\n            listing {\n                listingId\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment OrderSummary on Order {\n        orderId\n        orderDate\n        orderStatusId\n        description\n        deliverable\n        user {\n            userId\n            firstName\n            lastName\n            email\n        }\n        listing {\n            price\n            user {\n                userId\n                firstName\n                lastName\n            }\n            listingType {\n                name\n                platform {\n                    name\n                }\n            }\n            connection {\n                handle\n            }\n        }\n    }\n',
): (typeof documents)['\n    fragment OrderSummary on Order {\n        orderId\n        orderDate\n        orderStatusId\n        description\n        deliverable\n        user {\n            userId\n            firstName\n            lastName\n            email\n        }\n        listing {\n            price\n            user {\n                userId\n                firstName\n                lastName\n            }\n            listingType {\n                name\n                platform {\n                    name\n                }\n            }\n            connection {\n                handle\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    mutation AcceptOrder($input: AcceptOrderInput!) {\n        acceptOrder(input: $input) {\n            order {\n                orderId\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    mutation AcceptOrder($input: AcceptOrderInput!) {\n        acceptOrder(input: $input) {\n            order {\n                orderId\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    mutation RejectOrder($input: RejectOrderInput!) {\n        rejectOrder(input: $input) {\n            order {\n                orderId\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    mutation RejectOrder($input: RejectOrderInput!) {\n        rejectOrder(input: $input) {\n            order {\n                orderId\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    mutation SubmitDeliverable($input: SubmitDeliverableInput!) {\n        submitDeliverable(input: $input) {\n            order {\n                orderId\n                deliverable\n            }\n            errors {\n                ... on Error {\n                    __typename\n                    message\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    mutation SubmitDeliverable($input: SubmitDeliverableInput!) {\n        submitDeliverable(input: $input) {\n            order {\n                orderId\n                deliverable\n            }\n            errors {\n                ... on Error {\n                    __typename\n                    message\n                }\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    query GetOrders(\n        $userId: Int!\n        $pov: OrderPov!\n        $status: OrderStatusEnum!\n        $first: Int\n        $after: String\n        $last: Int\n        $before: String\n        $order: [OrderSortInput!]\n    ) {\n        orders(\n            userId: $userId\n            pov: $pov\n            first: $first\n            after: $after\n            last: $last\n            before: $before\n            where: {orderStatusId: {eq: $status}}\n            order: $order\n        ) {\n            totalCount\n            pageInfo {\n                hasPreviousPage\n                hasNextPage\n                startCursor\n                endCursor\n            }\n            edges {\n                cursor\n                node {\n                    ...OrderSummary\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    query GetOrders(\n        $userId: Int!\n        $pov: OrderPov!\n        $status: OrderStatusEnum!\n        $first: Int\n        $after: String\n        $last: Int\n        $before: String\n        $order: [OrderSortInput!]\n    ) {\n        orders(\n            userId: $userId\n            pov: $pov\n            first: $first\n            after: $after\n            last: $last\n            before: $before\n            where: {orderStatusId: {eq: $status}}\n            order: $order\n        ) {\n            totalCount\n            pageInfo {\n                hasPreviousPage\n                hasNextPage\n                startCursor\n                endCursor\n            }\n            edges {\n                cursor\n                node {\n                    ...OrderSummary\n                }\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    subscription OnNewOrder($userId: Int!) {\n        onNewOrder(userId: $userId) {\n            orderId\n            userId\n            listingId\n        }\n    }\n',
): (typeof documents)['\n    subscription OnNewOrder($userId: Int!) {\n        onNewOrder(userId: $userId) {\n            orderId\n            userId\n            listingId\n        }\n    }\n']
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
    source: '\n    query GetFlairs($userId: Int!) {\n        flairs(userId: $userId) {\n            userId\n            flairTitle\n        }\n    }\n',
): (typeof documents)['\n    query GetFlairs($userId: Int!) {\n        flairs(userId: $userId) {\n            userId\n            flairTitle\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    mutation AddFlair($input: AddFlairInput!) {\n        addFlair(input: $input) {\n            flair{\n            userId\n            flairTitle\n            }\n            errors{ \n            ... on Error{\n                message\n            }\n            }\n        }\n    }\n',
): (typeof documents)['\n    mutation AddFlair($input: AddFlairInput!) {\n        addFlair(input: $input) {\n            flair{\n            userId\n            flairTitle\n            }\n            errors{ \n            ... on Error{\n                message\n            }\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    mutation DeleteFlair($input: DeleteFlairInput!) {\n        deleteFlair(input: $input) {\n            flair{\n            userId\n            flairTitle\n            }\n\n        }\n    }\n',
): (typeof documents)['\n    mutation DeleteFlair($input: DeleteFlairInput!) {\n        deleteFlair(input: $input) {\n            flair{\n            userId\n            flairTitle\n            }\n\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    query GetUserListings($userId: Int!) {\n        userById(userId: $userId) {\n            listings {\n                ...ListingSummary\n            }\n        }\n    }\n',
): (typeof documents)['\n    query GetUserListings($userId: Int!) {\n        userById(userId: $userId) {\n            listings {\n                ...ListingSummary\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    subscription OnNewListing($userId: Int!) {\n        onNewListing(userId: $userId) {\n            listingId\n        }\n    }\n',
): (typeof documents)['\n    subscription OnNewListing($userId: Int!) {\n        onNewListing(userId: $userId) {\n            listingId\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment UserSummary on User {\n        userId\n        firstName\n        lastName\n        listings {\n            platform {\n                name\n            }\n            listingType {\n                name\n            }\n            price\n        }\n    }\n',
): (typeof documents)['\n    fragment UserSummary on User {\n        userId\n        firstName\n        lastName\n        listings {\n            platform {\n                name\n            }\n            listingType {\n                name\n            }\n            price\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    mutation ExchangeInstagramAuthCodeForToken($input: ExchangeInstagramAuthCodeForTokenInput!) {\n        exchangeInstagramAuthCodeForToken(input: $input) {\n            connection {\n                userId\n                platformId\n                handle\n                # token\n                # tokenExpiration\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    mutation ExchangeInstagramAuthCodeForToken($input: ExchangeInstagramAuthCodeForTokenInput!) {\n        exchangeInstagramAuthCodeForToken(input: $input) {\n            connection {\n                userId\n                platformId\n                handle\n                # token\n                # tokenExpiration\n            }\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment AccountConnected on Connection {\n        userId\n        platformId\n        handle\n    }\n',
): (typeof documents)['\n    fragment AccountConnected on Connection {\n        userId\n        platformId\n        handle\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    subscription OnAccountConnected($userId: Int!) {\n        onAccountConnected(userId: $userId) {\n            ...AccountConnected\n        }\n    }\n',
): (typeof documents)['\n    subscription OnAccountConnected($userId: Int!) {\n        onAccountConnected(userId: $userId) {\n            ...AccountConnected\n        }\n    }\n']
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
    source: '\n    query GetUsers(\n        $filter: UserFilterInput\n        $first: Int\n        $after: String\n        $last: Int\n        $before: String\n    ) {\n        users(\n            where: $filter\n            first: $first\n            after: $after\n            last: $last\n            before: $before\n            order: [{firstName: ASC}]\n        ) {\n            totalCount\n            pageInfo {\n                hasPreviousPage\n                hasNextPage\n                startCursor\n                endCursor\n            }\n            edges {\n                cursor\n                node {\n                    ...UserSummary\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    query GetUsers(\n        $filter: UserFilterInput\n        $first: Int\n        $after: String\n        $last: Int\n        $before: String\n    ) {\n        users(\n            where: $filter\n            first: $first\n            after: $after\n            last: $last\n            before: $before\n            order: [{firstName: ASC}]\n        ) {\n            totalCount\n            pageInfo {\n                hasPreviousPage\n                hasNextPage\n                startCursor\n                endCursor\n            }\n            edges {\n                cursor\n                node {\n                    ...UserSummary\n                }\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    query GetPlatforms {\n        platforms {\n            platformId\n            name\n        }\n    }\n',
): (typeof documents)['\n    query GetPlatforms {\n        platforms {\n            platformId\n            name\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    mutation RegisterUser($input: AddUserInput!) {\n        addUser(input: $input) {\n            user {\n                ...UserContextInfo\n            }\n            token\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n',
): (typeof documents)['\n    mutation RegisterUser($input: AddUserInput!) {\n        addUser(input: $input) {\n            user {\n                ...UserContextInfo\n            }\n            token\n            errors {\n                ... on Error {\n                    message\n                }\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment UserProfile on User {\n        userId\n        firstName\n        lastName\n        listings {\n            ...ListingSummary\n        }\n    }\n',
): (typeof documents)['\n    fragment UserProfile on User {\n        userId\n        firstName\n        lastName\n        listings {\n            ...ListingSummary\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    query GetUserById($userId: Int!) {\n        userById(userId: $userId) {\n            ...UserProfile\n        }\n    }\n',
): (typeof documents)['\n    query GetUserById($userId: Int!) {\n        userById(userId: $userId) {\n            ...UserProfile\n        }\n    }\n']

export function graphql(source: string) {
    return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
    TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
