/**
 * WHY:
 * component ref只能用于一些已经挂载的元素。但是一般都是使用`useRef`存储，本身是一个无状态的行为。所以需要额外进行标识。
 */

import { useState, useEffect } from 'react'

export const useMount = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return mounted
}
