/**
 * refs: https://zh.nuxtjs.org/api/configuration-router/#middleware
 * WHY:
 * 如果在`mounted`阶段通过`ua`设置一些东西，那么对于`ssr`会有闪屏发生
 * WARNING:
 * 只能够在`page`的`asyncData`拿到`context.ua`。而在非页面组件组件中是[无法使用asyncData](https://zh.nuxtjs.org/faq/async-data-components/)。
 */

import { Middleware } from '@nuxt/types'
import { getUserAgent } from '../helpers/get-user-agent'

export const middlewareUserAgent: Middleware = function(context) {
  // 给上下文对象增加 userAgent 属性（增加的属性可在 `asyncData` 和 `fetch` 方法中获取
  const ua = getUserAgent(context)
  ;(context as any).ua = ua
}
