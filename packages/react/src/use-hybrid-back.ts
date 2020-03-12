/**
 * WHY:
 * 在hybrid页面中，当通过router.go(-1)进行回退操作的，回退到首页之后是无法通过`router.go(-1)`关闭页面的
 * NOTE:
 * 可能不是最好的解决方案
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
