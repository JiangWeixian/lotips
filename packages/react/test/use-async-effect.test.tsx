import React, { useState, useContext } from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { useAsyncEffect } from '../src/use-async-effect'
import { delay } from '../utils/delay'

const AsyncEffectContext = React.createContext(1)

describe('use-async-effect', () => {
  test('work with async function', async() => {
    const _useAsyncEffect = () => {
      const value = useContext(AsyncEffectContext)
      return {
        value,
      }
    }
    const AsyncEffectProvider = ({ children }) => {
      const [value, setValue] = useState(1)
      useAsyncEffect(async() => {
        await delay(1000)
        setValue(2)
      }, [])
      return <AsyncEffectContext.Provider value={value}>{children}</AsyncEffectContext.Provider>
    }
    const hook = renderHook(() => _useAsyncEffect(), { wrapper: AsyncEffectProvider })
    await hook.waitForNextUpdate()
    expect(hook.result.current.value).toBe(2)
  })

  test('clear function shoud work fine', async() => {
    let reseted = 0
    const _useAsyncEffect = () => {
      const [value, setValue] = useState()
      useAsyncEffect(async() => {
        return () => {
          reseted += 1
        }
      }, [])
      return {
        value,
        setValue,
      }
    }
    const { unmount } = renderHook(() => _useAsyncEffect())
    await delay(2000)
    act(() => {
      unmount()
    })
    expect(reseted).toBe(1)
  }, 5000)
})
