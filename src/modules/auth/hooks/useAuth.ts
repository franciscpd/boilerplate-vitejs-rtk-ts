import { useMemo } from 'react'

import { useAppSelector } from '../../../hooks/store'
import { getCurrentUser } from '../authSlice'

const useAuth = () => {
  const user = useAppSelector(getCurrentUser)

  return useMemo(() => ({ user }), [user])
}

export default useAuth
