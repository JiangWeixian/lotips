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
 * NOTE:
 * - 但有时数据是来自redux的异步获取，在以下假设下该hook比较实用。没有相应的state action，或者不需要相应的state action
 * WARNING:
 * - 适合对同一个ID的对象进行修改。在`Form`中的涉及到重复的初始化的情况，不太合适`useAsyncState`
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
