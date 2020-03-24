// refs: vue-navigator/src/navigator.js

import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import { Route } from 'vue-router'

const Routes: string[] = []

const record = (to: Route, replaceFlag = false) => {
  const name = to.name || to.path
  if (replaceFlag) {
    // do nothing
    Routes.splice(Routes.length - 1, 1, name)
  } else {
    const toIndex = Routes.lastIndexOf(name)
    if (toIndex === -1) {
      // forward
      Routes.push(name)
    } else if (toIndex === Routes.length - 1) {
      // refresh: do nothing
    } else {
      // backward
      const count = Routes.length - 1 - toIndex
      Routes.splice(Routes.length - count, count)
    }
  }
}

export const MobileBack: Plugin = ctx => {
  ctx.app.router?.afterEach(to => {
    record(to)
  })
  Vue.prototype.$Routes = Routes
}
