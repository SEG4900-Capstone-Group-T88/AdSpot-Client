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

export type AcceptOrderError = InvalidOrderIdError | ListingDoesNotBelongToUserError

export type AcceptOrderInput = {
    orderId: Scalars['Int']['input']
    userId: Scalars['Int']['input']
}

export type AcceptOrderPayload = {
    __typename?: 'AcceptOrderPayload'
    errors?: Maybe<Array<AcceptOrderError>>
    order?: Maybe<Order>
}

export type AccountHasNotBeenConnectedError = Error & {
    __typename?: 'AccountHasNotBeenConnectedError'
    message: Scalars['String']['output']
}

export type AccountWithEmailAlreadyExistsError = Error & {
    __typename?: 'AccountWithEmailAlreadyExistsError'
    message: Scalars['String']['output']
}

export type AddConnectionError = ConnectionAlreadyExistsError

export type AddConnectionInput = {
    accountHandle: Scalars['String']['input']
    apiToken: Scalars['String']['input']
    platformId: Scalars['Int']['input']
    userId: Scalars['Int']['input']
}

export type AddConnectionPayload = {
    __typename?: 'AddConnectionPayload'
    connection?: Maybe<Connection>
    errors?: Maybe<Array<AddConnectionError>>
}

export type AddFlairError = FlairAlreadyExistsError

export type AddFlairInput = {
    flairTitle: Scalars['String']['input']
    userId: Scalars['Int']['input']
}

export type AddFlairPayload = {
    __typename?: 'AddFlairPayload'
    errors?: Maybe<Array<AddFlairError>>
    flair?: Maybe<Array<Flair>>
}

export type AddListingError = AccountHasNotBeenConnectedError | InvalidListingTypeIdError

export type AddListingInput = {
    listingTypeId: Scalars['Int']['input']
    price: Scalars['Decimal']['input']
    userId: Scalars['Int']['input']
}

export type AddListingPayload = {
    __typename?: 'AddListingPayload'
    errors?: Maybe<Array<AddListingError>>
    listing?: Maybe<Listing>
}

export type AddUserError = AccountWithEmailAlreadyExistsError

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
    tokenExpiration: Scalars['DateTime']['output']
    user: User
    userId: Scalars['Int']['output']
}

export type ConnectionAlreadyExistsError = Error & {
    __typename?: 'ConnectionAlreadyExistsError'
    message: Scalars['String']['output']
}

export type ConnectionFilterInput = {
    and?: InputMaybe<Array<ConnectionFilterInput>>
    handle?: InputMaybe<StringOperationFilterInput>
    or?: InputMaybe<Array<ConnectionFilterInput>>
    platform?: InputMaybe<PlatformFilterInput>
    platformId?: InputMaybe<IntOperationFilterInput>
    token?: InputMaybe<StringOperationFilterInput>
    tokenExpiration?: InputMaybe<DateTimeOperationFilterInput>
    user?: InputMaybe<UserFilterInput>
    userId?: InputMaybe<IntOperationFilterInput>
}

export type ConnectionSortInput = {
    handle?: InputMaybe<SortEnumType>
    platform?: InputMaybe<PlatformSortInput>
    platformId?: InputMaybe<SortEnumType>
    token?: InputMaybe<SortEnumType>
    tokenExpiration?: InputMaybe<SortEnumType>
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

export type DeleteFlairInput = {
    flairTitle: Scalars['String']['input']
    userId: Scalars['Int']['input']
}

export type DeleteFlairPayload = {
    __typename?: 'DeleteFlairPayload'
    flair?: Maybe<Array<Flair>>
}

export type DeleteUserError = InvalidUserIdError

export type DeleteUserInput = {
    userId: Scalars['Int']['input']
}

export type DeleteUserPayload = {
    __typename?: 'DeleteUserPayload'
    errors?: Maybe<Array<DeleteUserError>>
    user?: Maybe<User>
}

export type Error = {
    message: Scalars['String']['output']
}

export type ExchangeInstagramAuthCodeForTokenError = InstagramOauthError

export type ExchangeInstagramAuthCodeForTokenInput = {
    authCode: Scalars['String']['input']
    platformId: Scalars['Int']['input']
    userId: Scalars['Int']['input']
}

export type ExchangeInstagramAuthCodeForTokenPayload = {
    __typename?: 'ExchangeInstagramAuthCodeForTokenPayload'
    connection?: Maybe<Connection>
    errors?: Maybe<Array<ExchangeInstagramAuthCodeForTokenError>>
}

export type Flair = {
    __typename?: 'Flair'
    flairTitle: Scalars['String']['output']
    user: User
    userId: Scalars['Int']['output']
}

export type FlairAlreadyExistsError = Error & {
    __typename?: 'FlairAlreadyExistsError'
    message: Scalars['String']['output']
}

export type FlairFilterInput = {
    and?: InputMaybe<Array<FlairFilterInput>>
    flairTitle?: InputMaybe<StringOperationFilterInput>
    or?: InputMaybe<Array<FlairFilterInput>>
    user?: InputMaybe<UserFilterInput>
    userId?: InputMaybe<IntOperationFilterInput>
}

export type InstagramOauthError = Error & {
    __typename?: 'InstagramOauthError'
    message: Scalars['String']['output']
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

export type InvalidListingTypeIdError = Error & {
    __typename?: 'InvalidListingTypeIdError'
    message: Scalars['String']['output']
}

export type InvalidOrderIdError = Error & {
    __typename?: 'InvalidOrderIdError'
    message: Scalars['String']['output']
}

export type InvalidPriceError = Error & {
    __typename?: 'InvalidPriceError'
    message: Scalars['String']['output']
}

export type InvalidUserIdError = Error & {
    __typename?: 'InvalidUserIdError'
    message: Scalars['String']['output']
}

export type ListFilterInputTypeOfConnectionFilterInput = {
    all?: InputMaybe<ConnectionFilterInput>
    any?: InputMaybe<Scalars['Boolean']['input']>
    none?: InputMaybe<ConnectionFilterInput>
    some?: InputMaybe<ConnectionFilterInput>
}

export type ListFilterInputTypeOfFlairFilterInput = {
    all?: InputMaybe<FlairFilterInput>
    any?: InputMaybe<Scalars['Boolean']['input']>
    none?: InputMaybe<FlairFilterInput>
    some?: InputMaybe<FlairFilterInput>
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

export type ListingDoesNotBelongToUserError = Error & {
    __typename?: 'ListingDoesNotBelongToUserError'
    message: Scalars['String']['output']
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
    acceptOrder: AcceptOrderPayload
    addConnection: AddConnectionPayload
    addFlair: AddFlairPayload
    addListing: AddListingPayload
    addUser: AddUserPayload
    deleteFlair: DeleteFlairPayload
    deleteUser: DeleteUserPayload
    exchangeInstagramAuthCodeForToken: ExchangeInstagramAuthCodeForTokenPayload
    login: LoginPayload
    orderListing: OrderListingPayload
    rejectOrder: RejectOrderPayload
    submitDeliverable: SubmitDeliverablePayload
    updateListingPrice: UpdateListingPricePayload
    updatePassword: UpdatePasswordPayload
}

export type MutationAcceptOrderArgs = {
    input: AcceptOrderInput
}

export type MutationAddConnectionArgs = {
    input: AddConnectionInput
}

export type MutationAddFlairArgs = {
    input: AddFlairInput
}

export type MutationAddListingArgs = {
    input: AddListingInput
}

export type MutationAddUserArgs = {
    input: AddUserInput
}

export type MutationDeleteFlairArgs = {
    input: DeleteFlairInput
}

export type MutationDeleteUserArgs = {
    input: DeleteUserInput
}

export type MutationExchangeInstagramAuthCodeForTokenArgs = {
    input: ExchangeInstagramAuthCodeForTokenInput
}

export type MutationLoginArgs = {
    input: LoginInput
}

export type MutationOrderListingArgs = {
    input: OrderListingInput
}

export type MutationRejectOrderArgs = {
    input: RejectOrderInput
}

export type MutationSubmitDeliverableArgs = {
    input: SubmitDeliverableInput
}

export type MutationUpdateListingPriceArgs = {
    input: UpdateListingPriceInput
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

export enum OrderPov {
    Buyer = 'BUYER',
    Seller = 'SELLER',
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

/** A connection to a list of items. */
export type OrdersConnection = {
    __typename?: 'OrdersConnection'
    /** A list of edges. */
    edges?: Maybe<Array<OrdersEdge>>
    /** A flattened list of the nodes. */
    nodes?: Maybe<Array<Order>>
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars['Int']['output']
}

/** An edge in a connection. */
export type OrdersEdge = {
    __typename?: 'OrdersEdge'
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
    connection: Array<Connection>
    connections: Array<Connection>
    flairs: Array<Flair>
    orderById?: Maybe<Order>
    orders?: Maybe<OrdersConnection>
    /** @deprecated Use the `orders` field with a filter instead */
    ordersByStatus?: Maybe<OrdersByStatusConnection>
    platforms: Array<Platform>
    /** @deprecated Use the `orders` field with a filter instead */
    requestsByStatus?: Maybe<RequestsByStatusConnection>
    userById?: Maybe<User>
    users?: Maybe<UsersConnection>
    whoAmI?: Maybe<User>
}

export type QueryConnectionArgs = {
    platformId: Scalars['Int']['input']
    userId: Scalars['Int']['input']
}

export type QueryConnectionsArgs = {
    userId: Scalars['Int']['input']
}

export type QueryFlairsArgs = {
    userId: Scalars['Int']['input']
}

export type QueryOrderByIdArgs = {
    orderId: Scalars['Int']['input']
}

export type QueryOrdersArgs = {
    after?: InputMaybe<Scalars['String']['input']>
    before?: InputMaybe<Scalars['String']['input']>
    first?: InputMaybe<Scalars['Int']['input']>
    last?: InputMaybe<Scalars['Int']['input']>
    order?: InputMaybe<Array<OrderSortInput>>
    pov: OrderPov
    userId: Scalars['Int']['input']
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

export type QueryPlatformsArgs = {
    order?: InputMaybe<Array<PlatformSortInput>>
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
    after?: InputMaybe<Scalars['String']['input']>
    before?: InputMaybe<Scalars['String']['input']>
    first?: InputMaybe<Scalars['Int']['input']>
    last?: InputMaybe<Scalars['Int']['input']>
    order?: InputMaybe<Array<UserSortInput>>
    where?: InputMaybe<UserFilterInput>
}

export type RejectOrderError = InvalidOrderIdError | ListingDoesNotBelongToUserError

export type RejectOrderInput = {
    orderId: Scalars['Int']['input']
    userId: Scalars['Int']['input']
}

export type RejectOrderPayload = {
    __typename?: 'RejectOrderPayload'
    errors?: Maybe<Array<RejectOrderError>>
    order?: Maybe<Order>
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

export type SubmitDeliverableError = InvalidOrderIdError

export type SubmitDeliverableInput = {
    deliverable: Scalars['String']['input']
    orderId: Scalars['Int']['input']
}

export type SubmitDeliverablePayload = {
    __typename?: 'SubmitDeliverablePayload'
    errors?: Maybe<Array<SubmitDeliverableError>>
    order?: Maybe<Order>
}

export type Subscription = {
    __typename?: 'Subscription'
    name: Scalars['String']['output']
    onAccountConnected: Connection
    onNewListing: Listing
    onNewOrder: Order
}

export type SubscriptionOnAccountConnectedArgs = {
    userId: Scalars['Int']['input']
}

export type SubscriptionOnNewListingArgs = {
    userId: Scalars['Int']['input']
}

export type SubscriptionOnNewOrderArgs = {
    userId: Scalars['Int']['input']
}

export type UpdateListingPriceError =
    | InvalidListingIdError
    | InvalidPriceError
    | ListingDoesNotBelongToUserError

export type UpdateListingPriceInput = {
    listingId: Scalars['Int']['input']
    price: Scalars['Decimal']['input']
    userId: Scalars['Int']['input']
}

export type UpdateListingPricePayload = {
    __typename?: 'UpdateListingPricePayload'
    errors?: Maybe<Array<UpdateListingPriceError>>
    listing?: Maybe<Listing>
}

export type UpdatePasswordError = InvalidUserIdError

export type UpdatePasswordInput = {
    password: Scalars['String']['input']
    userId: Scalars['Int']['input']
}

export type UpdatePasswordPayload = {
    __typename?: 'UpdatePasswordPayload'
    errors?: Maybe<Array<UpdatePasswordError>>
    user?: Maybe<User>
}

export type User = {
    __typename?: 'User'
    connections: Array<Connection>
    email: Scalars['String']['output']
    firstName: Scalars['String']['output']
    flairs: Array<Flair>
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
    flairs?: InputMaybe<ListFilterInputTypeOfFlairFilterInput>
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

/** A connection to a list of items. */
export type UsersConnection = {
    __typename?: 'UsersConnection'
    /** A list of edges. */
    edges?: Maybe<Array<UsersEdge>>
    /** A flattened list of the nodes. */
    nodes?: Maybe<Array<User>>
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars['Int']['output']
}

/** An edge in a connection. */
export type UsersEdge = {
    __typename?: 'UsersEdge'
    /** A cursor for use in pagination. */
    cursor: Scalars['String']['output']
    /** The item at the end of the edge. */
    node: User
}

export type WhoAmIQueryVariables = Exact<{[key: string]: never}>

export type WhoAmIQuery = {
    __typename?: 'Query'
    whoAmI?:
        | ({__typename?: 'User'} & {
              ' $fragmentRefs'?: {UserContextInfoFragment: UserContextInfoFragment}
          })
        | null
}

export type GetUserConnectionsQueryVariables = Exact<{
    input: Scalars['Int']['input']
}>

export type GetUserConnectionsQuery = {
    __typename?: 'Query'
    userById?: {
        __typename?: 'User'
        connections: Array<{__typename?: 'Connection'; platformId: number; handle: string}>
    } | null
}

export type GetListingTypesQueryVariables = Exact<{[key: string]: never}>

export type GetListingTypesQuery = {
    __typename?: 'Query'
    platforms: Array<{
        __typename?: 'Platform'
        platformId: number
        name: string
        listingTypes: Array<{__typename?: 'ListingType'; name: string; listingTypeId: number}>
    }>
}

export type AddListingMutationVariables = Exact<{
    input: AddListingInput
}>

export type AddListingMutation = {
    __typename?: 'Mutation'
    addListing: {
        __typename?: 'AddListingPayload'
        listing?: {__typename?: 'Listing'; listingId: number} | null
        errors?: Array<
            | {__typename?: 'AccountHasNotBeenConnectedError'; message: string}
            | {__typename?: 'InvalidListingTypeIdError'; message: string}
        > | null
    }
}

export type ListingSummaryFragment = {
    __typename?: 'Listing'
    listingId: number
    price: any
    listingType: {
        __typename?: 'ListingType'
        name: string
        platform: {__typename?: 'Platform'; platformId: number; name: string}
    }
} & {' $fragmentName'?: 'ListingSummaryFragment'}

export type OrderListingMutationVariables = Exact<{
    input: OrderListingInput
}>

export type OrderListingMutation = {
    __typename?: 'Mutation'
    orderListing: {
        __typename?: 'OrderListingPayload'
        order?: {__typename?: 'Order'; orderId: number} | null
        errors?: Array<
            | {__typename?: 'CannotOrderOwnListingError'; message: string}
            | {__typename?: 'InvalidListingIdError'; message: string}
            | {__typename?: 'ListingPriceHasChangedError'; message: string}
        > | null
    }
}

export type UpdateListingPriceMutationVariables = Exact<{
    input: UpdateListingPriceInput
}>

export type UpdateListingPriceMutation = {
    __typename?: 'Mutation'
    updateListingPrice: {
        __typename?: 'UpdateListingPricePayload'
        listing?: {__typename?: 'Listing'; listingId: number} | null
        errors?: Array<
            | {__typename?: 'InvalidListingIdError'; message: string}
            | {__typename?: 'InvalidPriceError'; message: string}
            | {__typename?: 'ListingDoesNotBelongToUserError'; message: string}
        > | null
    }
}

export type OrderSummaryFragment = {
    __typename?: 'Order'
    orderId: number
    orderDate: any
    orderStatusId: OrderStatusEnum
    description: string
    deliverable?: string | null
    user: {__typename?: 'User'; userId: number; firstName: string; lastName: string; email: string}
    listing: {
        __typename?: 'Listing'
        price: any
        user: {__typename?: 'User'; userId: number; firstName: string; lastName: string}
        listingType: {
            __typename?: 'ListingType'
            name: string
            platform: {__typename?: 'Platform'; name: string}
        }
        connection: {__typename?: 'Connection'; handle: string}
    }
} & {' $fragmentName'?: 'OrderSummaryFragment'}

export type AcceptOrderMutationVariables = Exact<{
    input: AcceptOrderInput
}>

export type AcceptOrderMutation = {
    __typename?: 'Mutation'
    acceptOrder: {
        __typename?: 'AcceptOrderPayload'
        order?: {__typename?: 'Order'; orderId: number} | null
        errors?: Array<
            | {__typename?: 'InvalidOrderIdError'; message: string}
            | {__typename?: 'ListingDoesNotBelongToUserError'; message: string}
        > | null
    }
}

export type RejectOrderMutationVariables = Exact<{
    input: RejectOrderInput
}>

export type RejectOrderMutation = {
    __typename?: 'Mutation'
    rejectOrder: {
        __typename?: 'RejectOrderPayload'
        order?: {__typename?: 'Order'; orderId: number} | null
        errors?: Array<
            | {__typename?: 'InvalidOrderIdError'; message: string}
            | {__typename?: 'ListingDoesNotBelongToUserError'; message: string}
        > | null
    }
}

export type SubmitDeliverableMutationVariables = Exact<{
    input: SubmitDeliverableInput
}>

export type SubmitDeliverableMutation = {
    __typename?: 'Mutation'
    submitDeliverable: {
        __typename?: 'SubmitDeliverablePayload'
        order?: {__typename?: 'Order'; orderId: number; deliverable?: string | null} | null
        errors?: Array<{__typename: 'InvalidOrderIdError'; message: string}> | null
    }
}

export type GetOrdersQueryVariables = Exact<{
    userId: Scalars['Int']['input']
    pov: OrderPov
    status: OrderStatusEnum
    first?: InputMaybe<Scalars['Int']['input']>
    after?: InputMaybe<Scalars['String']['input']>
    last?: InputMaybe<Scalars['Int']['input']>
    before?: InputMaybe<Scalars['String']['input']>
    order?: InputMaybe<Array<OrderSortInput> | OrderSortInput>
}>

export type GetOrdersQuery = {
    __typename?: 'Query'
    orders?: {
        __typename?: 'OrdersConnection'
        totalCount: number
        pageInfo: {
            __typename?: 'PageInfo'
            hasPreviousPage: boolean
            hasNextPage: boolean
            startCursor?: string | null
            endCursor?: string | null
        }
        edges?: Array<{
            __typename?: 'OrdersEdge'
            cursor: string
            node: {__typename?: 'Order'} & {
                ' $fragmentRefs'?: {OrderSummaryFragment: OrderSummaryFragment}
            }
        }> | null
    } | null
}

export type OnNewOrderSubscriptionVariables = Exact<{
    userId: Scalars['Int']['input']
}>

export type OnNewOrderSubscription = {
    __typename?: 'Subscription'
    onNewOrder: {__typename?: 'Order'; orderId: number; userId: number; listingId: number}
}

export type UserContextInfoFragment = {
    __typename?: 'User'
    userId: number
    email: string
    firstName: string
    lastName: string
} & {' $fragmentName'?: 'UserContextInfoFragment'}

export type GetFlairsQueryVariables = Exact<{
    userId: Scalars['Int']['input']
}>

export type GetFlairsQuery = {
    __typename?: 'Query'
    flairs: Array<{__typename?: 'Flair'; userId: number; flairTitle: string}>
}

export type AddFlairMutationVariables = Exact<{
    input: AddFlairInput
}>

export type AddFlairMutation = {
    __typename?: 'Mutation'
    addFlair: {
        __typename?: 'AddFlairPayload'
        flair?: Array<{__typename?: 'Flair'; userId: number; flairTitle: string}> | null
        errors?: Array<{__typename?: 'FlairAlreadyExistsError'; message: string}> | null
    }
}

export type DeleteFlairMutationVariables = Exact<{
    input: DeleteFlairInput
}>

export type DeleteFlairMutation = {
    __typename?: 'Mutation'
    deleteFlair: {
        __typename?: 'DeleteFlairPayload'
        flair?: Array<{__typename?: 'Flair'; userId: number; flairTitle: string}> | null
    }
}

export type GetUserListingsQueryVariables = Exact<{
    userId: Scalars['Int']['input']
}>

export type GetUserListingsQuery = {
    __typename?: 'Query'
    userById?: {
        __typename?: 'User'
        listings: Array<
            {__typename?: 'Listing'} & {
                ' $fragmentRefs'?: {ListingSummaryFragment: ListingSummaryFragment}
            }
        >
    } | null
}

export type OnNewListingSubscriptionVariables = Exact<{
    userId: Scalars['Int']['input']
}>

export type OnNewListingSubscription = {
    __typename?: 'Subscription'
    onNewListing: {__typename?: 'Listing'; listingId: number}
}

export type UserSummaryFragment = {
    __typename?: 'User'
    userId: number
    firstName: string
    lastName: string
    listings: Array<{
        __typename?: 'Listing'
        price: any
        platform: {__typename?: 'Platform'; name: string}
        listingType: {__typename?: 'ListingType'; name: string}
    }>
} & {' $fragmentName'?: 'UserSummaryFragment'}

export type ExchangeInstagramAuthCodeForTokenMutationVariables = Exact<{
    input: ExchangeInstagramAuthCodeForTokenInput
}>

export type ExchangeInstagramAuthCodeForTokenMutation = {
    __typename?: 'Mutation'
    exchangeInstagramAuthCodeForToken: {
        __typename?: 'ExchangeInstagramAuthCodeForTokenPayload'
        connection?: {
            __typename?: 'Connection'
            userId: number
            platformId: number
            handle: string
        } | null
        errors?: Array<{__typename?: 'InstagramOauthError'; message: string}> | null
    }
}

export type AccountConnectedFragment = {
    __typename?: 'Connection'
    userId: number
    platformId: number
    handle: string
} & {' $fragmentName'?: 'AccountConnectedFragment'}

export type OnAccountConnectedSubscriptionVariables = Exact<{
    userId: Scalars['Int']['input']
}>

export type OnAccountConnectedSubscription = {
    __typename?: 'Subscription'
    onAccountConnected: {__typename?: 'Connection'} & {
        ' $fragmentRefs'?: {AccountConnectedFragment: AccountConnectedFragment}
    }
}

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

export type GetUsersQueryVariables = Exact<{
    filter?: InputMaybe<UserFilterInput>
    first?: InputMaybe<Scalars['Int']['input']>
    after?: InputMaybe<Scalars['String']['input']>
    last?: InputMaybe<Scalars['Int']['input']>
    before?: InputMaybe<Scalars['String']['input']>
}>

export type GetUsersQuery = {
    __typename?: 'Query'
    users?: {
        __typename?: 'UsersConnection'
        totalCount: number
        pageInfo: {
            __typename?: 'PageInfo'
            hasPreviousPage: boolean
            hasNextPage: boolean
            startCursor?: string | null
            endCursor?: string | null
        }
        edges?: Array<{
            __typename?: 'UsersEdge'
            cursor: string
            node: {__typename?: 'User'} & {
                ' $fragmentRefs'?: {UserSummaryFragment: UserSummaryFragment}
            }
        }> | null
    } | null
}

export type GetPlatformsQueryVariables = Exact<{[key: string]: never}>

export type GetPlatformsQuery = {
    __typename?: 'Query'
    platforms: Array<{__typename?: 'Platform'; platformId: number; name: string}>
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
        errors?: Array<{__typename?: 'AccountWithEmailAlreadyExistsError'; message: string}> | null
    }
}

export type UserProfileFragment = {
    __typename?: 'User'
    userId: number
    firstName: string
    lastName: string
    listings: Array<
        {__typename?: 'Listing'} & {
            ' $fragmentRefs'?: {ListingSummaryFragment: ListingSummaryFragment}
        }
    >
    flairs: Array<{__typename?: 'Flair'; userId: number; flairTitle: string}>
} & {' $fragmentName'?: 'UserProfileFragment'}

export type GetUserByIdQueryVariables = Exact<{
    userId: Scalars['Int']['input']
}>

export type GetUserByIdQuery = {
    __typename?: 'Query'
    userById?:
        | ({__typename?: 'User'} & {' $fragmentRefs'?: {UserProfileFragment: UserProfileFragment}})
        | null
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
                    {kind: 'Field', name: {kind: 'Name', value: 'description'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'deliverable'}},
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'user'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                                {kind: 'Field', name: {kind: 'Name', value: 'firstName'}},
                                {kind: 'Field', name: {kind: 'Name', value: 'lastName'}},
                                {kind: 'Field', name: {kind: 'Name', value: 'email'}},
                            ],
                        },
                    },
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
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'firstName'},
                                            },
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'lastName'},
                                            },
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
export const UserSummaryFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: {kind: 'Name', value: 'UserSummary'},
            typeCondition: {kind: 'NamedType', name: {kind: 'Name', value: 'User'}},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'firstName'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'lastName'}},
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'listings'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'platform'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'name'}},
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
                                        ],
                                    },
                                },
                                {kind: 'Field', name: {kind: 'Name', value: 'price'}},
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<UserSummaryFragment, unknown>
export const AccountConnectedFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: {kind: 'Name', value: 'AccountConnected'},
            typeCondition: {kind: 'NamedType', name: {kind: 'Name', value: 'Connection'}},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'platformId'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'handle'}},
                ],
            },
        },
    ],
} as unknown as DocumentNode<AccountConnectedFragment, unknown>
export const ListingSummaryFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: {kind: 'Name', value: 'ListingSummary'},
            typeCondition: {kind: 'NamedType', name: {kind: 'Name', value: 'Listing'}},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {kind: 'Field', name: {kind: 'Name', value: 'listingId'}},
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'listingType'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'platform'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'platformId'},
                                            },
                                            {kind: 'Field', name: {kind: 'Name', value: 'name'}},
                                        ],
                                    },
                                },
                                {kind: 'Field', name: {kind: 'Name', value: 'name'}},
                            ],
                        },
                    },
                    {kind: 'Field', name: {kind: 'Name', value: 'price'}},
                ],
            },
        },
    ],
} as unknown as DocumentNode<ListingSummaryFragment, unknown>
export const UserProfileFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: {kind: 'Name', value: 'UserProfile'},
            typeCondition: {kind: 'NamedType', name: {kind: 'Name', value: 'User'}},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'firstName'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'lastName'}},
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'listings'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'FragmentSpread',
                                    name: {kind: 'Name', value: 'ListingSummary'},
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'flairs'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                                {kind: 'Field', name: {kind: 'Name', value: 'flairTitle'}},
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: {kind: 'Name', value: 'ListingSummary'},
            typeCondition: {kind: 'NamedType', name: {kind: 'Name', value: 'Listing'}},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {kind: 'Field', name: {kind: 'Name', value: 'listingId'}},
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'listingType'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'platform'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'platformId'},
                                            },
                                            {kind: 'Field', name: {kind: 'Name', value: 'name'}},
                                        ],
                                    },
                                },
                                {kind: 'Field', name: {kind: 'Name', value: 'name'}},
                            ],
                        },
                    },
                    {kind: 'Field', name: {kind: 'Name', value: 'price'}},
                ],
            },
        },
    ],
} as unknown as DocumentNode<UserProfileFragment, unknown>
export const WhoAmIDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: {kind: 'Name', value: 'WhoAmI'},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'whoAmI'},
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
} as unknown as DocumentNode<WhoAmIQuery, WhoAmIQueryVariables>
export const GetUserConnectionsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: {kind: 'Name', value: 'GetUserConnections'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'Int'}},
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'userById'},
                        arguments: [
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'userId'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'connections'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'platformId'},
                                            },
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
} as unknown as DocumentNode<GetUserConnectionsQuery, GetUserConnectionsQueryVariables>
export const GetListingTypesDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: {kind: 'Name', value: 'GetListingTypes'},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'platforms'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {kind: 'Field', name: {kind: 'Name', value: 'platformId'}},
                                {kind: 'Field', name: {kind: 'Name', value: 'name'}},
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'listingTypes'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'name'}},
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'listingTypeId'},
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
} as unknown as DocumentNode<GetListingTypesQuery, GetListingTypesQueryVariables>
export const AddListingDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: {kind: 'Name', value: 'AddListing'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'AddListingInput'}},
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'addListing'},
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
                                    name: {kind: 'Name', value: 'listing'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'listingId'},
                                            },
                                        ],
                                    },
                                },
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
    ],
} as unknown as DocumentNode<AddListingMutation, AddListingMutationVariables>
export const OrderListingDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: {kind: 'Name', value: 'OrderListing'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'OrderListingInput'}},
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'orderListing'},
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
                                    name: {kind: 'Name', value: 'order'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'orderId'}},
                                        ],
                                    },
                                },
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
    ],
} as unknown as DocumentNode<OrderListingMutation, OrderListingMutationVariables>
export const UpdateListingPriceDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: {kind: 'Name', value: 'UpdateListingPrice'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: {kind: 'Name', value: 'UpdateListingPriceInput'},
                        },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'updateListingPrice'},
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
                                    name: {kind: 'Name', value: 'listing'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'listingId'},
                                            },
                                        ],
                                    },
                                },
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
    ],
} as unknown as DocumentNode<UpdateListingPriceMutation, UpdateListingPriceMutationVariables>
export const AcceptOrderDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: {kind: 'Name', value: 'AcceptOrder'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'AcceptOrderInput'}},
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'acceptOrder'},
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
                                    name: {kind: 'Name', value: 'order'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'orderId'}},
                                        ],
                                    },
                                },
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
    ],
} as unknown as DocumentNode<AcceptOrderMutation, AcceptOrderMutationVariables>
export const RejectOrderDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: {kind: 'Name', value: 'RejectOrder'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'RejectOrderInput'}},
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'rejectOrder'},
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
                                    name: {kind: 'Name', value: 'order'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'orderId'}},
                                        ],
                                    },
                                },
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
    ],
} as unknown as DocumentNode<RejectOrderMutation, RejectOrderMutationVariables>
export const SubmitDeliverableDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: {kind: 'Name', value: 'SubmitDeliverable'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: {kind: 'Name', value: 'SubmitDeliverableInput'},
                        },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'submitDeliverable'},
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
                                    name: {kind: 'Name', value: 'order'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'orderId'}},
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'deliverable'},
                                            },
                                        ],
                                    },
                                },
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
                                                            name: {
                                                                kind: 'Name',
                                                                value: '__typename',
                                                            },
                                                        },
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
    ],
} as unknown as DocumentNode<SubmitDeliverableMutation, SubmitDeliverableMutationVariables>
export const GetOrdersDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: {kind: 'Name', value: 'GetOrders'},
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
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'pov'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'OrderPov'}},
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
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'order'}},
                    type: {
                        kind: 'ListType',
                        type: {
                            kind: 'NonNullType',
                            type: {
                                kind: 'NamedType',
                                name: {kind: 'Name', value: 'OrderSortInput'},
                            },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'orders'},
                        arguments: [
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'userId'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                            },
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'pov'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'pov'}},
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
                                name: {kind: 'Name', value: 'where'},
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: {kind: 'Name', value: 'orderStatusId'},
                                            value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                    {
                                                        kind: 'ObjectField',
                                                        name: {kind: 'Name', value: 'eq'},
                                                        value: {
                                                            kind: 'Variable',
                                                            name: {kind: 'Name', value: 'status'},
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'order'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'order'}},
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
                    {kind: 'Field', name: {kind: 'Name', value: 'description'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'deliverable'}},
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'user'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                                {kind: 'Field', name: {kind: 'Name', value: 'firstName'}},
                                {kind: 'Field', name: {kind: 'Name', value: 'lastName'}},
                                {kind: 'Field', name: {kind: 'Name', value: 'email'}},
                            ],
                        },
                    },
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
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'firstName'},
                                            },
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'lastName'},
                                            },
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
} as unknown as DocumentNode<GetOrdersQuery, GetOrdersQueryVariables>
export const OnNewOrderDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'subscription',
            name: {kind: 'Name', value: 'OnNewOrder'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'Int'}},
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'onNewOrder'},
                        arguments: [
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'userId'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {kind: 'Field', name: {kind: 'Name', value: 'orderId'}},
                                {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                                {kind: 'Field', name: {kind: 'Name', value: 'listingId'}},
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<OnNewOrderSubscription, OnNewOrderSubscriptionVariables>
export const GetFlairsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: {kind: 'Name', value: 'GetFlairs'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'Int'}},
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'flairs'},
                        arguments: [
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'userId'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                                {kind: 'Field', name: {kind: 'Name', value: 'flairTitle'}},
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetFlairsQuery, GetFlairsQueryVariables>
export const AddFlairDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: {kind: 'Name', value: 'AddFlair'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'AddFlairInput'}},
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'addFlair'},
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
                                    name: {kind: 'Name', value: 'flair'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'flairTitle'},
                                            },
                                        ],
                                    },
                                },
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
    ],
} as unknown as DocumentNode<AddFlairMutation, AddFlairMutationVariables>
export const DeleteFlairDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: {kind: 'Name', value: 'DeleteFlair'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'DeleteFlairInput'}},
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'deleteFlair'},
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
                                    name: {kind: 'Name', value: 'flair'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'flairTitle'},
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
} as unknown as DocumentNode<DeleteFlairMutation, DeleteFlairMutationVariables>
export const GetUserListingsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: {kind: 'Name', value: 'GetUserListings'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'Int'}},
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'userById'},
                        arguments: [
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'userId'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'listings'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'FragmentSpread',
                                                name: {kind: 'Name', value: 'ListingSummary'},
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
            name: {kind: 'Name', value: 'ListingSummary'},
            typeCondition: {kind: 'NamedType', name: {kind: 'Name', value: 'Listing'}},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {kind: 'Field', name: {kind: 'Name', value: 'listingId'}},
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'listingType'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'platform'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'platformId'},
                                            },
                                            {kind: 'Field', name: {kind: 'Name', value: 'name'}},
                                        ],
                                    },
                                },
                                {kind: 'Field', name: {kind: 'Name', value: 'name'}},
                            ],
                        },
                    },
                    {kind: 'Field', name: {kind: 'Name', value: 'price'}},
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetUserListingsQuery, GetUserListingsQueryVariables>
export const OnNewListingDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'subscription',
            name: {kind: 'Name', value: 'OnNewListing'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'Int'}},
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'onNewListing'},
                        arguments: [
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'userId'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{kind: 'Field', name: {kind: 'Name', value: 'listingId'}}],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<OnNewListingSubscription, OnNewListingSubscriptionVariables>
export const ExchangeInstagramAuthCodeForTokenDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: {kind: 'Name', value: 'ExchangeInstagramAuthCodeForToken'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: {kind: 'Name', value: 'ExchangeInstagramAuthCodeForTokenInput'},
                        },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'exchangeInstagramAuthCodeForToken'},
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
                                    name: {kind: 'Name', value: 'connection'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'platformId'},
                                            },
                                            {kind: 'Field', name: {kind: 'Name', value: 'handle'}},
                                        ],
                                    },
                                },
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
    ],
} as unknown as DocumentNode<
    ExchangeInstagramAuthCodeForTokenMutation,
    ExchangeInstagramAuthCodeForTokenMutationVariables
>
export const OnAccountConnectedDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'subscription',
            name: {kind: 'Name', value: 'OnAccountConnected'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'Int'}},
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'onAccountConnected'},
                        arguments: [
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'userId'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'FragmentSpread',
                                    name: {kind: 'Name', value: 'AccountConnected'},
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: {kind: 'Name', value: 'AccountConnected'},
            typeCondition: {kind: 'NamedType', name: {kind: 'Name', value: 'Connection'}},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'platformId'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'handle'}},
                ],
            },
        },
    ],
} as unknown as DocumentNode<
    OnAccountConnectedSubscription,
    OnAccountConnectedSubscriptionVariables
>
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
export const GetUsersDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: {kind: 'Name', value: 'GetUsers'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'filter'}},
                    type: {kind: 'NamedType', name: {kind: 'Name', value: 'UserFilterInput'}},
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
                        name: {kind: 'Name', value: 'users'},
                        arguments: [
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'where'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'filter'}},
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
                                                    name: {kind: 'Name', value: 'firstName'},
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
                                                                value: 'UserSummary',
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
            name: {kind: 'Name', value: 'UserSummary'},
            typeCondition: {kind: 'NamedType', name: {kind: 'Name', value: 'User'}},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'firstName'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'lastName'}},
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'listings'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'platform'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {kind: 'Field', name: {kind: 'Name', value: 'name'}},
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
                                        ],
                                    },
                                },
                                {kind: 'Field', name: {kind: 'Name', value: 'price'}},
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>
export const GetPlatformsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: {kind: 'Name', value: 'GetPlatforms'},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'platforms'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {kind: 'Field', name: {kind: 'Name', value: 'platformId'}},
                                {kind: 'Field', name: {kind: 'Name', value: 'name'}},
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetPlatformsQuery, GetPlatformsQueryVariables>
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
export const GetUserByIdDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: {kind: 'Name', value: 'GetUserById'},
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                    type: {
                        kind: 'NonNullType',
                        type: {kind: 'NamedType', name: {kind: 'Name', value: 'Int'}},
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'userById'},
                        arguments: [
                            {
                                kind: 'Argument',
                                name: {kind: 'Name', value: 'userId'},
                                value: {kind: 'Variable', name: {kind: 'Name', value: 'userId'}},
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'FragmentSpread',
                                    name: {kind: 'Name', value: 'UserProfile'},
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: {kind: 'Name', value: 'ListingSummary'},
            typeCondition: {kind: 'NamedType', name: {kind: 'Name', value: 'Listing'}},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {kind: 'Field', name: {kind: 'Name', value: 'listingId'}},
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'listingType'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: {kind: 'Name', value: 'platform'},
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {kind: 'Name', value: 'platformId'},
                                            },
                                            {kind: 'Field', name: {kind: 'Name', value: 'name'}},
                                        ],
                                    },
                                },
                                {kind: 'Field', name: {kind: 'Name', value: 'name'}},
                            ],
                        },
                    },
                    {kind: 'Field', name: {kind: 'Name', value: 'price'}},
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: {kind: 'Name', value: 'UserProfile'},
            typeCondition: {kind: 'NamedType', name: {kind: 'Name', value: 'User'}},
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'firstName'}},
                    {kind: 'Field', name: {kind: 'Name', value: 'lastName'}},
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'listings'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'FragmentSpread',
                                    name: {kind: 'Name', value: 'ListingSummary'},
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'flairs'},
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {kind: 'Field', name: {kind: 'Name', value: 'userId'}},
                                {kind: 'Field', name: {kind: 'Name', value: 'flairTitle'}},
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>
