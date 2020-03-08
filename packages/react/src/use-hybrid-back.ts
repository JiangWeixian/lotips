/**
 *
 */

import { useState, useCallback, useRef } from 'react'

export const useHybridBack = (closeSchema = '') => {
  const [herf, setHerf] = useState(window.location.href)
  const clock = useRef<number>()
  const handleBack = useCallback(() => {
    clearTimeout(clock.current)
    window.history.go(-1)
    clock.current = window.setTimeout(() => {
      if (window.location.href === herf) {
        window.location.href == closeSchema
        return
      }
      setHerf(window.location.href)
      clearTimeout(clock.current)
    }, 300)
  }, [herf, closeSchema])
  return {
    handleBack,
  }
}
