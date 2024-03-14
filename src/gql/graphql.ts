/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  /** The built-in `Decimal` scalar type. */
  Decimal: { input: any; output: any; }
};

export type AddConnectionInput = {
  accountHandle: Scalars['String']['input'];
  apiToken: Scalars['String']['input'];
  platformId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type AddConnectionPayload = {
  __typename?: 'AddConnectionPayload';
  connection?: Maybe<Array<Connection>>;
};

export type AddListingInput = {
  listingTypeId: Scalars['Int']['input'];
  price: Scalars['Decimal']['input'];
  userId: Scalars['Int']['input'];
};

export type AddListingPayload = {
  __typename?: 'AddListingPayload';
  listing?: Maybe<Array<Listing>>;
};

export type AddUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AddUserPayload = {
  __typename?: 'AddUserPayload';
  user?: Maybe<User>;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
  Validation = 'VALIDATION'
}

export type Connection = {
  __typename?: 'Connection';
  connectionId: Scalars['Int']['output'];
  handle: Scalars['String']['output'];
  platform: Platform;
  platformId: Scalars['Int']['output'];
  token: Scalars['String']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type ConnectionFilterInput = {
  and?: InputMaybe<Array<ConnectionFilterInput>>;
  connectionId?: InputMaybe<IntOperationFilterInput>;
  handle?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ConnectionFilterInput>>;
  platform?: InputMaybe<PlatformFilterInput>;
  platformId?: InputMaybe<IntOperationFilterInput>;
  token?: InputMaybe<StringOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<IntOperationFilterInput>;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  neq?: InputMaybe<Scalars['Decimal']['input']>;
  ngt?: InputMaybe<Scalars['Decimal']['input']>;
  ngte?: InputMaybe<Scalars['Decimal']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  nlt?: InputMaybe<Scalars['Decimal']['input']>;
  nlte?: InputMaybe<Scalars['Decimal']['input']>;
};

export type DeleteUserInput = {
  userId: Scalars['Int']['input'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  user?: Maybe<User>;
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ListFilterInputTypeOfConnectionFilterInput = {
  all?: InputMaybe<ConnectionFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ConnectionFilterInput>;
  some?: InputMaybe<ConnectionFilterInput>;
};

export type ListFilterInputTypeOfListingFilterInput = {
  all?: InputMaybe<ListingFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ListingFilterInput>;
  some?: InputMaybe<ListingFilterInput>;
};

export type ListFilterInputTypeOfListingTypeFilterInput = {
  all?: InputMaybe<ListingTypeFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ListingTypeFilterInput>;
  some?: InputMaybe<ListingTypeFilterInput>;
};

export type ListFilterInputTypeOfOrderFilterInput = {
  all?: InputMaybe<OrderFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<OrderFilterInput>;
  some?: InputMaybe<OrderFilterInput>;
};

export type Listing = {
  __typename?: 'Listing';
  endDate?: Maybe<Scalars['DateTime']['output']>;
  listingId: Scalars['Int']['output'];
  listingType: ListingType;
  listingTypeId: Scalars['Int']['output'];
  price: Scalars['Decimal']['output'];
  startDate: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type ListingFilterInput = {
  and?: InputMaybe<Array<ListingFilterInput>>;
  endDate?: InputMaybe<DateTimeOperationFilterInput>;
  listingId?: InputMaybe<IntOperationFilterInput>;
  listingType?: InputMaybe<ListingTypeFilterInput>;
  listingTypeId?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<ListingFilterInput>>;
  price?: InputMaybe<DecimalOperationFilterInput>;
  startDate?: InputMaybe<DateTimeOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<IntOperationFilterInput>;
};

export type ListingType = {
  __typename?: 'ListingType';
  listingTypeId: Scalars['Int']['output'];
  listings: Array<Listing>;
  name: Scalars['String']['output'];
  platform: Platform;
  platformId: Scalars['Int']['output'];
};

export type ListingTypeFilterInput = {
  and?: InputMaybe<Array<ListingTypeFilterInput>>;
  listingTypeId?: InputMaybe<IntOperationFilterInput>;
  listings?: InputMaybe<ListFilterInputTypeOfListingFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ListingTypeFilterInput>>;
  platform?: InputMaybe<PlatformFilterInput>;
  platformId?: InputMaybe<IntOperationFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addConnection: AddConnectionPayload;
  addListing: AddListingPayload;
  addUser: AddUserPayload;
  deleteUser: DeleteUserPayload;
  updatePassword: UpdatePasswordPayload;
};


export type MutationAddConnectionArgs = {
  input: AddConnectionInput;
};


export type MutationAddListingArgs = {
  input: AddListingInput;
};


export type MutationAddUserArgs = {
  input: AddUserInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordInput;
};

export type Order = {
  __typename?: 'Order';
  listing: Listing;
  listingId: Scalars['Int']['output'];
  orderDate: Scalars['DateTime']['output'];
  orderId: Scalars['Int']['output'];
  orderStatus: OrderStatus;
  price: Scalars['Decimal']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type OrderFilterInput = {
  and?: InputMaybe<Array<OrderFilterInput>>;
  listing?: InputMaybe<ListingFilterInput>;
  listingId?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<OrderFilterInput>>;
  orderDate?: InputMaybe<DateTimeOperationFilterInput>;
  orderId?: InputMaybe<IntOperationFilterInput>;
  orderStatus?: InputMaybe<OrderStatusOperationFilterInput>;
  price?: InputMaybe<DecimalOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<IntOperationFilterInput>;
};

export enum OrderStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Pending = 'PENDING'
}

export type OrderStatusOperationFilterInput = {
  eq?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  neq?: InputMaybe<OrderStatus>;
  nin?: InputMaybe<Array<OrderStatus>>;
};

export type Platform = {
  __typename?: 'Platform';
  listingTypes: Array<ListingType>;
  name: Scalars['String']['output'];
  platformId: Scalars['Int']['output'];
};

export type PlatformFilterInput = {
  and?: InputMaybe<Array<PlatformFilterInput>>;
  listingTypes?: InputMaybe<ListFilterInputTypeOfListingTypeFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PlatformFilterInput>>;
  platformId?: InputMaybe<IntOperationFilterInput>;
};

export type Query = {
  __typename?: 'Query';
  jwtToken: Scalars['String']['output'];
  orders: Array<Order>;
  platforms: Array<Platform>;
  userById?: Maybe<User>;
  users: Array<User>;
  validateUser: User;
};


export type QueryOrdersArgs = {
  where?: InputMaybe<OrderFilterInput>;
};


export type QueryUserByIdArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryValidateUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePasswordInput = {
  password: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type UpdatePasswordPayload = {
  __typename?: 'UpdatePasswordPayload';
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  connections: Array<Connection>;
  email: Scalars['String']['output'];
  listings: Array<Listing>;
  orders: Array<Order>;
  password: Scalars['String']['output'];
  userId: Scalars['Int']['output'];
};

export type UserFilterInput = {
  and?: InputMaybe<Array<UserFilterInput>>;
  connections?: InputMaybe<ListFilterInputTypeOfConnectionFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  listings?: InputMaybe<ListFilterInputTypeOfListingFilterInput>;
  or?: InputMaybe<Array<UserFilterInput>>;
  orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>;
  password?: InputMaybe<StringOperationFilterInput>;
  userId?: InputMaybe<IntOperationFilterInput>;
};
