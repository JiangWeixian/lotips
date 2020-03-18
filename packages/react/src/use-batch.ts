import { useEffect, useState } from 'react'

const buffer = {} as { [type: string]: { [key: string]: Function[] } }

const running = {} as { [type: string]: boolean }

const interval = 10

const listByIds = async <D = any>(type: string, fetcher: (ids: string[]) => Promise<D[]>) => {
  const keys = Object.keys(buffer[type])
  if (keys.length === 0) {
    running[type] = false
    return
  }
  const data = await fetcher(keys as any[])
  keys.forEach((k, i) => {
    const callbacks = buffer[type][k]
    // tslint:disable-next-line:no-dynamic-delete
    delete buffer[type][k]
    callbacks.forEach(callback => {
      callback(data[i] || undefined)
    })
  })
  setTimeout(() => listByIds(type, fetcher), interval)
}

export const useBatch = <D = any>(
  type: string,
  id: string,
  api: (ids: string[]) => Promise<D[]>,
) => {
  const [item, setItem] = useState<D>()
  useEffect(() => {
    if (!id) {
      return
    }
    new Promise<D>(resolve => {
      buffer[type] = buffer[type] || {}
      buffer[type][id] = buffer[type][id] || []
      buffer[type][id].push(resolve)
      if (!running[type]) {
        running[type] = true
        setTimeout(() => listByIds(type, api), interval)
      }
    }).then(setItem)
  }, [type, id])

  return item
}
