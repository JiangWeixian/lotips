import { useEffect, useCallback } from 'react'

/**
 * @description get real vh on mobile device
 * @see {@link https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser}
 * @warning if window resize, should exec setRealHeight again
 */
export const useVH = () => {
  const setRealHeight = useCallback(() => {
    const h = window.innerHeight
    document.documentElement.style.setProperty('--real-vh', `${h * 0.01}`)
  }, [])
  useEffect(() => {
    setRealHeight()
  }, [setRealHeight])
  return {
    setRealHeight,
  }
}
