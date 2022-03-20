import React, { useState, useEffect, useContext } from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { describe, expect, it } from 'vitest'

import { useAsyncState } from '../src/use-async-state'

const AsyncStateContext = React.createContext(1)

const AsyncStateProvider = ({ children }) => {
  const [value, setValue] = useState(1)
  useEffect(() => {
    setTimeout(() => {
      setValue(2)
    }, 1000)
  }, [])
  return <AsyncStateContext.Provider value={value}>{children}</AsyncStateContext.Provider>
}

const _useAsyncState = (nullstate = undefined) => {
  const value = useContext(AsyncStateContext)
  const [state, set] = useAsyncState(value, { nullstate })
  return {
    state,
    set,
  }
}

describe('use-async-state', () => {
  it('should be inited by async value', async() => {
    const hook = renderHook(() => _useAsyncState(), { wrapper: AsyncStateProvider })
    await hook.waitForNextUpdate()
    expect(hook.result.current.state).toBe(2)
  })

  it('initial async value should be rewrited by manual set', async() => {
    const hook = renderHook(() => _useAsyncState(), { wrapper: AsyncStateProvider })
    await hook.waitForNextUpdate()
    expect(hook.result.current.state).toBe(2)
    act(() => {
      hook.result.current.set(3)
    })
    expect(hook.result.current.state).toBe(3)
  })

  it('nullstate value availabled be configed', async() => {
    // nullstate值不再是undefined, 而是0
    // 一旦nullstate设置为0, 当通过set之后将会重新使用async state
    const hook = renderHook(() => _useAsyncState(0), { wrapper: AsyncStateProvider })
    await hook.waitForNextUpdate()
    expect(hook.result.current.state).toBe(2)
    act(() => {
      hook.result.current.set(0)
    })
    expect(hook.result.current.state).toBe(2)
  })
})
