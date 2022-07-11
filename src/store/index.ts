import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counter-slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
  },
  devTools: import.meta.env.PROD,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
