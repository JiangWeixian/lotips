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

export const useLoadMore = <T, L, F>({
  debounceInterval = 300,
  revalidateOnFilter = true,
  ...props
}: UseLoadMore<T, L, F>) => {
  const [loadMoreKey, setLoadMoreKey] = useState<L>()
  const [filter, setFilter] = useState(props.defaultFilter)
  const fetcher = useRef(debounce(props.api, debounceInterval))
  const { data, revalidate } = useSWR(props.name, async () => {
    const { data, loadMoreKey: newLoadMoreKey } = await fetcher.current(loadMoreKey, filter)
    setLoadMoreKey(newLoadMoreKey)
    return data
  })
  const loadmore = useCallback(() => {
    mutate(props.name, async (v: T[]) => {
      const { data, loadMoreKey: newLoadMoreKey } = await fetcher.current(loadMoreKey, filter)
      setLoadMoreKey(newLoadMoreKey)
      return v.concat(data || [])
    })
  }, [props.name, loadMoreKey, filter])
  const changeFilter = useCallback(
    (f: F) => {
      setFilter(prev => ({ ...prev, ...f }))
    },
    [revalidate],
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
    loadmore,
    changeFilter,
    resetFilter,
    changeSingleFilter,
  }
}
