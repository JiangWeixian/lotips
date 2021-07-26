import { renderHook, act } from '@testing-library/react-hooks'
import { useDebounce } from '../src/use-debounce'
import { delay } from '../utils/delay'

describe('use-debounce', () => {
  test('default value should work', () => {
    const { result } = renderHook(() => useDebounce({ defaultValue: 1 }))
    expect(result.current.value).toBe(1)
    expect(result.current.debouncedValue).toBe(1)
  })

  test('value should be react, debounced value should be debounced', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useDebounce({ interval: 2000 }))
    act(() => {
      Array(10)
        .fill(0)
        .forEach((v) => {
          result.current.setValue(2)
        })
    })
    await delay(1000)
    expect(result.current.debouncedValue).toBe(undefined)
    await delay(2000)
    expect(result.current.value).toBe(2)
    expect(result.current.debouncedValue).toBe(2)
  }, 5000)
})
