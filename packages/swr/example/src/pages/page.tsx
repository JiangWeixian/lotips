import React from 'react'
import { usePage } from '../../../src/use-page'

export default () => {
  const page = usePage({
    name: 'page',
    limit: 15,
    revalidateOnFilter: false,
    defaultFilter: {
      text: '',
    },
    api: async (skip, limit, query): Promise<{ data: { id: string }[]; count: number }> => {
      const result = await fetch('/page', { method: 'GET' })
        .then(res => res.json())
        .then(res => res)
      console.log(skip, limit, query)
      return { data: result.data, count: result.count }
    },
  })
  console.log(page)
  return (
    <div>
      <button onClick={page.next}>next</button>
      <button onClick={page.prev}>prev</button>
      <button onClick={page.list}>apply fiter</button>
      <input onChange={e => page.changeSingleFilter('text', e.target.value)} />
    </div>
  )
}
