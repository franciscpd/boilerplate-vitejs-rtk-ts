export interface ILogin {
  username: String
  password: String
}

export interface UserState {
  id: String
  username: String
  email: String
}

export type AuthState = {
  user?: UserState
  sessionToken?: string
  clientMutationId?: string
}
