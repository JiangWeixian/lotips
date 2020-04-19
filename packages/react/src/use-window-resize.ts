import { useState, useEffect } from 'react'

export const useWindowResize = () => {
  const [resizeing, setResizing] = useState(false)
  useEffect(() => {
    const listener = () => {
      setResizing(true)
    }
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])
  return {
    resizeing,
  }
}
