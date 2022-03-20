import { useState, useEffect } from 'react'

type UseDebounceProps<T = any> = {
  interval?: number
  defaultValue?: T
}

/**
 * @description set value in debounce mode
 */
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
