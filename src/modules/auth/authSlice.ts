import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../store'

import { UserState, AuthState } from './types'

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
    sessionToken: undefined,
    clientMutationId: undefined,
  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, sessionToken, clientMutationId },
      }: PayloadAction<{
        user: UserState
        sessionToken: string
        clientMutationId: string
      }>
    ) => {
      state.user = user
      state.sessionToken = sessionToken
      state.clientMutationId = clientMutationId
    },
  },
})

export const { setCredentials } = slice.actions

export default slice.reducer

export const getCurrentUser = (state: RootState) => state.auth.user
