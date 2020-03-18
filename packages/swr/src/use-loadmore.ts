import { useState, useRef, useCallback } from 'react'
import useSWR from 'swr'
import { useDebounce } from './use-debounce'

type UseLoadMore<T = any, L = any, F = any> = {
  name: string
  defaultFilter?: F
  debounceInterval?: number
  api(loadMoreKey?: L, filter?: F): Promise<{ data: T[]; loadMoreKey: L }>
  revalidateOnFilter?: boolean
}

const EMPTY_DATA: any[] = []

export const useLoadMore = <T = any, L = any, F = any>({
  debounceInterval = 300,
  revalidateOnFilter = true,
  ...props
}: UseLoadMore<T, L, F>) => {
  const [loadMoreKey, setLoadMoreKey] = useState<L>()
  const [allData, setAllData] = useState<T[]>(EMPTY_DATA)
  const cachedLoadMoreKey = useRef<L>()
  const cachedFilter = useRef(props.defaultFilter)
  const { value: filter, debouncedValue: debouncedFilter, setValue: setFilter } = useDebounce({
    interval: debounceInterval,
    defaultValue: props.defaultFilter,
  })
  const { data, revalidate, isValidating } = useSWR(
    [props.name, loadMoreKey, debouncedFilter],
    async (_name, l: L, f: F) => {
      const { data, loadMoreKey: newLoadMoreKey } = await props.api(l, f)
      setAllData(prev => prev.concat(data))
      cachedLoadMoreKey.current = newLoadMoreKey
      return { data, loadMoreKey: newLoadMoreKey }
    },
  )
  const loadmore = useCallback(
    (reset?: boolean) => {
      if (reset) {
        setAllData(EMPTY_DATA)
        revalidate()
        return
      }
      if (revalidateOnFilter) {
        setLoadMoreKey(cachedLoadMoreKey.current)
      } else {
        setFilter(cachedFilter.current)
        setLoadMoreKey(cachedLoadMoreKey.current)
      }
    },
    [props.name, filter, revalidate, revalidateOnFilter],
  )
  const changeFilter = useCallback(
    (f: F) => {
      if (revalidateOnFilter) {
        setFilter(prev => ({ ...prev, ...f }))
      } else {
        cachedFilter.current = { ...cachedFilter.current, ...f }
      }
    },
    [revalidate, revalidateOnFilter],
  )
  const resetFilter = useCallback(() => {
    if (revalidateOnFilter) {
      setFilter(props.defaultFilter)
    } else {
      cachedFilter.current = props.defaultFilter
    }
  }, [props.defaultFilter, revalidate, revalidateOnFilter])
  const changeSingleFilter = useCallback(
    <K extends keyof F>(k: K, v: F[K]) => {
      if (revalidateOnFilter) {
        setFilter(
          prev =>
            ({
              ...prev,
              [k]: v,
            } as F),
        )
      } else {
        cachedFilter.current = {
          ...cachedFilter.current,
          [k]: v,
        } as F
      }
    },
    [revalidate, revalidateOnFilter],
  )
  return {
    loadMoreKey: data?.loadMoreKey,
    data: allData,
    loading: isValidating,
    filter,
    loadmore,
    changeFilter,
    resetFilter,
    changeSingleFilter,
  }
}
