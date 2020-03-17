import useSWR from 'swr'
import { useState, useCallback, useMemo, useRef } from 'react'
import debounce from 'lodash.debounce'

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
}

export const usePage = <T, F>({
  limit = 15,
  debounceInterval = 300,
  ...props
}: UsePageProps<T, F>) => {
  const [page, setPage] = useState(0)
  const [filter, setFilter] = useState(props.defaultFilter)
  const fetcher = useRef(debounce(props.api, debounceInterval))
  const { data } = useSWR([page, filter, props.name], async (v: number, f: F) => {
    return fetcher.current(v * limit, limit, f)
  })
  const total = useMemo(() => {
    return data?.count || data?.total || 0
  }, [data?.count, data?.total])
  const pages = useMemo(() => {
    return Math.round(total / limit)
  }, [total, limit])
  const next = useCallback(() => {
    setPage(prev => prev + 1)
  }, [page])
  const prev = useCallback(() => {
    setPage(prev => prev - 1)
  }, [page])
  const go = useCallback(v => {
    setPage(v)
  }, [])
  const changeFilter = useCallback((f: F) => {
    setFilter(prev => ({ ...prev, ...f }))
  }, [])
  const resetFilter = useCallback(() => {
    setFilter(props.defaultFilter)
  }, [props.defaultFilter])
  const changeSingleFilter = useCallback(<K extends keyof F>(k: K, v: F[K]) => {
    setFilter(
      prev =>
        ({
          ...prev,
          [k]: v,
        } as F),
    )
  }, [])
  return {
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
