/**
 * TODO: deprecated to use-rematch
 */
import { useRematchReducer } from '@use-rematch/core'
import { useCallback, useRef } from 'react'
import debounce from 'lodash.debounce'

type UseLoadmoreProps<T = any, F = any, L = any> = {
  defaultFilter?: F
  api(query: { loadmoreKey?: L; filter?: F }): Promise<{ data: T[]; loadmoreKey: L }>
  state2Query?: (state: State<T, F>) => { skip: number; limit: number; filter?: F }
  dataKey?: string
}

type State<T = any, F = any, L = any> = {
  data: T[]
  loadmoreKey?: L
  status?: 'loading' | 'error' | 'loaded'
  filter?: F
}

export const useLoadmore = <T = any, F = any, L = any>({
  defaultFilter,
  api,
}: UseLoadmoreProps<T, F, L>) => {
  const [state, dispatch] = useRematchReducer({
    name: 'use-loadmore',
    state: {
      data: [],
      loadmoreKey: undefined,
      filter: undefined,
    } as State<T>,
    reducers: {
      setData(state, payload: { data: T[]; loadmoreKey: L }) {
        return {
          ...state,
          ...payload,
        }
      },
      setStatus(state, payload: State<T, F, L>['status']) {
        return {
          ...state,
          status: payload,
        }
      },
      setFilter(state, payload: F) {
        return {
          ...state,
          filter: payload,
        }
      },
      clearFilter(state, _payload: void) {
        return {
          ...state,
          filter: undefined,
        }
      },
    },
    effects: {
      async handleRefresh(_payload: void, _state, state) {
        this.setStatus('loading')
        try {
          const result = await api?.({ loadmoreKey: undefined, filter: state.filter })
          this.setStatus('loaded')
          this.setData(result)
        } catch (e) {
          this.setStatus('error')
        }
      },
      async handleLoadmore(_payload: void, _state, state) {
        this.setStatus('loading')
        try {
          const result = await api?.({ loadmoreKey: state.loadmoreKey, filter: state.filter })
          this.setStatus('loaded')
          this.setData(result)
        } catch (e) {
          this.setStatus('error')
        }
      },
    },
  })
  const refresh = useRef(debounce(dispatch.handleRefresh, 300))
  const handleSetFilter = useCallback(
    (filter: F) => {
      const next = { ...state.filter, ...filter }
      dispatch.setFilter(next)
      refresh.current()
    },
    [dispatch, state.filter, refresh],
  )
  const handleSetFilterByField = useCallback(
    <K extends keyof F>(filed: K, value: F[K]) => {
      const next = { ...state.filter, [filed]: value }
      dispatch.setFilter(next as F)
      refresh.current()
    },
    [dispatch, state.filter],
  )
  const handleResetFilter = useCallback(() => {
    dispatch.setFilter(defaultFilter as F)
    refresh.current()
  }, [dispatch, defaultFilter])
  const handleClearFilter = useCallback(() => {
    dispatch.clearFilter()
    refresh.current()
  }, [dispatch])
  return {
    state,
    dispatch: {
      ...dispatch,
      handleSetFilter,
      handleSetFilterByField,
      handleResetFilter,
      handleClearFilter,
    },
  }
}
