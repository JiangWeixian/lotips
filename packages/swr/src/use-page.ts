import useSWR from 'swr'
import { useState, useCallback, useMemo, useRef } from 'react'
import { useDebounce } from './use-debounce'

type UsePageProps<T = any, F = any> = {
  name: string
  defaultFilter?: F
  debounceInterval?: number
  api(
    skip: number,
    limit: number,
    query?: F,
  ): Promise<{ data: T[]; total?: number; count?: number }>
  limit?: number
  revalidateOnFilter?: boolean
}

export const usePage = <T, F>({
  limit = 15,
  debounceInterval = 300,
  revalidateOnFilter = true,
  ...props
}: UsePageProps<T, F>) => {
  const [page, setPage] = useState(0)
  const { value: filter, debouncedValue: debouncedFilter, setValue: setFilter } = useDebounce({
    interval: debounceInterval,
    defaultValue: props.defaultFilter,
  })
  const cachedFilter = useRef(props.defaultFilter)
  const { data, revalidate } = useSWR(
    [props.name, page, debouncedFilter],
    async (_name: string, p: number, f: F) => {
      return props.api(p * limit, limit, f)
    },
  )
  const total = useMemo(() => {
    return data?.count || data?.total || 0
  }, [data?.count, data?.total])
  const pages = useMemo(() => {
    return Math.round(total / limit)
  }, [total, limit])
  const list = useCallback(() => {
    if (revalidateOnFilter) {
      revalidate()
    } else {
      setFilter(cachedFilter.current)
    }
  }, [revalidate, revalidateOnFilter, setFilter])
  const next = useCallback(() => {
    setPage(prev => prev + 1)
  }, [page])
  const prev = useCallback(() => {
    setPage(prev => prev - 1)
  }, [page])
  const go = useCallback(v => {
    setPage(v)
  }, [])
  const changeFilter = useCallback(
    (f: F) => {
      if (revalidateOnFilter) {
        setFilter(prev => ({ ...prev, ...f }))
      } else {
        cachedFilter.current = { ...cachedFilter.current, ...f }
      }
    },
    [revalidateOnFilter, setFilter],
  )
  const resetFilter = useCallback(() => {
    if (revalidateOnFilter) {
      setFilter(props.defaultFilter)
    } else {
      cachedFilter.current = props.defaultFilter
    }
  }, [props.defaultFilter, revalidateOnFilter, setFilter])
  const changeSingleFilter = useCallback(
    <K extends keyof NonNullable<F>>(k: K, v: NonNullable<F>[K]) => {
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
    [revalidateOnFilter, setFilter],
  )
  return {
    data: data?.data,
    list,
    filter,
    total,
    pages,
    current: page + 1,
    next,
    prev,
    go,
    changeFilter,
    changeSingleFilter,
    resetFilter,
  }
}
