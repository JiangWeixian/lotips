// refs: vue-navigator/src/navigator.js

import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import { Route } from 'vue-router'
import { Routes, record } from '../../../internal/route-record'

export const pluginRouterRecord: Plugin = ctx => {
  ctx.app.router?.afterEach(to => {
    record<Route>(to)
  })
  Vue.prototype.$Routes = Routes
}
