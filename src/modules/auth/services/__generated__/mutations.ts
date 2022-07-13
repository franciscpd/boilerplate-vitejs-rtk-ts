/* eslint-disable */ /**
 *
 * THIS FILE IS AUTOGENERATED, DO NOT EDIT IT!
 *
 * instead, edit one of the `.graphql` files in this project and run
 *
 * npm run graphql-codegen
 *
 * for this file to be re-created
 */

import * as Types from '../../../../services/types.generated';

import { api } from '../../../../services/api';
module.hot?.accept();
export type LogInMutationVariables = Types.Exact<{
  username: Types.Scalars['String'];
  password: Types.Scalars['String'];
}>;


export type LogInMutation = { __typename?: 'Mutation', logIn?: { __typename?: 'LogInPayload', viewer: { __typename?: 'Viewer', sessionToken: string, user: { __typename?: 'User', id: string, username?: string } } } };

export type LogOutMutationVariables = Types.Exact<{
  clientMutationId: Types.Scalars['String'];
}>;


export type LogOutMutation = { __typename?: 'Mutation', logOut?: { __typename?: 'LogOutPayload', ok: boolean } };


export const LogInDocument = `
    mutation logIn($username: String!, $password: String!) {
  logIn(input: {username: $username, password: $password}) {
    viewer {
      sessionToken
      user {
        id
        username
      }
    }
  }
}
    `;
export const LogOutDocument = `
    mutation logOut($clientMutationId: String!) {
  logOut(input: {clientMutationId: $clientMutationId}) {
    ok
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  overrideExisting: module.hot?.status() === "apply",
  endpoints: (build) => ({
    logIn: build.mutation<LogInMutation, LogInMutationVariables>({
      query: (variables) => ({ document: LogInDocument, variables })
    }),
    logOut: build.mutation<LogOutMutation, LogOutMutationVariables>({
      query: (variables) => ({ document: LogOutDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useLogInMutation, useLogOutMutation } = injectedRtkApi;

