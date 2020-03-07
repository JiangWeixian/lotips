/**
 * 场景类似
 * ```tsx
 * const [state, setState] = useState()
 * useEffect(() => {
 *  const fetch = async () => {
 *     const data = await api()
 *     setState(data)
 *  }
 * }, [])
 * 但有时数据是来自redux的异步获取，在以下假设下该hook比较实用
 * - 没有相应的state action，或者不需要相应的state action
 * ```
 */

import { useState, useMemo } from 'react'

export type UseAsyncStateProps = {
  nullstate?: any
}

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
