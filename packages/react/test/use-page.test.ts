import { usePage } from '../src/use-page'
import { renderHook, act } from '@testing-library/react-hooks'

describe('use-page', () => {
  test('default state should work fine', () => {
    const hook = renderHook(() =>
      usePage({
        api: async(params: { skip: number; limit: number; filter: { text: string } }) => {
          return { data: [1], total: 3 }
        },
        defaultFilter: { text: '' },
        limit: 10,
        dataKey: 'id',
      }),
    )
    expect(hook.result.current.state).toMatchObject({
      data: [],
      selected: [],
      ids: [],
      pages: 0,
      limit: 10,
      total: 0,
      current: 1,
      dataKey: 'id',
      entries: {},
      filter: { text: '' },
    })
  })

  test('reinit should work fine', async() => {
    const hook = renderHook(() =>
      usePage({
        api: async(params: { skip: number; limit: number; filter: { text: string } }) => {
          return { data: [{ id: 1 }], total: 100 }
        },
        defaultFilter: { text: '' },
        limit: 10,
        dataKey: 'id',
      }),
    )

    hook.result.current.dispatch.handleReinit()
    await hook.waitForNextUpdate()
    expect(hook.result.current.state.data).toMatchObject([{ id: 1 }])
    expect(hook.result.current.state.pages).toBe(10)
  })

  test('set filter should work in debounce mode', async() => {
    let cnt = 0
    const hook = renderHook(() =>
      usePage({
        api: async(params: { skip: number; limit: number; filter: { text: string } }) => {
          cnt += 1
          return { data: [{ id: 1 }], total: 100 }
        },
        defaultFilter: { text: '' },
        limit: 10,
        dataKey: 'id',
      }),
    )

    Array(10)
      .fill(0)
      .forEach((v) => {
        hook.result.current.dispatch.handleClearFilter()
      })
    await hook.waitForNextUpdate()
    expect(cnt).toBe(1)
  })

  test('filter clear & set should work fine', () => {
    const hook = renderHook(() =>
      usePage({
        api: async(params: { skip: number; limit: number; filter: { text: string } }) => {
          return { data: [{ id: 1 }], total: 100 }
        },
        defaultFilter: { text: '' },
        limit: 10,
        dataKey: 'id',
      }),
    )
    hook.result.current.dispatch.handleClearFilter()
    expect(hook.result.current.state.filter).toBe(undefined)
    hook.result.current.dispatch.handleSetFilter({ text: '1' })
    expect(hook.result.current.state.filter).toMatchObject({ text: '1' })
    hook.result.current.dispatch.handleSetFilterByField('text', '2')
    expect(hook.result.current.state.filter).toMatchObject({ text: '2' })
  })

  test('next, prev, go should change current correct', async() => {
    let cnt = 0
    const list = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
    const hook = renderHook(() =>
      usePage({
        api: async(params: { skip: number; limit: number; filter: { text: string } }) => {
          cnt += 1
          return { data: [list[cnt]], total: 100 }
        },
        defaultFilter: { text: '' },
        limit: 10,
        dataKey: 'id',
      }),
    )
    hook.result.current.dispatch.handleGo(1)
    expect(hook.result.current.state.current).toBe(1)
    hook.result.current.dispatch.handlePrev()
    expect(hook.result.current.state.current).toBe(0)
    hook.result.current.dispatch.handleNext(1)
    expect(hook.result.current.state.current).toBe(1)
    expect(cnt).toBe(3)
  })

  test('next, prev, go should change current correct', async() => {
    let cnt = 0
    const list = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
    const hook = renderHook(() =>
      usePage({
        api: async(params: { skip: number; limit: number; filter: { text: string } }) => {
          cnt += 1
          return { data: [list[cnt]], total: 100 }
        },
        defaultFilter: { text: '' },
        limit: 10,
        dataKey: 'id',
      }),
    )
    hook.result.current.dispatch.handleGo(1)
    await hook.waitForNextUpdate()
    hook.result.current.dispatch.handlePrev()
    await hook.waitForNextUpdate()
    hook.result.current.dispatch.handleNext(1)
    expect(cnt).toBe(3)
    await hook.waitForNextUpdate()
    expect(hook.result.current.state.data).toMatchObject([{ id: 1 }, { id: 2 }, { id: 3 }])
  })

  test('status should change correct', async() => {
    const hook = renderHook(() =>
      usePage({
        api: async(params: { skip: number; limit: number; filter: { text: string } }) => {
          return { data: [{ id: 0 }], total: 100 }
        },
        defaultFilter: { text: '' },
        limit: 10,
        dataKey: 'id',
      }),
    )
    hook.result.current.dispatch.handleGo(1)
    expect(hook.result.current.state.status).toBe('loading')
    await hook.waitForNextUpdate()
    expect(hook.result.current.state.status).toBe('loaded')
  })

  test('set selected should work fine', () => {
    const hook = renderHook(() =>
      usePage({
        api: async(params: { skip: number; limit: number; filter: { text: string } }) => {
          return { data: [{ id: '1' }], total: 100 }
        },
        defaultFilter: { text: '' },
        limit: 10,
        dataKey: 'id',
      }),
    )
    expect(hook.result.current.state.selected).toMatchObject([])
    hook.result.current.dispatch.setSelect(['1'])
    expect(hook.result.current.state.selected).toMatchObject(['1'])
  })
})
