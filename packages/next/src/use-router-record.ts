/**
 * NOTE:
 * record route change
 * WARNING:
 * Routes is not a react.state
 */
import { useRouter } from 'next/router'

import { record } from '../../internal/route-record'
export { Routes } from '../../internal/route-record'

let inited = false

export const useRouterRecord = () => {
  const router = useRouter()
  if (!inited && router.events) {
    record({ path: router.pathname, name: router.asPath })
    router.events.on('routeChangeComplete', path => {
      inited = true
      record({ path, name: path })
    })
  }
}
