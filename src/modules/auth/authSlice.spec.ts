import { describe, test, expect } from 'vitest'

import { setupStore } from '../../store'

import { setCredentials } from './authSlice'

describe('AuthSlice', async () => {
  test('should check initial state', () => {
    const store = setupStore()
    const { auth } = store.getState()

    expect(auth).toStrictEqual({
      user: undefined,
      sessionToken: undefined,
      clientMutationId: undefined,
    })
  })

  test('should dispatch setCredentials', () => {
    const store = setupStore()

    const mockCredentials = {
      user: {
        email: 'teste@email.com',
        id: '123',
        username: 'teste',
      },
      clientMutationId: '1234',
      sessionToken: 'token',
    }

    const { type, payload } = store.dispatch(setCredentials(mockCredentials))

    expect(type).toBe('auth/setCredentials')

    expect(payload).toStrictEqual(mockCredentials)
  })
})
