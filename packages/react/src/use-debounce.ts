/**
 * WHY:
 * a debounced hooks
 * USAGE:
 * 正常使用setValue即可
 * NOTE:
 * （以修改filter为例）
 * - debouncedValue - 是最后生效的数据，用于数据请求
 * - value - 实际修改的数据，用于数据展示
 */

import { useState, useEffect } from 'react'

type UseDebounceProps<T = any> = {
  interval?: number
  defaultValue?: T
}

export const useDebounce = <T>({ interval, ...props }: UseDebounceProps<T>) => {
  const [value, setValue] = useState<T | undefined>(props.defaultValue)
  const [debouncedValue, setDebouncedValue] = useState<T | undefined>(props.defaultValue)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, interval)
    return () => {
      clearTimeout(timer)
    }
  }, [value, interval])
  return {
    value,
    debouncedValue,
    setValue,
  }
}
