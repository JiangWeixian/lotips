import { useState, useMemo } from 'react'

export type UseAsyncStateProps = {
  nullistate?: any
}

export const useAsyncState = <T>(
  value?: T,
  { nullistate = undefined }: UseAsyncStateProps = { nullistate: undefined },
) => {
  const [state, set] = useState<T>()
  const get = useMemo(() => {
    return state === nullistate ? value : state
  }, [value, state, nullistate])
  return [get, set] as [T, React.Dispatch<React.SetStateAction<T>>]
}
