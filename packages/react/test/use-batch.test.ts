import { useBatch } from '../src/use-batch'
import { renderHook } from '@testing-library/react-hooks'
import { delay } from '../utils/delay'

let cnt = 0
const api = async(_ids: string[]) => {
  cnt += 1
  return [1]
}

describe('use-batch', () => {
  test('combined into a batch request', async() => {
    const hook1 = renderHook(() => useBatch('use-batch', '1', api))
    const hook2 = renderHook(() => useBatch('use-batch', '1', api))
    const hook3 = renderHook(() => useBatch('use-batch', '1', api))
    const hook4 = renderHook(() => useBatch('use-batch', '1', api))
    const hook5 = renderHook(() => useBatch('use-batch', '1', api))
    await delay(1000)
    expect(cnt).toBe(1)
    expect(hook1.result.current).toBe(1)
    expect(hook2.result.current).toBe(1)
    expect(hook3.result.current).toBe(1)
    expect(hook4.result.current).toBe(1)
    expect(hook5.result.current).toBe(1)
  }, 3000)
})
