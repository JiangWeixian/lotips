import React, { useState, useMemo } from 'react'

export type UseAsyncStateProps = {
  nullstate?: any
}

/**
 * @description async init default data
 */
export const useAsyncState = <T>(
  value?: T,
  { nullstate = undefined }: UseAsyncStateProps = { nullstate: undefined },
) => {
  const [state, set] = useState<T>(nullstate)
  const get = useMemo(() => {
    return state === nullstate ? value : state
  }, [value, state, nullstate])
  return [get, set] as [T, React.Dispatch<React.SetStateAction<T>>]
}
