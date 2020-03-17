import { useState, useRef, useCallback } from 'react'
import useSWR, { mutate } from 'swr'
import debounce from 'lodash.debounce'

type UseLoadMore<T = any, L = any, F = any> = {
  name: string
  defaultFilter?: F
  debounceInterval?: number
  api(loadMoreKey?: L, filter?: F): Promise<{ data: T[]; loadMoreKey: L }>
  revalidateOnFilter?: boolean
}

export const useLoadMore = <T = any, L = any, F = any>({
  debounceInterval = 300,
  revalidateOnFilter = true,
  ...props
}: UseLoadMore<T, L, F>) => {
  const [loadMoreKey, setLoadMoreKey] = useState<L>()
  const cachedLoadMoreKey = useRef<L>()
  const [filter, setFilter] = useState(props.defaultFilter)
  const fetcher = useRef(debounce(props.api, debounceInterval))
  const { data, revalidate } = useSWR(
    [props.name, loadMoreKey, filter],
    async (_name, l: L, f: F) => {
      const { data, loadMoreKey: newLoadMoreKey } = await fetcher.current(l, f)
      cachedLoadMoreKey.current = newLoadMoreKey
      return data
    },
  )
  const loadmore = useCallback(
    (reset?: boolean) => {
      if (reset) {
        setLoadMoreKey(cachedLoadMoreKey.current)
        return
      }
      mutate(
        [props.name, loadMoreKey, filter],
        async (v: T[]) => {
          const { data, loadMoreKey: newLoadMoreKey } = await fetcher.current(
            cachedLoadMoreKey.current,
            filter,
          )
          cachedLoadMoreKey.current = newLoadMoreKey
          return v.concat(data || [])
        },
        false,
      )
    },
    [props.name, loadMoreKey, filter, revalidate],
  )
  const changeFilter = useCallback(
    (f: F) => {
      setFilter(prev => ({ ...prev, ...f }))
    },
    [revalidate, revalidateOnFilter],
  )
  const resetFilter = useCallback(() => {
    setFilter(props.defaultFilter)
  }, [props.defaultFilter, revalidate])
  const changeSingleFilter = useCallback(
    <K extends keyof F>(k: K, v: F[K]) => {
      setFilter(
        prev =>
          ({
            ...prev,
            [k]: v,
          } as F),
      )
    },
    [revalidate],
  )
  return {
    loadMoreKey,
    data,
    filter,
    loadmore,
    changeFilter,
    resetFilter,
    changeSingleFilter,
  }
}
