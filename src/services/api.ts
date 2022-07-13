import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { GraphQLClient } from 'graphql-request'

import { RootState } from '../store'

export const client = new GraphQLClient(
  `${import.meta.env.VITE_API_URL}/graphql`,
  {
    headers: {
      'X-Parse-Application-Id': import.meta.env.VITE_PARSE_APPLICATION_ID,
      'X-Parse-Master-Key': import.meta.env.VITE_PARSE_MASTER_KEY,
      'X-Parse-Client-Key': import.meta.env.VITE_PARSE_CLIENT_KEY,
    },
  }
)

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    client,
    prepareHeaders: (headers, { getState }) => {
      const { sessionToken } = (getState() as RootState).auth

      if (sessionToken) {
        headers.set('X-Parse-Session-Token', sessionToken)
      }
      return headers
    },
    customErrors(args) {
      console.log(args)
    },
  }),
  endpoints: () => ({}),
})
