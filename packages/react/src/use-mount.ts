import { useState, useEffect } from 'react'

/**
 * @description is mounted hook
 */
export const useMount = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return mounted
}
