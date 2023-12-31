export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Mutation = {
  __typename?: 'Mutation'
  updateUser: UserResponse
}

export type MutationUpdateUserArgs = {
  input: UpdateUserInput
}

export type Query = {
  __typename?: 'Query'
  currentUser: UserResponse
}

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>
  id: Scalars['ID']
  image?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  email?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type UserResponse = {
  __typename?: 'UserResponse'
  user: User
}
