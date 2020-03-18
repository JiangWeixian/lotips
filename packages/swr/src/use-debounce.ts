import { useState, useEffect } from 'react'

type UseDebounceProps<T = any> = {
  interval?: number
  defaultValue?: T
}

export const useDebounce = <T>({ interval, ...props }: UseDebounceProps<T>) => {
  const [value, setValue] = useState<T>()
  const [debouncedValue, setDebouncedValue] = useState<T>()
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
