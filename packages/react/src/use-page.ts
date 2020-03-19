import React, { useCallback, useRef } from 'react'
import { useRematchReducer } from 'use-rematch-reducer'
import debounce from 'lodash.debounce'
import uniqby from 'lodash.uniqby'
import keyby from 'lodash.keyby'
import xor from 'lodash.xor'

const defaultState2Query = <T, F>(state: State<T, F>) => {
  return { skip: (state.current - 1) * state.limit, limit: state.limit, filter: state.filter }
}

type UsePageProps<T, F> = {
  ref?: React.MutableRefObject<HTMLElement>
  api(query: { skip: number; limit: number; filter?: F }): Promise<{ data: T[]; total?: number }>
  defaultFilter?: F
  state2Query: (state: State<T, F>) => { skip: number; limit: number; filter?: F }
  dataKey?: string
  limit?: number
}

type State<T, F> = {
  /**
   * original list data from api
   */
  data: T[]
  status?: 'loading' | 'error' | 'loaded'
  total: number
  pages: number
  current: number
  limit: number
  ids: string[]
  filter?: F
  entries: {
    [key: string]: T
  }
  selected: string[]
  dataKey: string
}

export const usePage = <T, F>({
  limit = 10,
  defaultFilter = undefined,
  state2Query = defaultState2Query,
  dataKey = 'id',
  ...props
}: UsePageProps<T, F>) => {
  const fetcher = useRef(debounce(props.api, 300))
  const [state, dispatch] = useRematchReducer({
    name: 'use-page',
    state: {
      data: [],
      selected: [],
      ids: [],
      pages: 0,
      limit,
      total: 0,
      current: 1,
      dataKey,
      entries: {},
      filter: defaultFilter,
    } as State<T, F>,
    reducers: {
      setData(state, payload: { data: T[]; total?: number }) {
        return {
          ...state,
          total: payload.total ?? 0,
          ids: payload.data.map(v => v[dataKey]),
          entries: keyby(payload.data, dataKey),
          pages: (payload.total ?? 0) / state.limit,
          data: payload.data,
        }
      },
      setSelect(state, payload: string[]) {
        return {
          ...state,
          selected: payload,
        }
      },
      toggleSelect(state, payload: string[]) {
        return {
          ...state,
          selected: xor(state.selected, payload),
        }
      },
      setStatus(state, payload: State<T, F>['status']) {
        return {
          ...state,
          status: payload,
        }
      },
      setCurrent(state, payload: number) {
        return {
          ...state,
          current: payload,
        }
      },
      setFilter(state, payload?: F) {
        return {
          ...state,
          filter: payload,
        }
      },
    },
    effects: {
      async handleGo(payload: number, _state, state) {
        this.setStatus('loading')
        this.setCurrent(payload)
        try {
          const { data, total } = await fetcher.current?.(state2Query(state))
          this.setStatus('loaded')
          this.setData({ data: uniqby(state.data.concat(data), dataKey), total })
        } catch (e) {
          this.setStatus('error')
        }
      },
      async handleNext(_payload: void, _state, state) {
        this.handleGo(state.current + 1)
      },
      async handlePrev(_payload: void, _state, state) {
        this.handleGo(state.current - 1)
      },
      async handleReinit(_payload: void, _state) {
        this.handleGo(1)
      },
      async handleRefresh(_payload: void, _state, state) {
        this.handleGo(state.current)
      },
    },
  })
  const handleSetFilter = useCallback(
    (filter: F) => {
      const next = { ...state.filter, ...filter }
      dispatch.setFilter(next)
      dispatch.handleRefresh()
    },
    [dispatch.setFilter, state.filter, dispatch.handleRefresh],
  )
  const handleSetFilterByField = useCallback(
    <K extends keyof F>(filed: K, value: F[K]) => {
      const next = { ...state.filter, [filed]: value }
      dispatch.setFilter(next)
      dispatch.handleRefresh()
    },
    [dispatch.setFilter, state.filter, dispatch.handleRefresh],
  )
  const handleResetFilter = useCallback(() => {
    dispatch.setFilter(defaultFilter)
    dispatch.handleRefresh()
  }, [dispatch.setFilter, defaultFilter, dispatch.handleRefresh])
  const handleClearFilter = useCallback(() => {
    dispatch.setFilter(undefined)
    dispatch.handleRefresh()
  }, [dispatch.setFilter, dispatch.handleRefresh])
  return {
    state,
    dispatch: {
      ...dispatch,
      handleSetFilter,
      handleResetFilter,
      handleClearFilter,
      handleSetFilterByField,
    },
  }
}
