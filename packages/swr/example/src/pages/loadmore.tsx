import React from 'react'
import { useLoadMore } from '../../../src/use-loadmore'

export default () => {
  const loadmore = useLoadMore({
    name: 'loadmore',
    revalidateOnFilter: true,
    defaultFilter: {
      text: '',
    },
    api: async (
      loadMoreKey: number,
      filter,
    ): Promise<{ data: { id: string }[]; loadMoreKey: number }> => {
      const result = await fetch('/loadmore', { method: 'GET' })
        .then(res => res.json())
        .then(res => res)
      console.log(loadMoreKey, filter)
      return { data: result.data, loadMoreKey: result.loadMoreKey }
    },
  })
  console.log(loadmore)
  return (
    <div>
      <button onClick={() => loadmore.loadmore()}>loadmore with concat prev ones</button>
      <button onClick={() => loadmore.loadmore(true)}>loadmore with reset</button>
      <input onChange={e => loadmore.changeSingleFilter('text', e.target.value)} />
      <div>
        {loadmore.data?.map(v => {
          return v.id
        })}
      </div>
    </div>
  )
}
