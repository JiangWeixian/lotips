/**
 * WHY:
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
import React from 'react'
export declare type UseAsyncStateProps = {
  nullstate?: any
}
export declare const useAsyncState: <T>(
  value?: T | undefined,
  { nullstate }?: UseAsyncStateProps,
) => [T, React.Dispatch<React.SetStateAction<T>>]
