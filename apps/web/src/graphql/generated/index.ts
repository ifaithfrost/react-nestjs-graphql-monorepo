import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | undefined
export type InputMaybe<T> = T | undefined
export type Exact<T extends Record<string, unknown>> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends Record<string, unknown>, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type AuthPayload = {
  __typename?: 'AuthPayload'
  refreshToken?: Maybe<Scalars['String']['output']>
  token?: Maybe<Scalars['String']['output']>
  user?: Maybe<User>
}

export type LoginInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type Mutation = {
  __typename?: 'Mutation'
  login?: Maybe<AuthPayload>
  signUp?: Maybe<Scalars['String']['output']>
}

export type MutationLoginArgs = {
  loginInput?: InputMaybe<LoginInput>
}

export type MutationSignUpArgs = {
  signUpInput?: InputMaybe<SignUpInput>
}

export type Query = {
  __typename?: 'Query'
  user?: Maybe<User>
}

export type SignUpInput = {
  email: Scalars['String']['input']
  name: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type User = {
  __typename?: 'User'
  email: Scalars['String']['output']
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
}

export type MutationMutationVariables = Exact<{
  signUpInput?: InputMaybe<SignUpInput>
}>

export type MutationMutation = { __typename?: 'Mutation'; signUp?: string | undefined }

export const MutationDocument = gql`
  mutation Mutation($signUpInput: SignUpInput) {
    signUp(signUpInput: $signUpInput)
  }
`
export type MutationMutationFn = Apollo.MutationFunction<
  MutationMutation,
  MutationMutationVariables
>

/**
 * __useMutationMutation__
 *
 * To run a mutation, you first call `useMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationMutation, { data, loading, error }] = useMutationMutation({
 *   variables: {
 *      signUpInput: // value for 'signUpInput'
 *   },
 * });
 */
export function useMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<MutationMutation, MutationMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<MutationMutation, MutationMutationVariables>(MutationDocument, options)
}
export type MutationMutationHookResult = ReturnType<typeof useMutationMutation>
export type MutationMutationResult = Apollo.MutationResult<MutationMutation>
export type MutationMutationOptions = Apollo.BaseMutationOptions<
  MutationMutation,
  MutationMutationVariables
>
