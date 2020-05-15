import { ServerMiddleware } from '@nuxt/types'

export const health: ServerMiddleware = (req, res) => {
  res.write('hello world!')
  res.end()
}
