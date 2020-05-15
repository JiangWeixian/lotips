import { Context } from '@nuxt/types'

export const getUserAgent = (context: Context) => {
  const ua = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  return ua
}
