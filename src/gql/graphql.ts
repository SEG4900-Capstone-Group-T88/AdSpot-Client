/* eslint-disable */
import {TypedDocumentNode as DocumentNode} from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]?: Maybe<T[SubKey]>}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]: Maybe<T[SubKey]>}
export type MakeEmpty<T extends {[key: string]: unknown}, K extends keyof T> = {[_ in K]?: never}
export type Incremental<T> =
    | T
    | {[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {input: string; output: string}
    String: {input: string; output: string}
    Boolean: {input: boolean; output: boolean}
    Int: {input: number; output: number}
    Float: {input: number; output: number}
    /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
    DateTime: {input: any; output: any}
    /** The built-in `Decimal` scalar type. */
    Decimal: {input: any; output: any}
}

export type AddConnectionInput = {
    accountHandle: Scalars['String']['input']
    apiToken: Scalars['String']['input']
    platformId: Scalars['Int']['input']
    userId: Scalars['Int']['input']
}

export type AddConnectionPayload = {
    __typename?: 'AddConnectionPayload'
    connection?: Maybe<Array<Connection>>
}

export type AddListingInput = {
    listingTypeId: Scalars['Int']['input']
    platformId: Scalars['Int']['input']
    price: Scalars['Decimal']['input']
    userId: Scalars['Int']['input']
}

export type AddListingPayload = {
    __typename?: 'AddListingPayload'
    listing?: Maybe<Array<Listing>>
}

export type AddUserError = UserNotFoundError

export type AddUserInput = {
    email: Scalars['String']['input']
    firstName: Scalars['String']['input']
    lastName: Scalars['String']['input']
    password: Scalars['String']['input']
}

export type AddUserPayload = {
    __typename?: 'AddUserPayload'
    errors?: Maybe<Array<AddUserError>>
    token?: Maybe<Scalars['String']['output']>
    user?: Maybe<User>
}

export enum ApplyPolicy {
    AfterResolver = 'AFTER_RESOLVER',
    BeforeResolver = 'BEFORE_RESOLVER',
    Validation = 'VALIDATION',
}

export type CannotOrderOwnListingError = Error & {
    __typename?: 'CannotOrderOwnListingError'
    message: Scalars['String']['output']
}

export type Connection = {
    __typename?: 'Connection'
    handle: Scalars['String']['output']
    platform: Platform
    platformId: Scalars['Int']['output']
    token: Scalars['String']['output']
    user: User
    userId: Scalars['Int']['output']
}

export type ConnectionFilterInput = {
    and?: InputMaybe<Array<ConnectionFilterInput>>
    handle?: InputMaybe<StringOperationFilterInput>
    or?: InputMaybe<Array<ConnectionFilterInput>>
    platform?: InputMaybe<PlatformFilterInput>
    platformId?: InputMaybe<IntOperationFilterInput>
    token?: InputMaybe<StringOperationFilterInput>
    user?: InputMaybe<UserFilterInput>
    userId?: InputMaybe<IntOperationFilterInput>
}

export type ConnectionSortInput = {
    handle?: InputMaybe<SortEnumType>
    platform?: InputMaybe<PlatformSortInput>
    platformId?: InputMaybe<SortEnumType>
    token?: InputMaybe<SortEnumType>
    user?: InputMaybe<UserSortInput>
    userId?: InputMaybe<SortEnumType>
}

export type DateTimeOperationFilterInput = {
    eq?: InputMaybe<Scalars['DateTime']['input']>
    gt?: InputMaybe<Scalars['DateTime']['input']>
    gte?: InputMaybe<Scalars['DateTime']['input']>
    in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
    lt?: InputMaybe<Scalars['DateTime']['input']>
    lte?: InputMaybe<Scalars['DateTime']['input']>
    neq?: InputMaybe<Scalars['DateTime']['input']>
    ngt?: InputMaybe<Scalars['DateTime']['input']>
    ngte?: InputMaybe<Scalars['DateTime']['input']>
    nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
    nlt?: InputMaybe<Scalars['DateTime']['input']>
    nlte?: InputMaybe<Scalars['DateTime']['input']>
}

export type DecimalOperationFilterInput = {
    eq?: InputMaybe<Scalars['Decimal']['input']>
    gt?: InputMaybe<Scalars['Decimal']['input']>
    gte?: InputMaybe<Scalars['Decimal']['input']>
    in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>
    lt?: InputMaybe<Scalars['Decimal']['input']>
    lte?: InputMaybe<Scalars['Decimal']['input']>
    neq?: InputMaybe<Scalars['Decimal']['input']>
    ngt?: InputMaybe<Scalars['Decimal']['input']>
    ngte?: InputMaybe<Scalars['Decimal']['input']>
    nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>
    nlt?: InputMaybe<Scalars['Decimal']['input']>
    nlte?: InputMaybe<Scalars['Decimal']['input']>
}

export type DeleteUserInput = {
    userId: Scalars['Int']['input']
}

export type DeleteUserPayload = {
    __typename?: 'DeleteUserPayload'
    user?: Maybe<User>
}

export type Error = {
    message: Scalars['String']['output']
}

export type FloatOperationFilterInput = {
    eq?: InputMaybe<Scalars['Float']['input']>
    gt?: InputMaybe<Scalars['Float']['input']>
    gte?: InputMaybe<Scalars['Float']['input']>
    in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
    lt?: InputMaybe<Scalars['Float']['input']>
    lte?: InputMaybe<Scalars['Float']['input']>
    neq?: InputMaybe<Scalars['Float']['input']>
    ngt?: InputMaybe<Scalars['Float']['input']>
    ngte?: InputMaybe<Scalars['Float']['input']>
    nin?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
    nlt?: InputMaybe<Scalars['Float']['input']>
    nlte?: InputMaybe<Scalars['Float']['input']>
}

export type IntOperationFilterInput = {
    eq?: InputMaybe<Scalars['Int']['input']>
    gt?: InputMaybe<Scalars['Int']['input']>
    gte?: InputMaybe<Scalars['Int']['input']>
    in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
    lt?: InputMaybe<Scalars['Int']['input']>
    lte?: InputMaybe<Scalars['Int']['input']>
    neq?: InputMaybe<Scalars['Int']['input']>
    ngt?: InputMaybe<Scalars['Int']['input']>
    ngte?: InputMaybe<Scalars['Int']['input']>
    nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
    nlt?: InputMaybe<Scalars['Int']['input']>
    nlte?: InputMaybe<Scalars['Int']['input']>
}

export type InvalidListingIdError = Error & {
    __typename?: 'InvalidListingIdError'
    message: Scalars['String']['output']
}

export type ListFilterInputTypeOfConnectionFilterInput = {
    all?: InputMaybe<ConnectionFilterInput>
    any?: InputMaybe<Scalars['Boolean']['input']>
    none?: InputMaybe<ConnectionFilterInput>
    some?: InputMaybe<ConnectionFilterInput>
}

export type ListFilterInputTypeOfListingFilterInput = {
    all?: InputMaybe<ListingFilterInput>
    any?: InputMaybe<Scalars['Boolean']['input']>
    none?: InputMaybe<ListingFilterInput>
    some?: InputMaybe<ListingFilterInput>
}

export type ListFilterInputTypeOfListingTypeFilterInput = {
    all?: InputMaybe<ListingTypeFilterInput>
    any?: InputMaybe<Scalars['Boolean']['input']>
    none?: InputMaybe<ListingTypeFilterInput>
    some?: InputMaybe<ListingTypeFilterInput>
}

export type ListFilterInputTypeOfOrderFilterInput = {
    all?: InputMaybe<OrderFilterInput>
    any?: InputMaybe<Scalars['Boolean']['input']>
    none?: InputMaybe<OrderFilterInput>
    some?: InputMaybe<OrderFilterInput>
}

export type Listing = {
    __typename?: 'Listing'
    connection: Connection
    listingId: Scalars['Int']['output']
    listingType: ListingType
    listingTypeId: Scalars['Int']['output']
    orders: Array<Order>
    platform: Platform
    platformId: Scalars['Int']['output']
    price: Scalars['Decimal']['output']
    user: User
    userId: Scalars['Int']['output']
}

export type ListingFilterInput = {
    and?: InputMaybe<Array<ListingFilterInput>>
    connection?: InputMaybe<ConnectionFilterInput>
    listingId?: InputMaybe<IntOperationFilterInput>
    listingType?: InputMaybe<ListingTypeFilterInput>
    listingTypeId?: InputMaybe<IntOperationFilterInput>
    or?: InputMaybe<Array<ListingFilterInput>>
    orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>
    platform?: InputMaybe<PlatformFilterInput>
    platformId?: InputMaybe<IntOperationFilterInput>
    price?: InputMaybe<DecimalOperationFilterInput>
    user?: InputMaybe<UserFilterInput>
    userId?: InputMaybe<IntOperationFilterInput>
}

export type ListingPriceHasChangedError = Error & {
    __typename?: 'ListingPriceHasChangedError'
    message: Scalars['String']['output']
}

export type ListingSortInput = {
    connection?: InputMaybe<ConnectionSortInput>
    listingId?: InputMaybe<SortEnumType>
    listingType?: InputMaybe<ListingTypeSortInput>
    listingTypeId?: InputMaybe<SortEnumType>
    platform?: InputMaybe<PlatformSortInput>
    platformId?: InputMaybe<SortEnumType>
    price?: InputMaybe<SortEnumType>
    user?: InputMaybe<UserSortInput>
    userId?: InputMaybe<SortEnumType>
}

export type ListingType = {
    __typename?: 'ListingType'
    listingTypeId: Scalars['Int']['output']
    listings: Array<Listing>
    name: Scalars['String']['output']
    platform: Platform
    platformId: Scalars['Int']['output']
}

export type ListingTypeFilterInput = {
    and?: InputMaybe<Array<ListingTypeFilterInput>>
    listingTypeId?: InputMaybe<IntOperationFilterInput>
    listings?: InputMaybe<ListFilterInputTypeOfListingFilterInput>
    name?: InputMaybe<StringOperationFilterInput>
    or?: InputMaybe<Array<ListingTypeFilterInput>>
    platform?: InputMaybe<PlatformFilterInput>
    platformId?: InputMaybe<IntOperationFilterInput>
}

export type ListingTypeSortInput = {
    listingTypeId?: InputMaybe<SortEnumType>
    name?: InputMaybe<SortEnumType>
    platform?: InputMaybe<PlatformSortInput>
    platformId?: InputMaybe<SortEnumType>
}

export type LoginError = UserInvalidCredentialsError | UserNotFoundError

export type LoginInput = {
    email: Scalars['String']['input']
    password: Scalars['String']['input']
}

export type LoginPayload = {
    __typename?: 'LoginPayload'
    errors?: Maybe<Array<LoginError>>
    token?: Maybe<Scalars['String']['output']>
    user?: Maybe<User>
}

export type Mutation = {
    __typename?: 'Mutation'
    addConnection: AddConnectionPayload
    addListing: AddListingPayload
    addUser: AddUserPayload
    deleteUser: DeleteUserPayload
    login: LoginPayload
    orderListing: OrderListingPayload
    updatePassword: UpdatePasswordPayload
}

export type MutationAddConnectionArgs = {
    input: AddConnectionInput
}

export type MutationAddListingArgs = {
    input: AddListingInput
}

export type MutationAddUserArgs = {
    input: AddUserInput
}

export type MutationDeleteUserArgs = {
    input: DeleteUserInput
}

export type MutationLoginArgs = {
    input: LoginInput
}

export type MutationOrderListingArgs = {
    input: OrderListingInput
}

export type MutationUpdatePasswordArgs = {
    input: UpdatePasswordInput
}

export type Order = {
    __typename?: 'Order'
    deliverable?: Maybe<Scalars['String']['output']>
    description: Scalars['String']['output']
    listing: Listing
    listingId: Scalars['Int']['output']
    orderDate: Scalars['DateTime']['output']
    orderId: Scalars['Int']['output']
    orderStatus: OrderStatus
    orderStatusId: OrderStatusEnum
    price: Scalars['Decimal']['output']
    rating?: Maybe<Scalars['Float']['output']>
    user: User
    userId: Scalars['Int']['output']
}

export type OrderFilterInput = {
    and?: InputMaybe<Array<OrderFilterInput>>
    deliverable?: InputMaybe<StringOperationFilterInput>
    description?: InputMaybe<StringOperationFilterInput>
    listing?: InputMaybe<ListingFilterInput>
    listingId?: InputMaybe<IntOperationFilterInput>
    or?: InputMaybe<Array<OrderFilterInput>>
    orderDate?: InputMaybe<DateTimeOperationFilterInput>
    orderId?: InputMaybe<IntOperationFilterInput>
    orderStatus?: InputMaybe<OrderStatusFilterInput>
    orderStatusId?: InputMaybe<OrderStatusEnumOperationFilterInput>
    price?: InputMaybe<DecimalOperationFilterInput>
    rating?: InputMaybe<FloatOperationFilterInput>
    user?: InputMaybe<UserFilterInput>
    userId?: InputMaybe<IntOperationFilterInput>
}

export type OrderListingError =
    | CannotOrderOwnListingError
    | InvalidListingIdError
    | ListingPriceHasChangedError

export type OrderListingInput = {
    description: Scalars['String']['input']
    listingId: Scalars['Int']['input']
    price: Scalars['Decimal']['input']
    userId: Scalars['Int']['input']
}

export type OrderListingPayload = {
    __typename?: 'OrderListingPayload'
    errors?: Maybe<Array<OrderListingError>>
    order?: Maybe<Order>
}

export type OrderSortInput = {
    deliverable?: InputMaybe<SortEnumType>
    description?: InputMaybe<SortEnumType>
    listing?: InputMaybe<ListingSortInput>
    listingId?: InputMaybe<SortEnumType>
    orderDate?: InputMaybe<SortEnumType>
    orderId?: InputMaybe<SortEnumType>
    orderStatus?: InputMaybe<OrderStatusSortInput>
    orderStatusId?: InputMaybe<SortEnumType>
    price?: InputMaybe<SortEnumType>
    rating?: InputMaybe<SortEnumType>
    user?: InputMaybe<UserSortInput>
    userId?: InputMaybe<SortEnumType>
}

export type OrderStatus = {
    __typename?: 'OrderStatus'
    name: Scalars['String']['output']
    orderStatusId: OrderStatusEnum
    orders: Array<Order>
}

export enum OrderStatusEnum {
    Accepted = 'ACCEPTED',
    Completed = 'COMPLETED',
    Pending = 'PENDING',
    Rejected = 'REJECTED',
}

export type OrderStatusEnumOperationFilterInput = {
    eq?: InputMaybe<OrderStatusEnum>
    in?: InputMaybe<Array<OrderStatusEnum>>
    neq?: InputMaybe<OrderStatusEnum>
    nin?: InputMaybe<Array<OrderStatusEnum>>
}

export type OrderStatusFilterInput = {
    and?: InputMaybe<Array<OrderStatusFilterInput>>
    name?: InputMaybe<StringOperationFilterInput>
    or?: InputMaybe<Array<OrderStatusFilterInput>>
    orderStatusId?: InputMaybe<OrderStatusEnumOperationFilterInput>
    orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>
}

export type OrderStatusSortInput = {
    name?: InputMaybe<SortEnumType>
    orderStatusId?: InputMaybe<SortEnumType>
}

/** A connection to a list of items. */
export type OrdersByStatusConnection = {
    __typename?: 'OrdersByStatusConnection'
    /** A list of edges. */
    edges?: Maybe<Array<OrdersByStatusEdge>>
    /** A flattened list of the nodes. */
    nodes?: Maybe<Array<Order>>
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars['Int']['output']
}

/** An edge in a connection. */
export type OrdersByStatusEdge = {
    __typename?: 'OrdersByStatusEdge'
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output']
    /** The item at the end of the edge. */
    node: Order
}

/** Information about pagination in a connection. */
export type PageInfo = {
    __typename?: 'PageInfo'
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']['output']>
    /** Indicates whether more edges exist following the set defined by the clients arguments. */
    hasNextPage: Scalars['Boolean']['output']
    /** Indicates whether more edges exist prior the set defined by the clients arguments. */
    hasPreviousPage: Scalars['Boolean']['output']
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']['output']>
}

export type Platform = {
    __typename?: 'Platform'
    listingTypes: Array<ListingType>
    name: Scalars['String']['output']
    platformId: Scalars['Int']['output']
}

export type PlatformFilterInput = {
    and?: InputMaybe<Array<PlatformFilterInput>>
    listingTypes?: InputMaybe<ListFilterInputTypeOfListingTypeFilterInput>
    name?: InputMaybe<StringOperationFilterInput>
    or?: InputMaybe<Array<PlatformFilterInput>>
    platformId?: InputMaybe<IntOperationFilterInput>
}

export type PlatformSortInput = {
    name?: InputMaybe<SortEnumType>
    platformId?: InputMaybe<SortEnumType>
}

export type Query = {
    __typename?: 'Query'
    orderById?: Maybe<Order>
    orders: Array<Order>
    ordersByStatus?: Maybe<OrdersByStatusConnection>
    platforms: Array<Platform>
    requestsByStatus?: Maybe<RequestsByStatusConnection>
    userById?: Maybe<User>
    users: Array<User>
}

export type QueryOrderByIdArgs = {
    orderId: Scalars['Int']['input']
}

export type QueryOrdersArgs = {
    where?: InputMaybe<OrderFilterInput>
}

export type QueryOrdersByStatusArgs = {
    after?: InputMaybe<Scalars['String']['input']>
    before?: InputMaybe<Scalars['String']['input']>
    first?: InputMaybe<Scalars['Int']['input']>
    last?: InputMaybe<Scalars['Int']['input']>
    order?: InputMaybe<Array<OrderSortInput>>
    status: OrderStatusEnum
    userId: Scalars['Int']['input']
}

export type QueryRequestsByStatusArgs = {
    after?: InputMaybe<Scalars['String']['input']>
    before?: InputMaybe<Scalars['String']['input']>
    first?: InputMaybe<Scalars['Int']['input']>
    last?: InputMaybe<Scalars['Int']['input']>
    order?: InputMaybe<Array<OrderSortInput>>
    status: OrderStatusEnum
    userId: Scalars['Int']['input']
}

export type QueryUserByIdArgs = {
    userId: Scalars['Int']['input']
}

export type QueryUsersArgs = {
    where?: InputMaybe<UserFilterInput>
}

/** A connection to a list of items. */
export type RequestsByStatusConnection = {
    __typename?: 'RequestsByStatusConnection'
    /** A list of edges. */
    edges?: Maybe<Array<RequestsByStatusEdge>>
    /** A flattened list of the nodes. */
    nodes?: Maybe<Array<Order>>
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars['Int']['output']
}

/** An edge in a connection. */
export type RequestsByStatusEdge = {
    __typename?: 'RequestsByStatusEdge'
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output']
    /** The item at the end of the edge. */
    node: Order
}

export enum SortEnumType {
    Asc = 'ASC',
    Desc = 'DESC',
}

export type StringOperationFilterInput = {
    and?: InputMaybe<Array<StringOperationFilterInput>>
    contains?: InputMaybe<Scalars['String']['input']>
    endsWith?: InputMaybe<Scalars['String']['input']>
    eq?: InputMaybe<Scalars['String']['input']>
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
    ncontains?: InputMaybe<Scalars['String']['input']>
    nendsWith?: InputMaybe<Scalars['String']['input']>
    neq?: InputMaybe<Scalars['String']['input']>
    nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
    nstartsWith?: InputMaybe<Scalars['String']['input']>
    or?: InputMaybe<Array<StringOperationFilterInput>>
    startsWith?: InputMaybe<Scalars['String']['input']>
}

export type UpdatePasswordInput = {
    password: Scalars['String']['input']
    userId: Scalars['Int']['input']
}

export type UpdatePasswordPayload = {
    __typename?: 'UpdatePasswordPayload'
    user?: Maybe<User>
}

export type User = {
    __typename?: 'User'
    connections: Array<Connection>
    email: Scalars['String']['output']
    firstName: Scalars['String']['output']
    lastName: Scalars['String']['output']
    listings: Array<Listing>
    orders: Array<Order>
    password: Scalars['String']['output']
    userId: Scalars['Int']['output']
}

export type UserFilterInput = {
    and?: InputMaybe<Array<UserFilterInput>>
    connections?: InputMaybe<ListFilterInputTypeOfConnectionFilterInput>
    email?: InputMaybe<StringOperationFilterInput>
    firstName?: InputMaybe<StringOperationFilterInput>
    lastName?: InputMaybe<StringOperationFilterInput>
    listings?: InputMaybe<ListFilterInputTypeOfListingFilterInput>
    or?: InputMaybe<Array<UserFilterInput>>
    orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>
    password?: InputMaybe<StringOperationFilterInput>
    userId?: InputMaybe<IntOperationFilterInput>
}

export type UserInvalidCredentialsError = Error & {
    __typename?: 'UserInvalidCredentialsError'
    message: Scalars['String']['output']
}

export type UserNotFoundError = Error & {
    __typename?: 'UserNotFoundError'
    message: Scalars['String']['output']
}

export type UserSortInput = {
    email?: InputMaybe<SortEnumType>
    firstName?: InputMaybe<SortEnumType>
    lastName?: InputMaybe<SortEnumType>
    password?: InputMaybe<SortEnumType>
    userId?: InputMaybe<SortEnumType>
}

export type OrderSummaryFragment = {
    __typename?: 'Order'
    orderId: number
    orderDate: any
    orderStatusId: OrderStatusEnum
    listing: {
        __typename?: 'Listing'
        price: any
        user: {__typename?: 'User'; userId: number; email: string}
        listingType: {
            __typename?: 'ListingType'
            name: string
            platform: {__typename?: 'Platform'; name: string}
        }
        connection: {__typename?: 'Connection'; handle: string}
    }
} & {' $fragmentName'?: 'OrderSummaryFragment'}

export type GetOrdersByStatusQueryVariables = Exact<{
    userId: Scalars['Int']['input']
    status: OrderStatusEnum
    first?: InputMaybe<Scalars['Int']['input']>
    after?: InputMaybe<Scalars['String']['input']>
    last?: InputMaybe<Scalars['Int']['input']>
    before?: InputMaybe<Scalars['String']['input']>
}>

export type GetOrdersByStatusQuery = {
    __typename?: 'Query'
    ordersByStatus?: {
        __typename?: 'OrdersByStatusConnection'
        totalCount: number
        pageInfo: {
            __typename?: 'PageInfo'
            hasPreviousPage: boolean
            hasNextPage: boolean
            startCursor?: string | null
            endCursor?: string | null
        }
        edges?: Array<{
            __typename?: 'OrdersByStatusEdge'
            cursor: string
            node: {__typename?: 'Order'} & {
                ' $fragmentRefs'?: {OrderSummaryFragment: OrderSummaryFragment}
            }
        }> | null
    } | null
}

export type GetRequestsByStatusQueryVariables = Exact<{
    userId: Scalars['Int']['input']
    status: OrderStatusEnum
    first?: InputMaybe<Scalars['Int']['input']>
    after?: InputMaybe<Scalars['String']['input']>
    last?: InputMaybe<Scalars['Int']['input']>
    before?: InputMaybe<Scalars['String']['input']>
}>

export type GetRequestsByStatusQuery = {
    __typename?: 'Query'
    requestsByStatus?: {
        __typename?: 'RequestsByStatusConnection'
        totalCount: number
        pageInfo: {
            __typename?: 'PageInfo'
            hasPreviousPage: boolean
            hasNextPage: boolean
            startCursor?: string | null
            endCursor?: string | null
        }
        edges?: Array<{
            __typename?: 'RequestsByStatusEdge'
            cursor: string
            node: {__typename?: 'Order'} & {
                ' $fragmentRefs'?: {OrderSummaryFragment: OrderSummaryFragment}
            }
        }> | null
    } | null
}

export type UserContextInfoFragment = {
    __typename?: 'User'
    userId: number
    email: string
    firstName: string
    lastName: string
} & {' $fragmentName'?: 'UserContextInfoFragment'}

export type LoginMutationVariables = Exact<{
    input: LoginInput
}>

export type LoginMutation = {
    __typename?: 'Mutation'
    login: {
        __typename?: 'LoginPayload'
        token?: string | null
        user?:
            | ({__typename?: 'User'} & {
                  ' $fragmentRefs'?: {UserContextInfoFragment: UserContextInfoFragment}
              })
            | null
        errors?: Array<
            | {__typename?: 'UserInvalidCredentialsError'; message: string}
            | {__typename?: 'UserNotFoundError'; message: string}
        > | null
    }
}

export type RegisterUserMutationVariables = Exact<{
    input: AddUserInput
}>

export type RegisterUserMutation = {
    __typename?: 'Mutation'
    addUser: {
        __typename?: 'AddUserPayload'
        token?: string | null
        user?:
            | ({__typename?: 'User'} & {
                  ' $fragmentRefs'?: {UserContextInfoFragment: UserContextInfoFragment}
              })
            | null
        errors?: Array<{__typename?: 'UserNotFoundError'; message: string}> | null
    }
}

export const OrderSummaryFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: {kind: 'Name', value: 'OrderSummary'},
            typeCondition: {kind: 'NamedType', name: {kind: 'Name', value: 'Order'}},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {kind: 'Field', name: {kind: 'Name', value: 'orderId'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'orderDate'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'orderStatusId'}},
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'listing'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {kind: 'Field', name: {kind: 'Name', value: 'price'}},
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'user'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                                            {kind: 'Field', name: {kind: 'Name', value: 'email'}},
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'listingType'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'name'}},
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'platform'},
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: {kind: 'Name', value: 'name'},
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'connection'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'handle'}},
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<OrderSummaryFragment, unknown>
export const UserContextInfoFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: {kind: 'Name', value: 'UserContextInfo'},
            typeCondition: {kind: 'NamedType', name: {kind: 'Name', value: 'User'}},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'email'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'firstName'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'lastName'}},
                ],
            },
        },
    ],
} as unknown as DocumentNode<UserContextInfoFragment, unknown>
export const GetOrdersByStatusDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: {kind: 'Name', value: 'GetOrdersByStatus'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'Int'}},
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'status'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'OrderStatusEnum'}},
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'first'}},
                    type: {kind: 'NamedType', name: {kind: 'Name', value: 'Int'}},
                },
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'after'}},
                    type: {kind: 'NamedType', name: {kind: 'Name', value: 'String'}},
                },
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'last'}},
                    type: {kind: 'NamedType', name: {kind: 'Name', value: 'Int'}},
                },
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'before'}},
                    type: {kind: 'NamedType', name: {kind: 'Name', value: 'String'}},
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'ordersByStatus'},
                        arguments: [
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'userId'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                            },
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'status'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'status'}},
                            },
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'first'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'first'}},
                            },
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'after'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'after'}},
                            },
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'last'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'last'}},
                            },
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'before'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'before'}},
                            },
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'order'},
                                value: {
                                    kind: 'ListValue',
                                    values: [
                                        {
                                            kind: 'ObjectValue',
                                            fields: [
                                                {
                                                    kind: 'ObjectField',
                                                    name: {kind: 'Name', value: 'orderDate'},
                                                    value: {kind: 'EnumValue', value: 'ASC'},
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {kind: 'Field', name: {kind: 'Name', value: 'totalCount'}},
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'pageInfo'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'hasPreviousPage'},
                                            },
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'hasNextPage'},
                                            },
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'startCursor'},
                                            },
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'endCursor'},
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'edges'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'cursor'}},
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'node'},
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'FragmentSpread',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'OrderSummary',
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: {kind: 'Name', value: 'OrderSummary'},
            typeCondition: {kind: 'NamedType', name: {kind: 'Name', value: 'Order'}},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {kind: 'Field', name: {kind: 'Name', value: 'orderId'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'orderDate'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'orderStatusId'}},
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'listing'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {kind: 'Field', name: {kind: 'Name', value: 'price'}},
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'user'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                                            {kind: 'Field', name: {kind: 'Name', value: 'email'}},
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'listingType'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'name'}},
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'platform'},
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: {kind: 'Name', value: 'name'},
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'connection'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'handle'}},
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetOrdersByStatusQuery, GetOrdersByStatusQueryVariables>
export const GetRequestsByStatusDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: {kind: 'Name', value: 'GetRequestsByStatus'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'Int'}},
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'status'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'OrderStatusEnum'}},
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'first'}},
                    type: {kind: 'NamedType', name: {kind: 'Name', value: 'Int'}},
                },
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'after'}},
                    type: {kind: 'NamedType', name: {kind: 'Name', value: 'String'}},
                },
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'last'}},
                    type: {kind: 'NamedType', name: {kind: 'Name', value: 'Int'}},
                },
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'before'}},
                    type: {kind: 'NamedType', name: {kind: 'Name', value: 'String'}},
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'requestsByStatus'},
                        arguments: [
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'userId'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                            },
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'status'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'status'}},
                            },
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'first'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'first'}},
                            },
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'after'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'after'}},
                            },
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'last'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'last'}},
                            },
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'before'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'before'}},
                            },
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'order'},
                                value: {
                                    kind: 'ListValue',
                                    values: [
                                        {
                                            kind: 'ObjectValue',
                                            fields: [
                                                {
                                                    kind: 'ObjectField',
                                                    name: {kind: 'Name', value: 'orderDate'},
                                                    value: {kind: 'EnumValue', value: 'ASC'},
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {kind: 'Field', name: {kind: 'Name', value: 'totalCount'}},
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'pageInfo'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'hasPreviousPage'},
                                            },
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'hasNextPage'},
                                            },
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'startCursor'},
                                            },
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'endCursor'},
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'edges'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'cursor'}},
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'node'},
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'FragmentSpread',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'OrderSummary',
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: {kind: 'Name', value: 'OrderSummary'},
            typeCondition: {kind: 'NamedType', name: {kind: 'Name', value: 'Order'}},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {kind: 'Field', name: {kind: 'Name', value: 'orderId'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'orderDate'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'orderStatusId'}},
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'listing'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {kind: 'Field', name: {kind: 'Name', value: 'price'}},
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'user'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                                            {kind: 'Field', name: {kind: 'Name', value: 'email'}},
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'listingType'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'name'}},
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'platform'},
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: {kind: 'Name', value: 'name'},
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'connection'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'handle'}},
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetRequestsByStatusQuery, GetRequestsByStatusQueryVariables>
export const LoginDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: {kind: 'Name', value: 'Login'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'LoginInput'}},
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'login'},
                        arguments: [
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'input'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'user'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'FragmentSpread',
                                                name: {kind: 'Name', value: 'UserContextInfo'},
                                            },
                                        ],
                                    },
                                },
                                {kind: 'Field', name: {kind: 'Name', value: 'token'}},
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'errors'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'InlineFragment',
                                                typeCondition: {
                                                    kind: 'NamedType',
                                                    name: {kind: 'Name', value: 'Error'},
                                                },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: {kind: 'Name', value: 'message'},
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: {kind: 'Name', value: 'UserContextInfo'},
            typeCondition: {kind: 'NamedType', name: {kind: 'Name', value: 'User'}},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'email'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'firstName'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'lastName'}},
                ],
            },
        },
    ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>
export const RegisterUserDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: {kind: 'Name', value: 'RegisterUser'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'AddUserInput'}},
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'addUser'},
                        arguments: [
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'input'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'user'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'FragmentSpread',
                                                name: {kind: 'Name', value: 'UserContextInfo'},
                                            },
                                        ],
                                    },
                                },
                                {kind: 'Field', name: {kind: 'Name', value: 'token'}},
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'errors'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'InlineFragment',
                                                typeCondition: {
                                                    kind: 'NamedType',
                                                    name: {kind: 'Name', value: 'Error'},
                                                },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: {kind: 'Name', value: 'message'},
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: {kind: 'Name', value: 'UserContextInfo'},
            typeCondition: {kind: 'NamedType', name: {kind: 'Name', value: 'User'}},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'email'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'firstName'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'lastName'}},
                ],
            },
        },
    ],
} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>
