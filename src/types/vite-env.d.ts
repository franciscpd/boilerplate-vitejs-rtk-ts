export interface ImportMetaEnv {
  readonly VITE_PARSE_APPLICATION_ID: string
  readonly VITE_PARSE_MASTER_KEY: string
  readonly VITE_PARSE_CLIENT_KEY: string
  readonly VITE_API_URL: string
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}
